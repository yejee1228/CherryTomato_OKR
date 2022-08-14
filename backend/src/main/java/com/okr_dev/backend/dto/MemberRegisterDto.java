package com.okr_dev.backend.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class MemberRegisterDto {
    private String email;
    private String password;
    private String name;
    private String phone;
    private String role;
}
