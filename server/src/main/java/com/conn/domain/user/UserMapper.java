package com.conn.domain.user;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {
    void save(UserRequest param);

    UserResponse findById(String userId);

    int countByUserId(String userId);

    int login(UserRequest param);

    //토큰 부
    int createToken(UserRequest param);
    int checkToken(UserRequest param);

//    void update(UserRequest param);
//
//    void eleteById(Long id);
//
//    List<UserResponse> findAll();
}
