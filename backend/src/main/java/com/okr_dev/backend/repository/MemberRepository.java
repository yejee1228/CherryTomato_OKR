package com.okr_dev.backend.repository;

import com.okr_dev.backend.model.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member,Long> {

    Optional<Member> findByUsername(String email);
    Optional<Member> findByPhone(String phone);
}
