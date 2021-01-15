package com.dinist.jwttest.DTO;

import lombok.Getter;

@Getter
public class DTOBoard {

    private long seq;
    private long key;
    private String title;
    private int readcount;
    private String author;
    private String content;

    public DTOBoard(long seq, String title, int readcount, String author, String content){
        this.seq = seq;
        this.key = seq;
        this.title = title;
        this.readcount = readcount;
        this.author = author;
        this.content = content;
    }

    public void setKey(long seq) {
        this.key = seq;
    }

    public void setSeq(long seq) {
        this.seq = seq;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setReadcount(int readcount) {
        this.readcount = readcount;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
