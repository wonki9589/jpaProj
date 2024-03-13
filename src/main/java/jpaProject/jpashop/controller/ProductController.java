package jpaProject.jpashop.controller;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.util.JSONPObject;
import jpaProject.jpashop.domain.item.Product;
import jpaProject.jpashop.repository.ProductRepository;
import jpaProject.jpashop.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.apache.tomcat.util.json.JSONParser;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;
    private final ProductRepository productRepository;

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

}
