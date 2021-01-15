package com.dinist.jwttest.JWT;

import java.io.Serializable;

public class JwtResponse implements Serializable {

    private static final long serialVersionUID = -8091879091924046844L;
    private final String jwttoken;
    private final String username;
    private final String expire;

    public JwtResponse(String jwttoken, String username, String expire) {
        this.jwttoken = jwttoken;
        this.username = username;
        this.expire = expire;
    }

    public String getToken() {
        return this.jwttoken;
    }

    public String getUsername() {
        return username;
    }

    public String getExpire() {
        return expire;
    }
}