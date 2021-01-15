package com.dinist.jwttest.Model;

public class ResBody<T> {

    T base;
    String token;

    public ResBody(T base, String token){
        this.base = base;
        this.token = token;
    }

    public T getBase() {
        return base;
    }

    public String getToken() {
        return token;
    }

}
