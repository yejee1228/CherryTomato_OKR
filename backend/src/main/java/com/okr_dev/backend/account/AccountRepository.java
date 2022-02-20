package com.okr_dev.backend.account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends CrudRepository<Member,Long> {

    Boolean existsMemberByEmail(String email);
    Member findByEmail(String email);
    @Query(value = "SELECT wrong_count FROM member WHERE email = ?", nativeQuery = true)
    int findWrongCountByEmail(String email);

}
