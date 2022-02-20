package com.okr_dev.backend.account;

import org.springframework.stereotype.Component;

@Component
public interface AccountService {
    Boolean existId(String email);
    String login(Member member);
}
