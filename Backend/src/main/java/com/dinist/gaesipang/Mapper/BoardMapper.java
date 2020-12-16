package com.dinist.gaesipang.Mapper;

import com.dinist.gaesipang.Model.Board;
import com.dinist.gaesipang.Model.Boardlist;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
public interface BoardMapper {

    public List<Board> findBoard();
    public List<Boardlist> findBoardList();
    public Board findOne(String author);
    public void save(Board board);
    public void update(Board board);
    public void delete(long seq);
}
