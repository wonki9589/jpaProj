package jpaProject.jpashop.repository;

import jakarta.persistence.EntityManager;
import jpaProject.jpashop.domain.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

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
    // 해당 회원 이름으로 조회

    public Member findByUserName(String username){
        return (Member) em.createQuery("select m from Member m where m.username = :username",Member.class)
                .setParameter("username", username)
                .getResultList();
    }
    // 변경감지
    @Transactional
    public void updateMember(String pw ,Member member){
        Member findMember = em.find(Member.class, member.getId());

        findMember.setPassword(pw);
    }

}
