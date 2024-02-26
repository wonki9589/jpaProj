package jpaProject.jpashop.controller;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
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
    @Pattern(message = "잘못된 아이디 형식입니다."
            , regexp = "^(?=.*[a-z0-9])[a-z0-9]{3,16}$")
    private String username;

    @NotBlank
    @Pattern(message = "비밀번호는 알파벳 대소문자(a~z, A~Z), 숫자(0~9)만 입력 가능합니다."
            , regexp = "^[a-zA-Z0-9]*$")
    private String password;

    @NotBlank
    @Email(message = "잘못된 이메일 형식입니다.")
    private String email;

    private String city;

    private String street;

    private String zipcode;

    private String role;
}
