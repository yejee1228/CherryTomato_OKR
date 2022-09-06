package com.okr_dev.backend.service;

import com.okr_dev.backend.dto.MemberDto;
import com.okr_dev.backend.model.Member;
import com.okr_dev.backend.repository.MemberRepository;
import com.okr_dev.backend.role.Role;
import com.okr_dev.backend.validation.MemberValidation;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
@Transactional(readOnly = true)
public class MemberService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public void insertAdminMember(MemberDto.Admin.AdminMemberRegistRequest registerDto) {
        // 이메일, 전화번호 유효성 검사
        MemberValidation.validationForMemberRegister(registerDto, memberRepository);
        String password = passwordEncoder.encode(registerDto.getPassword());
        registerDto.setRole(Role.ADMIN.toString());

        registerDto.setPassword(password);
        Member member = new Member(registerDto);
        memberRepository.save(member);
    }

    @Transactional
    public void insertMember(MemberDto.UserMemberRegistRequest requestDto) {

    }
}
