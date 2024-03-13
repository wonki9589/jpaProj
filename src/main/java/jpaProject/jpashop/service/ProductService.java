package jpaProject.jpashop.service;


import jpaProject.jpashop.controller.ProductDTO;
import jpaProject.jpashop.domain.item.Product;
import jpaProject.jpashop.repository.ManageProductRepository;
import jpaProject.jpashop.repository.ProductRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@Slf4j
public class ProductService {

    private final ManageProductRepository manageProductRepository;

    public ProductService(ManageProductRepository manageProductRepository) {
        this.manageProductRepository = manageProductRepository;
    }

    public List<Product> existData(){
        List<Product> data = manageProductRepository.findAll();
        if(!data.isEmpty()){
            throw new IllegalStateException("이미 데이터가 있습니다.");
        }
        return data;
    }
}
