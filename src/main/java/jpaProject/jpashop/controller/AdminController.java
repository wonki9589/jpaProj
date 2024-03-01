package jpaProject.jpashop.controller;

import jpaProject.jpashop.domain.Member;
import jpaProject.jpashop.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequiredArgsConstructor


public class AdminController {

    private final MemberService memberService;

    @GetMapping("/api/admin")
    public String adminP() {
        return "admin Controller";
    }

    @ResponseBody
    @GetMapping("/api/admin/members")
    public ResponseEntity findMembers(){
        List<Member> members = memberService.findMembers();
        return ResponseEntity.ok(members);
    }
}