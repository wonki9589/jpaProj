package jpaProject.jpashop.service;


import jakarta.mail.Message;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;
import jpaProject.jpashop.controller.EmailPostDto;
import jpaProject.jpashop.domain.EmailMessage;
import jpaProject.jpashop.domain.Product;
import jpaProject.jpashop.repository.ManageProductRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMailMessage;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.UnsupportedEncodingException;
import java.util.List;

@Service
@Transactional(readOnly = true)
@Slf4j
public class ProductService {

    private final ManageProductRepository manageProductRepository;
    private final JavaMailSender javaMailSender;


    public ProductService(ManageProductRepository manageProductRepository, JavaMailSender javaMailSender) {
        this.manageProductRepository = manageProductRepository;
        this.javaMailSender = javaMailSender;
    }

    public List<Product> existData(){
        List<Product> data = manageProductRepository.findAll();
        if(!data.isEmpty()){
            throw new IllegalStateException("이미 데이터가 있습니다.");
        }
        return data;
    }

    /**
     * MimeMessage Gmail
    * */
    public String sendReservationEmail(EmailMessage emailMessage){

        MimeMessage message = javaMailSender.createMimeMessage();
        try {
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(message, false, "UTF-8");

            mimeMessageHelper.setTo(emailMessage.getTo()); // 메일 수신자
            mimeMessageHelper.setSubject(emailMessage.getSubject()); // 메일 제목
            mimeMessageHelper.setText(htmlContent(), true); // 메일 본문 내용, HTML 여부

            log.info("Success");
            javaMailSender.send(message);
        }catch (MessagingException e) {
            e.printStackTrace();
//            //제목
//            message.setSubject("예약 확인 메일입니다.");
//            // html 내용
//            String htmlStr =  htmlContent();
//            //내용 설정(인코딩)
//            message.setText(htmlStr,"UTF-8","html");
//            // To 설정
//            message.addRecipient(Message.RecipientType.TO, new InternetAddress("tubewonki95891@gmail.com","Culry","UTF-8"));
//
//            javaMailSender.send(message);
        }
        return "send Ok";
    }

    private String htmlContent(){
        StringBuffer sb = new StringBuffer();
        sb.append("<html><body>");
        sb.append("<meta http-equiv='Content-Type' content='text/html; charset=utf-8'>");
        sb.append("<h1>"+"예약 상품"+"<h1><br>");
        sb.append("신간 도서를 소개합니다.<br><br>");
        sb.append("<img  src='https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/tomato.jpg' /><br>");
        sb.append("<a href='https://www.naver.com'>상품보기</a>");
        sb.append("</body></html>");
        String str=sb.toString();
        return str;
    }

}
