package com.conn.domain.user;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    @PostMapping("/user")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public ResUserJson saveUser(@RequestBody UserRequest params){
        ResUserJson res = new ResUserJson();
        int checkDuplication = userService.countByUserId(params.getUserId());
        if(checkDuplication == 1){
            res.setResult("fail");
            res.setData(
                    new HashMap<String, String>(){{ put("msg", "아이디가 중복되었습니다.");}}
            );
            return res;
        }
        userService.saveUser(params);
        res.setResult("success");
        res.setData(
                new HashMap<String, String>(){{ put("msg", "아이디 생성완료");}}
        );
        return res;
    }

    @PostMapping("/user/login")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public ResUserJson userLogin(@RequestBody UserRequest params){
        ResUserJson res = new ResUserJson();
        int login = userService.checkUser(params);
        if(login == 0){
            res.setResult("fail");
            res.setData(
                    new HashMap<String, String>(){{ put("msg", "아이디 또는 비밀번호가 틀렸습니다.");}}
            );
            return res;
        }
        String token = res.createUserToken();
        params.setToken(token);
        userService.saveToken(params);
        res.setResult("success");
        res.setData(
                new HashMap<String, String>(){{
                    put("msg", "로그인 완료");
                    put("userId", params.getUserId());
                    put("token", token);
                }}
        );
        return res;
    }

    //토큰부
    //**리팩토링 필요
    @PostMapping("/user/tokenCheck")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public ResUserJson userCheck(@RequestBody UserRequest param){
        ResUserJson res = new ResUserJson();
        int check = userService.checkToken(param);
        if(check == 0){
            res.setResult("fail");
            res.setData(
                    new HashMap<String, String>(){{ put("msg", "로그아웃 되었습니다.");}}
            );
            return res;
        }
        res.setResult("success");
        res.setData(
                new HashMap<String, String>(){{
                    put("msg", "체크 완료");
                }}
        );
        return res;
    }



}
