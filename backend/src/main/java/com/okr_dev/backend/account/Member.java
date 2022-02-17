package com.okr_dev.backend.account;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.sun.istack.NotNull;
import lombok.*;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import javax.persistence.*;

@Component
@Lazy
//@Entity
@Getter @Setter
@ToString
@AllArgsConstructor
@Builder
@NoArgsConstructor
//@Table(name="MEMBER")
public class Member{
    /*@Id
    @GeneratedValue(strategy = GenerationType.AUTO)*/
    /*@Column(name = "USERSEQ") @NotNull private Long userSeq;
    @Column(name = "USERID", unique = true, length = 25) @NotNull private String userid;
    @Column(name = "PASSWD") @NotNull private String passwd;
    @Column(name = "NAME", length = 30) @NotNull private String name;
    @Column(name = "EMAIL", length=100) @NotNull private String email;
    @Column(name = "AUTH") @NotNull private int auth;
    @Column(name = "GENDER", length=10)  private String gender;
    @Column(name = "BIRTHMONTH", length=10)  private String birthMonth;
    @Column(name = "REGION", length=10)  private String region;*/

}
