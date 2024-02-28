package jpaProject.jpashop.domain;


import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class EmailMessage {

    /*
    *   to : 수신자
    *   subject : 제목
    *   message : 내용
    **/
    private String to;
    private String subject;
    private String message;
}

