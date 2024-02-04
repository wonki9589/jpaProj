package jpaProject.jpashop.controller;

import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.NotFound;

@Getter @Setter
public class MemberForm {

    /**
     * wonki 2/4 회원가입 엔티티 추가
     *     @NotEmpty(message = "회원 이름은 필수 입니다.")
     *     private String name;
     *
     *     private String city;
     *     private String street;
     *     private String zipcode;
     */
    @NotEmpty(message = "회원 이름은 필수 입니다.")
    private String name;

    private String email;

    private String password;

    private String city;

    private String street;

    private String zipcode;
}
