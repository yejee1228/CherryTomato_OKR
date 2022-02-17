package com.okr_dev.backend.account;

import org.springframework.stereotype.Component;

@Component
public interface AccountService {
    String existId(String userid);
}
