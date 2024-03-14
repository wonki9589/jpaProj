package jpaProject.jpashop.service;

import jpaProject.jpashop.domain.*;
import jpaProject.jpashop.domain.Product;
import jpaProject.jpashop.repository.ItemRepository;
import jpaProject.jpashop.repository.MemberRepository;
import jpaProject.jpashop.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final MemberRepository memberRepository;
    private final ItemRepository itemRepository;

    /**
     * 주문
     */
    @Transactional
    public Long order(Long memberId , Long productId , int quantity){

        // 엔티티 조회
        Member member = memberRepository.findOne(memberId);
        Product product = itemRepository.findOne(productId);

        //배송정보
        Delivery delivery = new Delivery();
        delivery.setAddress(member.getAddress());
        delivery.setStatus(DeliveryStatus.COMP);

        //주문상품 생성
        OrderItem orderItem = OrderItem.createOrderItem(product, product.getPrice(), quantity);

        //주문 생성
        Order order = Order.createOrder(member, delivery, orderItem);

        //주문 저장
        orderRepository.save(order);

        return order.getId();
    }
    /**
     * 주문 취소
     *     @Transactional
     *     public void cancelOrder(Long orderId){
     *         //주문 엔티티 조회
     *         Order order = orderRepository.findOne(orderId);
     *         //주문 취소
     *         order.cancel();
     *     }
     */

}
