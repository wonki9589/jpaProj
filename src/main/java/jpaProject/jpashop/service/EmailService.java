package jpaProject.jpashop.service;

import jpaProject.jpashop.controller.EmailPostDto;
import jpaProject.jpashop.domain.Member;
import jpaProject.jpashop.repository.EmailRepository;
import jpaProject.jpashop.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;


@Slf4j
@Service
@RequiredArgsConstructor
public class EmailService {

    private final EmailRepository emailRepository;

    private final UserRepository userRepository;
    private final JavaMailSender javaMailSender;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;


    public boolean mailInfo(EmailPostDto emailPostDto) throws Exception{

        EmailPostDto dto = createMailAndChargePassword(emailPostDto);

        try {
            log.info(" mailInfo Success");
            mailSend(dto);
        }catch (Exception e){
            e.printStackTrace();
            log.info("fail");
            return false;
        }
        return true;
    }

    public void mailSend(EmailPostDto emailPostDto) {

        SimpleMailMessage message = new SimpleMailMessage();

        message.setTo(emailPostDto.getTo());
        message.setFrom("tubewonki@gmail.com");
        message.setSubject(emailPostDto.getSubject());
        message.setText(emailPostDto.getMessage());

        javaMailSender.send(message);
        System.out.println("이메일 전송 완료");
    }


    public EmailPostDto createMailAndChargePassword(EmailPostDto emailPostDto) {

        String tempPassword = createPassword();
        //  임시 비밀번호 저장
        emailPostDto.setPassword(tempPassword);
        emailPostDto.setTo(emailPostDto.getEmail());
        emailPostDto.setSubject(emailPostDto.getUsername() + "님의 임시 비밀번호 안내 메일입니다.");
        emailPostDto.setMessage("안녕하세요. 임시비밀번호 안내 관련 메일 입니다." + emailPostDto.getUsername() +
                "님의 임시 비밀번호는" + tempPassword + " 입니다.");

        log.info("createMailAndChargePassword password"+ tempPassword );
        updatePassword(emailPostDto);

        return emailPostDto;
    }

    public void updatePassword(EmailPostDto emailPostDto) {
        // 임시비밀번호
        String pw = emailPostDto.getPassword();

        // 해당 맴버 찾아와야함
        Member members =userRepository.findByUsername(emailPostDto.getUsername());

        // 임시비밀번호  BCryptPasswrod 암호화
        String encodePw = bCryptPasswordEncoder.encode(pw);
        members.setPassword(encodePw);

        log.info("updatePassword  비밀번호  "+ pw );
        log.info("updatePassword 인코딩한 비밀번호  "+encodePw);

        // 비밀번호 업데이트
        emailRepository.updateMember(encodePw,members);

    }







    // 회원 이름과 이메일 존재하는지 메소드
    public List<Member> validNameEmail(String username , String email){
        List<Member> members = emailRepository.validNameEmail(username,email);

            if(members.isEmpty()){
                throw new IllegalStateException("입력한 정보의 데이터가 없습니다");
            }
        return members;
    }





    // 인증번호 및 임시 비밀번호 생성 메서드
    public String createPassword() {
        Random random = new Random();
        StringBuffer key = new StringBuffer();

        for (int i = 0; i < 8; i++) {
            int index = random.nextInt(4);

            switch (index) {
                case 0: key.append((char) ((int) random.nextInt(26) + 97)); break;
                case 1: key.append((char) ((int) random.nextInt(26) + 65)); break;
                default: key.append(random.nextInt(9));
            }
        }
        return key.toString();
    }

}
