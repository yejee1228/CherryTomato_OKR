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

    @Override
    public String login(Member member) {
        //비밀번호 암호화필요.
        if(accountRepository.findWrongCountByEmail(member.getEmail())>=5){
            return "wrongCount";
        }
        Member object = accountRepository.findByEmail(member.getEmail());
        if(!object.getPasswd().equals(member.getPasswd())){
            object.setWrongCount(object.getWrongCount()+1);
            accountRepository.save(object);
            return "wrongPasswd";
        };
        return "success";
    }
}
