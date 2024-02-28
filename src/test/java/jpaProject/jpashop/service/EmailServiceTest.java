package jpaProject.jpashop.service;

import jakarta.mail.internet.MimeMessage;
import jpaProject.jpashop.domain.EmailMessage;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import java.io.InputStream;

@RunWith(SpringRunner.class)
@SpringBootTest
public class EmailServiceTest {

    @Autowired
    EmailService emailService;

    //private final JavaMailSender javaMailSender;


    @Test
    public void 이메일보내기() throws Exception {

        String authNum = "temppassword1234";

        JavaMailSender javaMailSender = new JavaMailSender() {
            @Override
            public MimeMessage createMimeMessage() {
                return null;
            }

            @Override
            public MimeMessage createMimeMessage(InputStream contentStream) throws MailException {
                return null;
            }

            @Override
            public void send(MimeMessage... mimeMessages) throws MailException {

            }

            @Override
            public void send(SimpleMailMessage... simpleMessages) throws MailException {
                SimpleMailMessage simpleMailMessage = new SimpleMailMessage();

                simpleMailMessage.setTo("tubewonki95891@gmail.com");
                simpleMailMessage.setSubject("email send test 입니다.");
                simpleMailMessage.setFrom("wonki95891@gmail.com");
                simpleMailMessage.setText("임시비밀번호는 " + authNum + "입니다.");
                try {

                    //    javaMailSender.send(simpleMailMessage);
                } catch (Exception e) {
                    e.printStackTrace();

                }

            }
        };
    }
}