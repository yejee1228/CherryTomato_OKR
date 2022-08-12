package com.okr_dev.backend.model;

import com.okr_dev.backend.dto.MemberRegisterDto;
import com.sun.istack.NotNull;
import lombok.*;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import javax.persistence.*;

@Component
@Lazy
@Data
@AllArgsConstructor
@Builder
@NoArgsConstructor
@Entity @Table(name="MEMBER")
public class Member{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column private Long memberSeq;
    @Column private Long authoritySeq;
    @Column private String departmentCode;
    @Column private String companyCode;
    @Column private String username;
    @Column private String password;
    @Column private String name;
    @Column private String phone;
    @Column private String profileAttachkey;

    public Member(MemberRegisterDto requestDto) {
        this.username = requestDto.getEmail();
        this.password = requestDto.getPassword();
        this.name = requestDto.getName();
        this.phone = requestDto.getPhone();
    }

}


