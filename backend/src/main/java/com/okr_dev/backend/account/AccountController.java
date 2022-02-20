package com.okr_dev.backend.account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AccountController {
    @Autowired AccountService accountService;

    @GetMapping("/account/existid/{email}")
    public boolean existId(@PathVariable String email){
        return accountService.existId(email);
    }

    @PostMapping("/account/login")
    public String login(@RequestBody Member member){
        System.out.println(member);
        member.setEmail(member.getEmail());
        member.setPasswd(member.getPasswd());
        return accountService.login(member);
    }

}
