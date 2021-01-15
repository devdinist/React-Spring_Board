package com.dinist.jwttest.Controller;

import com.dinist.jwttest.DTO.DTOUser;
import com.dinist.jwttest.JWT.JwtTokenUtil;
import com.dinist.jwttest.Model.ResBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import javax.servlet.http.HttpServletRequest;


/*
    사용자 요청에 대한 처리 
*/

@RestController
public class UserController {

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @GetMapping("/api/user/userinfo")
    public ResponseEntity<?> userinfo(HttpServletRequest request){
        String token = request.getHeader("Authorization").substring(7);
        String username = jwtTokenUtil.getUsernameFromToken(token);

        return ResponseEntity.ok(new ResBody<>(username, jwtTokenUtil.extendToken(token)));
    }

    @PostMapping("/api/user/token_extend")
    public ResponseEntity<?> extendToken(@RequestBody DTOUser user, HttpServletRequest req){
        String token = req.getHeader("Authorization").substring(7);
        String username = jwtTokenUtil.getUsernameFromToken(token);
        if(user.getUser() != null && user.getUser().equals(username)){
            return ResponseEntity.ok(new ResBody<>("ok",jwtTokenUtil.extendToken(token)));
        }
        return ResponseEntity.status(401).body("no!");
    }
}
