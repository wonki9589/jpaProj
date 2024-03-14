package jpaProject.jpashop.service;


import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.mail.Message;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;
import jpaProject.jpashop.controller.EmailPostDto;
import jpaProject.jpashop.domain.EmailMessage;
import jpaProject.jpashop.domain.Product;
import jpaProject.jpashop.repository.ManageProductRepository;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONObject;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMailMessage;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.Map;

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
    public String sendReservationEmail(Map jsonMap, String email){

        MimeMessage message = javaMailSender.createMimeMessage();
        try {
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(message, false, "UTF-8");

            mimeMessageHelper.setTo(email); // 메일 수신자
            mimeMessageHelper.setSubject("[Curly] 주문 상품 예약 메일입니다."); // 메일 제목
            mimeMessageHelper.setText(htmlContent(jsonMap), true); // 메일 본문 내용, HTML 여부

            log.info("Success");
            javaMailSender.send(message);
        }catch (MessagingException e) {
            e.printStackTrace();
        }
        return "send Ok";
    }

    // 회원가입 이메일 인증 - 요청 시 body로 인증번호 반환하도록 작성하였음
    // 주문상품이랑 상품이미지 한꺼번에 받아서 메일안에다가 넣어야해
    public ResponseEntity settingMail(Map jsonMap,String email) {
        EmailMessage emailMessage = EmailMessage.builder()
                //.to(emailPostDto.getEmail())
                .to(email)
                .subject("[Curly] 주문 상품 예약 메일입니다.")
                .build();

        sendReservationEmail(jsonMap,email);

        return ResponseEntity.ok(sendReservationEmail(jsonMap,email));
    }


    private String htmlContent(Map jsonMap){
        StringBuffer sb = new StringBuffer();

        sb.append("<html><body>");
        sb.append("<meta http-equiv='Content-Type' content='text/html; charset=utf-8'>");
        sb.append(jsonMap + "<br>");
        sb.append("왜 여려개가 가는거지 ?  .<br>");
        sb.append("<img  src='https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/tomato.jpg' /><br>");
        sb.append("<a href='https://www.naver.com'>상품보기</a>");
        sb.append("</body></html>");
        String str=sb.toString();
        return str;
    }

    /**
     * @apiNote JSONObject를 Map<String, String> 형식으로 변환처리.
     * @return Map<String,String>
     * **/
    public Map<String, Object> getMapFromJsonObject(JSONObject jsonObj){
        Map<String, Object> map = null;

        try {
            map = new ObjectMapper().readValue(jsonObj.toString(), Map.class);
        } catch (JsonParseException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (JsonMappingException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return map;
    }

}
