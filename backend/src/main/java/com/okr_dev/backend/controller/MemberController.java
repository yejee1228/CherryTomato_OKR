package com.okr_dev.backend.controller;

import com.okr_dev.backend.dto.MemberRegisterDto;
import com.okr_dev.backend.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MemberController {
    private final MemberService memberService;

    @PostMapping("/member")
    public void registerAdminMember(@RequestBody MemberRegisterDto requestDto) {
        memberService.registerAdminMember(requestDto);
    }

}
