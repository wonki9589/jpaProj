package jpaProject.jpashop.controller;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.hypersistence.utils.hibernate.type.json.JsonType;
import jakarta.persistence.Column;
import lombok.*;
import org.hibernate.annotations.Type;


@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderItemDTO {


    @JsonProperty("id")
    private Integer id ;

    @JsonProperty("name")
    private String name ;

    @JsonProperty("price")
    private Integer price ;

    @JsonProperty("image")
    private String image ;

    @JsonProperty("category")
    private String category ;

    @JsonProperty("quantity")
    private String quantity ;

    @JsonProperty("username")
    private String username ;
}
