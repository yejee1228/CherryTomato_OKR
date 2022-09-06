package com.okr_dev.backend.model;

import com.okr_dev.backend.dto.MemberDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.context.annotation.Lazy;

import javax.persistence.*;

@Lazy
@AllArgsConstructor
@Builder
@NoArgsConstructor
@Entity
@Getter
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
    @Column private String useYn;
    @Column private String role;

    public Member(MemberDto.Admin.AdminMemberRegistRequest requestDto) {
        this.username = requestDto.getEmail();
        this.password = requestDto.getPassword();
        this.name = requestDto.getName();
        this.phone = requestDto.getPhone();
        this.role = requestDto.getRole();
    }

}


