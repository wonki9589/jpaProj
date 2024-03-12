package jpaProject.jpashop.repository;

import jpaProject.jpashop.domain.Member;
import jpaProject.jpashop.domain.item.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product , Integer> {

}
