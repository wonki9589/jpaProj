package jpaProject.jpashop.controller;

import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import jpaProject.jpashop.domain.Address;
import jpaProject.jpashop.domain.Member;
import jpaProject.jpashop.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.net.URI;
import java.util.Arrays;

@RestController
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @GetMapping("/api/member/new")
    public String test() {

        System.out.println("emfdjdhkTdk ?");
        return "zz";


    }

    @ResponseBody
    @PostMapping("/api/member/new")
    public String create(@RequestBody MemberForm memberForm){

//        if (bindingResult.hasErrors()) {
//            return "redirect:/";
//        }`

        Address address = new Address(memberForm.getCity(),memberForm.getStreet(),memberForm.getZipcode());

        Member member = new Member();
        member.setName(memberForm.getName());
        member.setPassword(memberForm.getPassword());

        member.setAddress(address);

        memberService.join(member);
        return "post 성공";
    }
}