package jpaProject.jpashop.controller;


import lombok.Getter;

@Getter
public class EmailPostDto {

    /*
     *   to : 수신자
     *   subject : 제목
     *   message : 내용
     **/
    private String to;
    private String subject;
    private String message;

    private String username;
    private String email;
}
