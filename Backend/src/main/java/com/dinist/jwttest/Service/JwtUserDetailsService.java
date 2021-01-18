package com.dinist.jwttest.Service;

import com.dinist.jwttest.DAO.DAOaccount;
import com.dinist.jwttest.Repository.DAOrepository;
import com.dinist.jwttest.DTO.DTOaccount;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.regex.Pattern;

@Service
public class JwtUserDetailsService implements UserDetailsService {

    private final String ID_REGEX = "^[a-z0-9]{4,12}$";
    private final String PW_REGEX = "(?=.*[!@#$%^&*]){1,20}(?=.*[0-9]){1,20}(?=.*[A-Za-z]){1,20}.{8,20}$";

    @Autowired
    private DAOrepository daOrepository;

    @Autowired
    private PasswordEncoder bcryptEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        DAOaccount user = daOrepository.findByUser(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
        return new org.springframework.security.core.userdetails.User(user.getUser(), user.getPassword(),
                new ArrayList<>());
    }

    public boolean UseIdCheck(String id){
        if(daOrepository.findByUser(id) == null){
            return true;
        }else{
            return false;
        }
    }

    public boolean IDCheck(String id){
//        System.out.println(daOrepository.findByUser(id));
        if(daOrepository.findByUser(id) == null){
            return Pattern.matches(ID_REGEX,id);
        }else{
            return false;
        }
    }

    public boolean PWCheck(String pw){
        return Pattern.matches(PW_REGEX,pw);
    }

    public DAOaccount update(DAOaccount user){
        DAOaccount updateUser = daOrepository.findByUser(user.getUser());
        daOrepository.save(updateUser);
        return updateUser;
    }

    public DTOaccount save(DTOaccount user) {
        DAOaccount newUser = new DAOaccount();
        newUser.setUser(user.getUser());
        newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
        
        newUser.setEmail(user.getEmail());
        newUser.setAge(user.getAge());
        daOrepository.save(newUser);
        return user;
    }
}
