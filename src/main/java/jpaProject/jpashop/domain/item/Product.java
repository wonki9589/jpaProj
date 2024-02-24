package jpaProject.jpashop.domain.item;

import io.hypersistence.utils.hibernate.type.json.JsonType;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Type;

import java.util.Map;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor(access =AccessLevel.PRIVATE)
@Entity(name = "PRODUCT")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "IDX" , columnDefinition = "int(11)")
    private Integer idx;

    @Type(JsonType.class)
    @Column(name ="NAME", columnDefinition = "longtext")
    private Map<String, Object> name;

}
