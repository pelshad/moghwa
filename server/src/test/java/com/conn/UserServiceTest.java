package com.conn;

import com.conn.domain.user.UserRequest;
import com.conn.domain.user.UserResponse;
import com.conn.domain.user.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class UserServiceTest {

    @Autowired
    UserService userService;

    @Test
    void save(){
        UserRequest params = new UserRequest();
        params.setUserId("테스터");
        params.setUserPw("1234");
        params.setUserEmail("asd@asd.com");
        params.setUserTel("01011111111");
        Long id = userService.saveUser(params);
        System.out.println("유저 생성 완료" + id);
    }

//    @Test
//    void findUserById(){
//        UserResponse post = userService.findUserById("테스터");
//        try{
//            String postJson = new ObjectMapper().registerModule(new JavaTimeModule()).writeValueAsString(post);
//            System.out.println(postJson);
//        } catch (JsonProcessingException e){
//            throw new RuntimeException();
//        }
//    }

    @Test
    void countByUserId(){
        int check = userService.countByUserId("테스터");
        System.out.println(check);
    }
}
