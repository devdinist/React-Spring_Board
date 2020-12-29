//package com.dinist.gaesipang.controller;
//
//
//import com.dinist.gaesipang.Model.Account;
//import com.dinist.gaesipang.Repo.AuthService;
//
//
//import org.apache.coyote.Response;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//public class jpa {
//
//    @Autowired
//    private AuthService authService;
//
//    @PostMapping("/loginn")
//    public Response loginUser(@RequestBody Account account){
//        Response r = new Response();
//        Account u;
//        try{
//            u = authService.loginUser(account.getUser(), account.getPassword());
//            if(null != u)
//                r.setMessage("googd");
//        }catch (Exception e){
//            r.setMessage("no");
//            r.setMessage(e.toString());
//        }
//
//        return r;
//    }
//}
