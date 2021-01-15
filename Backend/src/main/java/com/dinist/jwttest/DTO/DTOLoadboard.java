package com.dinist.jwttest.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DTOLoadboard {

    private long seq;
    private long key;
    private String title;
    private int readcount;
    private String author;
    private String content;

    public DTOLoadboard(long seq, String title, int readcount, String author, String content){
        this.seq = seq;
        this.key = seq;
        this.title = title;
        this.readcount = readcount;
        this.author = author;
        this.content = content;
    }

}
