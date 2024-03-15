package jpaProject.jpashop.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class Member implements Serializable {
    @Id @GeneratedValue
    @Column(name = "member_id")
    private Long id;

    private String username;

    private String password;

    private String email;

    @Embedded
    private Address address;

    @OneToMany(mappedBy = "member")
    @JsonBackReference
    private List<Order> orders = new ArrayList<>();

    private String role;
}
