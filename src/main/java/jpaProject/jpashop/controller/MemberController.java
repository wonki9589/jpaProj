package jpaProject.jpashop.controller;

import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import jpaProject.jpashop.domain.Address;
import jpaProject.jpashop.domain.Member;
import jpaProject.jpashop.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Arrays;

@Controller
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @GetMapping("/api/member/new")
    public String createForm(Model model) {
        model.addAttribute("data", "redirect 성공 ?");
        return "hi";
    }

    @ResponseBody
    @PostMapping("/api/member/new")
    public String create(@RequestBody MemberForm memberForm){

//        if (bindingResult.hasErrors()) {
//            return "redirect:/";
//        }

        Address address = new Address(memberForm.getCity(),memberForm.getStreet(),memberForm.getZipcode());

        Member member = new Member();
        member.setName(memberForm.getName());
        member.setPassword(memberForm.getPassword());
        member.setAddress(address);

        memberService.join(member);
        return "redirect:/api/login";
    }
}