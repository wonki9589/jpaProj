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

    @PostMapping("/api/member/password")
    public ResponseEntity sendMail(@RequestBody EmailPostDto emailPostDto) throws Exception {

        String username = emailPostDto.getUsername();
        String email = emailPostDto.getEmail();

        // 임시비밀번호 들고와야함
        String tempPaswword= emailService.createCode();

        System.out.println("temp ? ? " + tempPaswword);


        // 유저이름 이랑 이메일 일치하는 트랜잭션 확인 후에 이메일 보내야함

        EmailMessage emailMessage = EmailMessage.builder()
                .to(emailPostDto.getEmail())
                .subject("임시 비밀번호 발급")
                .message("임시 비밀번호는 "+tempPaswword + "입니다.")
                .username(emailPostDto.getUsername())
                .build();
        emailService.sendMail(emailMessage);

        return ResponseEntity.ok(emailMessage);
    }
}
