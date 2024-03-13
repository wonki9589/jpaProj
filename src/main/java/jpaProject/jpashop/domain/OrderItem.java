package jpaProject.jpashop.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import static jakarta.persistence.FetchType.LAZY;

@Entity
@Getter @Setter
public class OrderItem {

    @Id @GeneratedValue
    @Column( name = "order_item_id")
    private Long id;

    @ManyToOne(fetch = LAZY)
//    @JoinColumn(name = "item_id")
//    private Item item;
    @JoinColumn(name ="product_id")
    private Product product;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "order_id")
    private Order order;

    private int orderPrice;

    private int quantity;

    //==생성 메서드==/
   public static OrderItem createOrderItem(Product product, int orderPrice, int quantity){
       OrderItem orderItem = new OrderItem();
       orderItem.setProduct(product);
       orderItem.setOrderPrice(orderPrice);
       orderItem.setQuantity(quantity);

//       item.removeStock(count);
       return orderItem;
   }

//    // ==비지니스  로직==//
//    public void cancel() {
//        getItem().addStock(count);
//    }

    public int getTotalPrice() {
        return getOrderPrice() * getQuantity();
    }
}
