package jpaProject.jpashop.repository;


import jakarta.persistence.EntityManager;
import jpaProject.jpashop.domain.Member;
import jpaProject.jpashop.domain.item.Product;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class ManageProductRepository {

    @Autowired
    private EntityManager em;

    public List<Product> findAll() {
        return em.createQuery("select m from Product m", Product.class).getResultList();
    }
}
