package com.dinist.jwttest.Service;

import com.dinist.jwttest.DAO.DAOBoard;
import com.dinist.jwttest.DAO.DAOaccount;
import com.dinist.jwttest.DTO.DTOBoard;
import com.dinist.jwttest.Repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BoardDetailService {

    @Autowired
    private BoardRepository boardRepository;

    public DAOBoard update(DAOBoard board){
        DAOBoard updateBoard = boardRepository.findBySeq(board.getSeq());
        boardRepository.save(updateBoard);
        return updateBoard;
    }

    public DTOBoard save(DTOBoard board){
        DAOBoard save_board = new DAOBoard();
        save_board.setAuthor(board.getAuthor());
        save_board.setContent(board.getContent());
        save_board.setReadcount(board.getReadcount());
        save_board.setTitle(board.getTitle());
        boardRepository.save(save_board);
        return board;
    }
}
