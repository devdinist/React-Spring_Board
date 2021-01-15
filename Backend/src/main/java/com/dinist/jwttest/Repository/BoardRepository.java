package com.dinist.jwttest.Repository;

import com.dinist.jwttest.DAO.DAOBoard;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BoardRepository extends JpaRepository<DAOBoard,Long> {

    @Override
    Page<DAOBoard> findAll(Pageable pageable);

    DAOBoard findBySeq(Long Seq);

}
