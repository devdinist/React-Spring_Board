package com.dinist.gaesipang.Model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Getter
@Setter
@ToString
@Table(name = "user")
public class Account {

    @Id                         // primary key
    @GeneratedValue
    private Long seq;

    @NotBlank
    private String user;
    @NotBlank
    private String password;

    @NotBlank
    private String email;

    @NotBlank
    private String age;

}
