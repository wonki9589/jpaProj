package com.example.jpaProject.repository;

import com.example.jpaProject.domain.OrderStatus;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class OrderSearch {

    private String memberName ;
    private OrderStatus orderStatus;
}
