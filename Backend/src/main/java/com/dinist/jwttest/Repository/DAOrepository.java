package com.dinist.jwttest.Repository;

import com.dinist.jwttest.DAO.DAOUser;
import com.dinist.jwttest.DAO.DAOaccount;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DAOrepository extends JpaRepository<DAOaccount,String> {
    DAOaccount findByUser(String user);
    DAOUser findBySeq(Long seq);
}
