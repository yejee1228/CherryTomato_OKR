package com.okr_dev.backend.account;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends CrudRepository<Member,Long> {

    Boolean existsMemberByEmail(String email);

}
