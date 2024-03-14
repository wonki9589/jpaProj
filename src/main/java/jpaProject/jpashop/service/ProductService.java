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

    private String htmlContent(Map jsonMap){
        StringBuffer sb = new StringBuffer();
        StringBuffer jsonName = new StringBuffer();
        StringBuffer jsonImage = new StringBuffer();
        // map 으로 들어오는거 나눠서 넣어야함
        for(Object key : jsonMap.keySet()){
            Map json = (Map) jsonMap.get(key);
            for(Object k : json.keySet() ){
                //System.out.println("  key: " + k + " value: " +json.get(k) );
                if(k == "name") jsonName.append("상품이름 : "+json.get(k)+ "<br>");
                if(k == "image") jsonName.append("<img  src='" + json.get(k) + "'"+ " width='200' height='200'" +" <br>");
                if(k == "id") jsonName.append("<br>");
                if(k == "quantity") jsonName.append("상품수량 : "+json.get(k)+ " 개" +"<br>");
                if(k == "price") jsonName.append("상품 가격 : "+json.get(k)+ " $"+" <br>");

            }
                jsonName.append("<br>");
                jsonName.append("<br>");
        }
        jsonName.toString();
        System.out.println(jsonName);

        sb.append("<html><body>");
        sb.append("<meta http-equiv='Content-Type' content='text/html; charset=utf-8'>");
        sb.append("<br>");
        sb.append(jsonName + "<br>");
        sb.append("문의 및 기타사항은 링크를 참고해주세요 ! <br>");
        sb.append("<a href='https://www.naver.com'>문의 사항 </a>");
        sb.append("<br>");
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
