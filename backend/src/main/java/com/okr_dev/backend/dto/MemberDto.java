package com.okr_dev.backend.dto;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@NoArgsConstructor
public class MemberDto {

    @Getter
    @Setter
    public static class Admin {
        @Getter
        @Setter
        public static class AdminMemberRegistRequest {
            private String email;
            private String password;
            private String name;
            private String phone;
            private String role;
        }
    }

    @Getter
    @Setter
    public static class UserMemberRegistRequest {
        private String email;
        private String name;
        private String companyCode;
    }
}