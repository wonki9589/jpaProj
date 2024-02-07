package jpaProject.jpashop.controller;

import jakarta.validation.Valid;
import jpaProject.jpashop.domain.Address;
import jpaProject.jpashop.domain.Member;
import jpaProject.jpashop.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;

@RestController
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @GetMapping("/api/member")
    public String createForm(Model model) {
        //model.addAttribute("memberForm", new MemberForm());
        return "get 성공 ";
    }

    @PostMapping("/api/member/new")
    public String create(@RequestBody MemberForm memberForm) {

//        if (bindingResult.hasErrors()) {
//            return "redirect:/";
//        }

        Address address = new Address(memberForm.getCity(),memberForm.getStreet(),memberForm.getZipcode());

        Member member = new Member();
        member.setName(memberForm.getName());
        member.setPassword(memberForm.getPassword());
        member.setAddress(address);

        memberService.join(member);
        return "redirect:/";
    }
}