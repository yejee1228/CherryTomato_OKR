package com.okr_dev.backend.validation;

import com.okr_dev.backend.dto.MemberDto;
import com.okr_dev.backend.model.Member;
import com.okr_dev.backend.repository.MemberRepository;

import java.util.Optional;

public class MemberValidation {
    public static void validationForMemberRegister(MemberDto.Admin.AdminMemberRegistRequest dto, MemberRepository repository) {
        Optional<Member> optMember = repository.findByUsername(dto.getEmail());
        if(optMember.isPresent()) {
            throw new IllegalArgumentException("이미 사용중인 이메일입니다.");
        }
        optMember = repository.findByPhone(dto.getPhone());
        if(optMember.isPresent()) {
            throw new IllegalArgumentException("이미 사용중인 전화번호입니다.");
        }
    }

}
