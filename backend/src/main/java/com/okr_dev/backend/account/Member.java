package com.okr_dev.backend.account;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.sun.istack.NotNull;
import lombok.*;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import javax.persistence.*;

@Component
@Lazy
@Getter @Setter
@ToString
@AllArgsConstructor
@Builder
@NoArgsConstructor
@Entity @Table(name="MEMBER")
@DynamicUpdate
public class Member{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MEMBER_SEQ") @NotNull private Long memberSeq;
    @Column(name = "COMPANY_CODE", unique = true, length = 25) @NotNull private String companyCode;
    @Column(name = "DEPARTMENT_CODE") @NotNull private String departmentCode;
    @Column(name = "EMAIL", length=100) @NotNull private String email;
    @Column(name = "PASSWD") @NotNull private String passwd;
    @Column(name = "MEMBER_NAME", length = 30) @NotNull private String memberName;
    @Column(name = "PHONE", length=10)  private String phone;
    @Column(name = "APP_ID", length=10)  private String appId;
    @Column(name = "NICKNAME", length=10)  private String nickname;
    @Column(name = "PROFILE_ATTACHKEY", length=10)  private String profileAttachkey;
    @Column(name = "SETTING1", length=10)  private String setting1;
    @Column(name = "SETTING2", length=10)  private String setting2;
    @Column(name = "WRONG_COUNT", length=10)  private String wrongCount;

}


