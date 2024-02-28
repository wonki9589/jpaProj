package jpaProject.jpashop.service;

import jpaProject.jpashop.domain.EmailMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.util.Random;


@Slf4j
@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender javaMailSender;

    public boolean sendMailReject(EmailMessage emailMessage) throws Exception{
        boolean msg = false;
        // 임시비밀번호
        String authNum = createCode();

        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();

        simpleMailMessage.setTo(emailMessage.getTo());
        simpleMailMessage.setSubject(emailMessage.getSubject());
        simpleMailMessage.setFrom("tubewonki95891@gmail.com");
        simpleMailMessage.setText(emailMessage.getMessage());
//        simpleMailMessage.setText(authNum);

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
