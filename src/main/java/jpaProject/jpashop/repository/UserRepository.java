package jpaProject.jpashop.repository;

import jpaProject.jpashop.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Member,Integer> {
    Member findByUsername(String username);
}
