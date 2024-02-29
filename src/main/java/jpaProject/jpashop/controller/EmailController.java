package jpaProject.jpashop.controller;

import jpaProject.jpashop.domain.EmailMessage;
import jpaProject.jpashop.domain.Member;
import jpaProject.jpashop.service.EmailService;
import jpaProject.jpashop.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class EmailController {

    private final EmailService emailService;

    @PostMapping("/api/member/send")
    public ResponseEntity pwFind(@RequestBody EmailPostDto emailPostDto) throws Exception {


        emailService.validNameEmail(emailPostDto.getUsername(),emailPostDto.getEmail());
        // 메일보내기
        emailService.mailInfo(emailPostDto);

        return ResponseEntity.ok( emailService.mailInfo(emailPostDto));
    }


}
