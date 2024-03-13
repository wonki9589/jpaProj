package jpaProject.jpashop.controller;
import lombok.Getter;
import lombok.Setter;
import java.util.List;


@Getter @Setter
public class ProductDTO {

    private Integer id;
    private List<Object> info;

    private String name ;
    private Integer price ;

    private String image ;
    private String category ;
    private Integer quantity;
    private String username;
}
