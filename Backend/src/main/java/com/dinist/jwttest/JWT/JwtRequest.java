package com.dinist.jwttest.JWT;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;



public class JwtRequest implements Serializable {

    private static final long serialVersionUID = 20210113001L;

    private String user;
    private String password;

    public JwtRequest(){ }

    public JwtRequest(String user, String password) {
        this.setUser(user);
        this.setPassword(password);
    }

    public String getUser() {
        return this.user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
