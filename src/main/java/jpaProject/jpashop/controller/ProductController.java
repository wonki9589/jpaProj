package jpaProject.jpashop.controller;

import jpaProject.jpashop.domain.item.Product;
import jpaProject.jpashop.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class ProductController {
    private final ProductRepository productRepository;

    @PostMapping("/api/product")
    public ResponseEntity saveProduct(@RequestBody ProductDTO productDTO){
        Product product = Product.builder()
                .name(productDTO.getName())
                .build();
        productRepository.save(product);
        return ResponseEntity.ok().build();
    }
}
