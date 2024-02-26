package jpaProject.jpashop.controller;

import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import jpaProject.jpashop.domain.Address;
import jpaProject.jpashop.domain.Member;
import jpaProject.jpashop.repository.MemberRepository;
import jpaProject.jpashop.service.CustomUserDetailsService;
import jpaProject.jpashop.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.net.URI;
import java.util.Arrays;

@Controller
@RequiredArgsConstructor
public class MemberController {


    private final MemberService memberService;

    @ResponseBody
    @GetMapping("/api/member/new")
    public String test() {

        System.out.println("emfdjdhkTdk ?");
        return "zz";


    }

    @ResponseBody
    @PostMapping("/api/member/new")
    public ResponseEntity create(@RequestBody @Valid MemberForm memberForm){

        Address address = new Address(memberForm.getCity(),memberForm.getStreet(),memberForm.getZipcode());

        Member member = new Member();
        member.setUsername(memberForm.getUsername());
        member.setPassword(memberForm.getPassword());
        member.setEmail(memberForm.getEmail());
        member.setAddress(address);

        memberService.join(member);
        return ResponseEntity.ok(200);
    }
    @ResponseBody
    @PostMapping("/api/login")
    public String loginProcess(@RequestBody MemberForm memberForm){

        Member member = new Member();
        member.setUsername(memberForm.getUsername());
        member.setPassword(memberForm.getPassword());

//        memberService.

        return "로그인 ok";
    }

}