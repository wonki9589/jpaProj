package jpaProject.jpashop.controller;

import jakarta.validation.Valid;
import jpaProject.jpashop.domain.Address;
import jpaProject.jpashop.domain.Member;
import jpaProject.jpashop.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.Arrays;

@Controller
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @GetMapping("/member/new")
    public String createForm(Model model) {
        model.addAttribute("memberForm", new MemberForm());
        return "members/new";
    }

    @PostMapping("/member/new")
    public String create(@Valid MemberForm form, BindingResult bindingResult) {

        if (bindingResult.hasErrors()) {
            return "redirect:/";
        }

        Address address = new Address(form.getCity(),form.getStreet(),form.getZipcode());

        Member member = new Member();
        member.setName(form.getName());
        member.setAddress(address);

        memberService.join(member);
        return "redirect:/";
    }
}