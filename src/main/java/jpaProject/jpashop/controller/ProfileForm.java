package jpaProject.jpashop.controller;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ProfileForm {

    private Long id;

    private String username;

    private String password;

    @NotBlank
    @Email(message = "잘못된 이메일 형식입니다.")
    private String email;

    private String city;

    private String street;

    private String zipcode;

    private String role;
}
