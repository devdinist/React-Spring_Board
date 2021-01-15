package com.dinist.jwttest.JWT;

import com.dinist.jwttest.DAO.DAOUser;
import com.dinist.jwttest.DAO.DAOaccount;
import com.dinist.jwttest.DTO.DTOaccount;
import com.dinist.jwttest.Model.ResBody;
import com.dinist.jwttest.Repository.DAOrepository;
import com.dinist.jwttest.Repository.UserRepository;
import com.dinist.jwttest.Service.JwtUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.text.SimpleDateFormat;

@RestController
public class JwtAuthenticationController {

    @Autowired
    private PasswordEncoder bcryptEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private DAOrepository daOrepository;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private JwtUserDetailsService userDetailsService;

    @RequestMapping(value = "/api/user/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest, HttpServletResponse res) throws Exception {
        authenticate(authenticationRequest.getUser(), authenticationRequest.getPassword());

        final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUser());

        final String token = jwtTokenUtil.generateToken(userDetails);
        return ResponseEntity.ok(new JwtResponse(token,jwtTokenUtil.getUsernameFromToken(token),
                new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(jwtTokenUtil.getExpirationDateFromToken(token))));
    }


    @RequestMapping(value = "/api/user/register", method = RequestMethod.POST)
    public ResponseEntity<?> saveUser(@RequestBody DTOaccount user) throws Exception {
        return ResponseEntity.ok(userDetailsService.save(user));
    }

    @PostMapping("/api/user/update")
    public ResponseEntity<?> updateUser(@RequestBody DTOaccount user, HttpServletRequest request) throws Exception{
        String token = request.getHeader("Authorization").substring(7);
        String username = jwtTokenUtil.getUsernameFromToken(token);
        DAOaccount userdao = daOrepository.findByUser(username);

        if(user.getPassword() != null && !user.getPassword().equals("")) userdao.setPassword(bcryptEncoder.encode(user.getPassword()));
        if(user.getEmail() != null && !user.getEmail().equals("")) userdao.setEmail(user.getEmail());
        if(user.getAge() != null && !user.getAge().equals("")) userdao.setAge(user.getAge());

        if(username != null && user.getUser() != null && username.equals(user.getUser())){
            return ResponseEntity.ok(new ResBody<>(userDetailsService.update(userdao),jwtTokenUtil.extendToken(token)));
        }
        return ResponseEntity.badRequest().body("Invalid value");
    }

    @PostMapping("/api/user/isuser")
    public ResponseEntity<?> isuser(@RequestBody DTOaccount account,HttpServletRequest request){
        String token = request.getHeader("Authorization").substring(7);
        String username = jwtTokenUtil.getUsernameFromToken(token);
        DAOUser user = userRepository.findByuser(username);
        System.out.println("id" + username);
        System.out.println("pw" + account.getPassword());
        try {
            authenticate(username,account.getPassword());
        }catch (Exception e) {
            return ResponseEntity.status(401).body("User Authentication Failed~");
        }
        return ResponseEntity.ok(new ResBody<>(user,jwtTokenUtil.extendToken(token)));
    }

    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }
}
