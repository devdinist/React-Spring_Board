package com.dinist.gaesipang.Mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.security.core.userdetails.User;

@Mapper
public interface AccountMapper {
    public User getUserInfo(String user);
}
