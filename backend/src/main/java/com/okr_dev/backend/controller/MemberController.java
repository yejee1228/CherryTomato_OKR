package com.okr_dev.backend.controller;

import com.okr_dev.backend.dto.MemberDto;
import com.okr_dev.backend.dto.ResponseDto;
import com.okr_dev.backend.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MemberController {
    private final MemberService memberService;

    @PostMapping("/member/admin")
    public ResponseDto insertAdminMember(@RequestBody MemberDto.Admin.AdminMemberRegistRequest requestDto) {
        ResponseDto responseDto = new ResponseDto();
        memberService.insertAdminMember(requestDto);
        responseDto.setStatus("Success");
        responseDto.setMsg("관리자 : 계정 등록 완료되었습니다.");
        return responseDto;
    }

    @PostMapping("/member")
    public ResponseDto insertMember(@RequestBody MemberDto.UserMemberRegistRequest requestDto) {
        ResponseDto responseDto = new ResponseDto();
        memberService.insertMember(requestDto);
        responseDto.setStatus("Success");
        responseDto.setMsg("계정 등록 완료되었습니다.");
        return responseDto;
    }

}
