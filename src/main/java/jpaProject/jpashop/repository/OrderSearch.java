package jpaProject.jpashop.repository;

import jpaProject.jpashop.domain.OrderStatus;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class OrderSearch {

    private String memberName ;
    private OrderStatus orderStatus;
}
