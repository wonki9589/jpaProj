package jpaProject.jpashop.repository;

import jakarta.persistence.EntityManager;
import jpaProject.jpashop.domain.Product;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class ItemRepository {

    private final EntityManager em;

    public void save(Product product){
        if(product.getId() == null){
            em.persist(product);
        }else{
            em.merge(product); // update
        }
    }

    public Product findOne(Long id){
        return em.find(Product.class,id);
    }

    public List<Product> findAll(){
        return em.createQuery("select i from Item i ",Product.class)
                .getResultList();
    }
}
