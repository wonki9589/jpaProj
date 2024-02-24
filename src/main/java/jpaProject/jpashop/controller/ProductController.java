package jpaProject.jpashop.controller;

import jpaProject.jpashop.domain.item.Product;
import jpaProject.jpashop.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class ProductController {
    private final ProductRepository productRepository;

    @PostMapping("/api/product")
    public ResponseEntity saveProduct(@RequestBody List<Object> productDTO){

        Product product = Product.builder()
                .info(productDTO)
                .build();
        productRepository.save(product);
        return ResponseEntity.ok().build();
    }
}
