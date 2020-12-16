package com.dinist.gaesipang.Model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Board {
    private long key;
    private String title;
    private long readcount;
    private String author;
    private String content;
}
