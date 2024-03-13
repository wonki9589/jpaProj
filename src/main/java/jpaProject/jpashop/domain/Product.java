package jpaProject.jpashop.domain;

import io.hypersistence.utils.hibernate.type.json.JsonType;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Type;

import java.util.List;
import java.util.Map;

@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "Product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "IDX" , columnDefinition = "int(11)")
    private Integer idx;

    @Type(JsonType.class)
    @Column(name ="product_id" ,columnDefinition = "int(11)")
    private Integer id ;

    @Type(JsonType.class)
    @Column(name ="NAME", columnDefinition = "longtext")
    private String name ;

    @Type(JsonType.class)
    @Column(name ="PRICE", columnDefinition = "int(11)")
    private Integer price ;

    @Type(JsonType.class)
    @Column(name ="IMAGE", columnDefinition = "longtext")
    private String image ;

    @Type(JsonType.class)
    @Column(name ="CATEGORY", columnDefinition = "longtext")
    private String category ;

    /**
     * 리스트 칼럼 하나로 다 받아올때
     */
//    @Type(JsonType.class)
//    @Column(name ="INFO", columnDefinition = "longtext")
//    private List<Object> info;

}
