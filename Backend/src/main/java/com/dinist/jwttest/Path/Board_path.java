package com.dinist.jwttest.Path;

public enum Board_path {

    Board_create("/api/board/write"),
    Board_read("/api/board/{seq}"),
    Board_update("/api/board/modify"),
    Board_delete("/api/board/delete"),
    Board_list("/api/board/board_list");

    private final String path;

    Board_path(String path){
        this.path = path;
    }

    public String getPath() {
        return path;
    }
}
