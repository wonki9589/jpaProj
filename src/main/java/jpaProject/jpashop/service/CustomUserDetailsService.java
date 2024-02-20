package jpaProject.jpashop.service;

import jpaProject.jpashop.domain.Member;
import jpaProject.jpashop.repository.MemberRepository;
import jpaProject.jpashop.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    public CustomUserDetailsService(UserRepository userRepository) {

        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        //DB에서 조회
        Member userData = userRepository.findByUsername(username);
        System.out.println("member Role ? " + userData.getRole());
        System.out.println("member name ? " + userData.getUsername());
        System.out.println("member password ? " + userData.getPassword());
        if (userData != null) {

            //UserDetails에 담아서 return하면 AutneticationManager가 검증 함
            return new CustomUserDetails(userData);
        }

        return null;
    }
}