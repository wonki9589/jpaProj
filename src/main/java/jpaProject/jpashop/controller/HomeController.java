package jpaProject.jpashop.controller;


import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;

@RestController
@Slf4j
public class HomeController {

    @GetMapping("/")
    public String main(){
        log.info("main session ");
        //세션 아이디
        String name = SecurityContextHolder.getContext().getAuthentication().getName();

        //세션 롤
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
        Iterator<? extends GrantedAuthority> iter = authorities.iterator();
        GrantedAuthority auth = iter.next();
        String role = auth.getAuthority();
        return "Main controller user name : " + name +  " user role: "+ role ;
    }
}
