package jpaProject.jpashop.controller;

import jpaProject.jpashop.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Arrays;

@Controller
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @GetMapping("/member/new")
    public String createForm(Model model){
//        model.addAttribute("memberForm" , new MemberForm());
        return "스프링부트로 가나 ?";
    }


}
