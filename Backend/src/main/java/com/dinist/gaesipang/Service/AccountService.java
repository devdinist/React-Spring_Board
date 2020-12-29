package com.dinist.gaesipang.Service;

import com.dinist.gaesipang.Model.Account;
import com.dinist.gaesipang.Repo.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountService {

    @Autowired
    private AccountRepository accountRepository;

    public Account findByUser(String user){
        return accountRepository.findByuser(user);
    }

//    @Override
//    public void signUpUser(User user) {
//        userRepository.save(user);
//    }
//
//    @Override
//    public User loginUser(String user, String password) throws Exception{
//        User u = userRepository.findByuser(user);
//        if(u == null) throw new Exception("그런 아이디 없어!");
//        if(!u.getPassword().equals(password)) throw new Exception("비밀번호가 틀림");
//        return u;
//    }
}
