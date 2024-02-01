package jpaProject.jpashop.repository;

import jpaProject.jpashop.domain.Order;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

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
