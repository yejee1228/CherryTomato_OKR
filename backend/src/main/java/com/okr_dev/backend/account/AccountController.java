package com.okr_dev.backend.account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:8081")
public class AccountController {
    @Autowired AccountService accountService;

    @GetMapping("/account/existid/{userid}")
    public String existId(@PathVariable String userid){
        return "true";//accountService.existId(userid);
    }

}
