package jpaProject.jpashop.repository;

import jpaProject.jpashop.domain.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product , Integer> {

}
