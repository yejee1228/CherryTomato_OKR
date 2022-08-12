package com.okr_dev.backend.service;

import com.okr_dev.backend.dto.MemberRegisterDto;
import com.okr_dev.backend.model.Member;
import com.okr_dev.backend.repository.MemberRepository;
import com.okr_dev.backend.validation.MemberValidation;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
@Transactional
public class MemberService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    public void registerMember(MemberRegisterDto requestdto) {
        // 이메일, 전화번호 유효성 검사
        MemberValidation.validationForMemberRegister(requestdto, memberRepository);
        String password = passwordEncoder.encode(requestdto.getPassword());

        requestdto.setPassword(password);
        System.out.println(requestdto);
        Member member = new Member(requestdto);
        memberRepository.save(member);
    }
}
