package com.dinist.jwttest.Repository;

import com.dinist.jwttest.DAO.DAOUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<DAOUser,Long> {
        DAOUser findByuser(String user);

}
