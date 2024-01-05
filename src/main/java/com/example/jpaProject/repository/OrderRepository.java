package com.example.jpaProject.repository;

import com.example.jpaProject.domain.Order;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class OrderRepository {

    private  final EntityManager em;

    public void save(Order order){
        em.persist(order);
    }

    public Order findOne(Long id){
        return em.find(Order.class,id);
    }

//    public List<Order> findAll(OrderSearch orderSearch){
//
//        em.createQuery("select o from Order o join o.member m" +
//                                "where o.status = :status +",Order.class);
//    }
}
