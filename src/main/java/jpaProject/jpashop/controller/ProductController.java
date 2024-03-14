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

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

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
        String email = "";
        Map<String, Object> jsonMap = new HashMap<String, Object>() ;
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
                email = member.getEmail();

            }else{
                // productId , quantity 뽑아서 서비스로 넘김
               // System.out.println(i +"번쨰" + jsonobject);

                Long productId = jsonobject.getLong("id");
                int quantity = jsonobject.getInt("quantity");
//                orderService.order(memberId,productId,quantity);

                // json object -> map
                Map<String,Object> objectMap = productService.getMapFromJsonObject(jsonobject);
                jsonMap.put(String.valueOf(i),objectMap);
            }
        }
        // 한줄씩 상품정보가 들어와 여기서 어디에다가 담고 이메일 서비스로 넘기자
        // json 한줄씩 오는거를 두줄로 합치고 넘겨서 html 에서 반복문으로 뽑을수가 있나 ?
        System.out.println("jsonMap : "+ jsonMap);
        System.out.println("email : "+ email);
        productService.settingMail(jsonMap,email);
        return ResponseEntity.ok(200);
    }



}
