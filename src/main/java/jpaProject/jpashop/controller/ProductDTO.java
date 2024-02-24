package jpaProject.jpashop.controller;

import io.hypersistence.utils.hibernate.type.json.JsonType;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jpaProject.jpashop.domain.item.Product;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Type;

import java.util.Map;

@Getter @Setter
public class ProductDTO {
    private Integer idx;

    private Map<String, Object> name;

//    @Builder
//    public ProductDTO(Integer idx, Map<String ,Object> name){
//        this.idx = idx;
//        this.name = name;
//    }
}
