package com.example.jpaProject.service;

import com.example.jpaProject.domain.Address;
import com.example.jpaProject.domain.Member;
import com.example.jpaProject.domain.Order;
import com.example.jpaProject.domain.OrderStatus;
import com.example.jpaProject.domain.item.Book;
import com.example.jpaProject.domain.item.Item;
import com.example.jpaProject.exception.NotEnoughStockException;
import com.example.jpaProject.repository.OrderRepository;
import jakarta.persistence.EntityManager;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class OrderServiceTest {

    @Autowired EntityManager em;
    @Autowired OrderService orderService;
    @Autowired OrderRepository orderRepository;

    @Test
    public void 상품주문() throws Exception {
        //given
        Member member = createMember();

        Book book = createBook("user1", 10000, 10);

        int orderCount = 3;
        //when
        Long orderId = orderService.order(member.getId(), book.getId(), orderCount);

        //then
        Order getOrder = orderRepository.findOne(orderId);

        assertEquals("상품 주문시 상태는 ORDER", OrderStatus.ORDER,getOrder.getStatus());
        assertEquals("주문한 상품 종류 수가 정확해야 한다",1,getOrder.getOrderItems().size());
        assertEquals("주문 가격은 가격 * 수량이다.",10000 * orderCount,getOrder.getTotalPrice());
        assertEquals("주문 수량만큼 재고가 줄어야 한다.",7,book.getStockQuantity());
    }




    @Test
    public void 주문취소() throws Exception {
        //given
        Member member = createMember();
        Book item = createBook("룰루랄라", 2000, 9);

        int orderCount = 2;

        Long orderId = orderService.order(member.getId(), item.getId(), orderCount);

        //when
        orderService.cancelOrder(orderId);

        //then
        Order getOrder = orderRepository.findOne(orderId);

        assertEquals("주문 취소시 상태는 CANCEL 이다",OrderStatus.CANCEL,getOrder.getStatus());
        assertEquals("주문이 취소된 상품은 그만큼 재고가 증가해야 한다.",9,item.getStockQuantity());
    }

    @Test(expected = NotEnoughStockException.class)
    public void 상품주문_재고수량초과() throws Exception {
        //given
        Member member = createMember();
        Item item = createBook("도시 JPA", 7000, 12);

        int orderCount = 13;

        //when
        orderService.order(member.getId(), item.getId(), orderCount);

        //then
        fail("재고 수량 부족");
    }


    private Book createBook(String name, int price, int StockQuantity) {
        Book book = new Book();
        book.setName(name);
        book.setPrice(price);
        book.setStockQuantity(StockQuantity);
        em.persist(book);
        return book;
    }

    private Member createMember() {
        Member member = new Member();
        member.setName("user1");
        member.setAddress(new Address("서울","강가,","123-456"));
        em.persist(member);
        return member;
    }
}