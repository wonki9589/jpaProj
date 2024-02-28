package jpaProject.jpashop.service;

import jpaProject.jpashop.domain.EmailMessage;
import jpaProject.jpashop.domain.Member;
import jpaProject.jpashop.repository.EmailRepository;
import jpaProject.jpashop.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;


@Slf4j
@Service
@RequiredArgsConstructor
public class EmailService {

    private final EmailRepository emailRepository;

    private final JavaMailSender javaMailSender;


    public boolean sendMail(EmailMessage emailMessage) throws Exception{
        boolean msg = false;
        // 임시비밀번호
        String authNum = createCode();

        // 여기서 유효성 검사
        validNameEmail(emailMessage.getUsername(),emailMessage.getTo());

        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();

        simpleMailMessage.setTo(emailMessage.getTo());
        simpleMailMessage.setSubject(emailMessage.getSubject());
        simpleMailMessage.setFrom("tubewonki95891@gmail.com");
        simpleMailMessage.setText(emailMessage.getMessage());

        try {
            log.info("Success");
            javaMailSender.send(simpleMailMessage);
        }catch (Exception e){
            e.printStackTrace();
            log.info("fail");
            return msg;
        }
        return msg = true;
    }
    // 회원 이름과 이메일 존재하는지 메소드
    private List<Member> validNameEmail(String username , String email){
        List<Member> members = emailRepository.validNameEmail(username,email);
        System.out.println("service ~ " + members);
            if(members.isEmpty()){
                throw new IllegalStateException("입력한 정보의 데이터가 없습니다");
            }
        return members;
    }




    // 인증번호 및 임시 비밀번호 생성 메서드
    public String createCode() {
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
