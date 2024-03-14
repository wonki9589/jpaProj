package jpaProject.jpashop.controller;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

import jpaProject.jpashop.domain.EmailMessage;
import jpaProject.jpashop.domain.Member;
import jpaProject.jpashop.domain.Product;

import jpaProject.jpashop.repository.ProductRepository;
import jpaProject.jpashop.repository.UserRepository;
import jpaProject.jpashop.service.OrderService;
import jpaProject.jpashop.service.ProductService;
import lombok.RequiredArgsConstructor;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ProductController<orderItemDTO> {
    private final ProductService productService;
    private final OrderService orderService;
    private final ProductRepository productRepository;
    private final UserRepository userRepository;

    @PostMapping("/api/product")
    public ResponseEntity saveProduct(@RequestBody List<Object> productDTO) {

        productService.existData();
        /**
         * hashmap  -> list
         * com.fasterxml.jackson.databind.exc.MismatchedInputException: Cannot deserialize value of type 'java.util.ArrayList'
         */
        Object mapper = new ObjectMapper();
        ((ObjectMapper) mapper).enable(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY);  // list deserialization 기능 활성화
        List<Product> list = ((ObjectMapper) mapper).convertValue(productDTO, new TypeReference<List<Product>>(){});

        for( int i =0; i < list.size(); i++){
            Product product = Product.builder()
                    .id(list.get(i).getId())
                    .name(list.get(i).getName())
                    .price(list.get(i).getPrice())
                    .image(list.get(i).getImage())
                    .category(list.get(i).getCategory())
                    .build();
            productRepository.save(product);
        }
        return ResponseEntity.ok().build();
    }

    @GetMapping("/api/product")
    public ResponseEntity getProduct(@RequestParam(name = "idx") Integer idx) {
        Product product = productRepository.findById(idx)
                .orElseThrow(() -> new RuntimeException("Not Found"));
        System.out.println("prodect ? "+ product);
        return ResponseEntity.ok(product);
    }

    @PostMapping("/api/order/new")
    public ResponseEntity saveOrder(@RequestBody List<Object> orderItemDTO) throws JSONException {
        Long memberId = 0L;
        JSONArray jsonArray = new JSONArray(orderItemDTO);

        // 3 - 1부터 시작해서   i가 0보다 클떄까지  1씩 감소   // 2 , 1 , 0
        for(int i=jsonArray.length() - 1; i>=0; i--){
            JSONObject jsonobject = jsonArray.getJSONObject(i);
            // 마지막 array (user 이름) 면 뽑아와서 id 반환
            if(i == jsonArray.length() - 1 ){
                String username = jsonobject.getString("name");
                Member member = new Member();
                member = userRepository.findByUsername(username);
                memberId = member.getId() ;
            }else{
                // productId , quantity 뽑아서 서비스로 넘김
                System.out.println(i +"번쨰" + jsonobject);
                Long productId = jsonobject.getLong("id");
                int quantity = jsonobject.getInt("quantity");
                orderService.order(memberId,productId,quantity);
            }
        }
        return ResponseEntity.ok(200);
    }


    // 회원가입 이메일 인증 - 요청 시 body로 인증번호 반환하도록 작성하였음
    @PostMapping("/api/email")
    public ResponseEntity sendMail(@RequestBody EmailPostDto emailPostDto) {
        EmailMessage emailMessage = EmailMessage.builder()
                //.to(emailPostDto.getEmail())
                .to("tubewonki@gmail.com")
                .subject("[Curly] 주문 상품 예약 메일입니다.")
                .build();

       productService.sendReservationEmail(emailMessage);

        return ResponseEntity.ok(productService.sendReservationEmail(emailMessage));
    }
}
