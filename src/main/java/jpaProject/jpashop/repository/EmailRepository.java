package jpaProject.jpashop.repository;

import jakarta.persistence.EntityManager;
import jpaProject.jpashop.domain.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class EmailRepository {

    @Autowired
    private EntityManager em;

    public List<Member> validNameEmail(String username, String email){
        return em.createQuery("select m from Member m where m.username = :username and m.email = :email" ,Member.class)
                .setParameter("username", username)
                .setParameter("email", email)
                .getResultList();
    }
}
