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

import java.util.List;
import java.util.Map;

@Getter @Setter
public class ProductDTO {

    private Integer id;
    private List<Object> info;

    private String name ;
    private String price ;

    private String image ;
    private String category ;
}
