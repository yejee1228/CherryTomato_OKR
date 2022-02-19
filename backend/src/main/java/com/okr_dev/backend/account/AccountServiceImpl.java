package com.okr_dev.backend.account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountServiceImpl implements AccountService{
    @Autowired AccountRepository accountRepository;

    @Override
    public Boolean existId(String email) {
        return accountRepository.existsMemberByEmail(email);
    }
}
