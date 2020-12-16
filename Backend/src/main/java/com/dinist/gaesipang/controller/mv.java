package com.dinist.gaesipang.controller;

import com.dinist.gaesipang.Model.Board;
import com.dinist.gaesipang.Model.Boardlist;
import com.dinist.gaesipang.Test;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class mv {

    @Autowired
    Test t;

    @GetMapping("/api/view")
    public String test() throws  Exception{
        Board b = t.findOne();
        StringBuilder sb = new StringBuilder();
        sb.append("seq : "+b.getKey()+"\n");
        sb.append("author: "+b.getAuthor()+"\n");
        sb.append("title : "+b.getTitle()+"\n");
        sb.append("content : "+b.getContent()+"\n");
        sb.append("readcount : "+b.getReadcount()+"\n");
        return sb.toString();
    }

    @GetMapping("/api/board")
    public String board() throws Exception{
        List<Board> lb = t.findBoard();
        String json = new ObjectMapper().writeValueAsString(lb);
        return json;
    }

    @GetMapping("/api/board_list")
    public String board_list() throws Exception{
        List<Boardlist> lb = t.findBoardList();
        String json = new ObjectMapper().writeValueAsString(lb);
        return json;
    }

}
