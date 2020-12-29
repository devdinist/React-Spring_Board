package com.dinist.gaesipang.Repo;

import com.dinist.gaesipang.Model.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, Long> {
    Account findByuser(String user);
}
