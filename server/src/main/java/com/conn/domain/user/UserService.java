package com.conn.domain.user;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserMapper userMapper;

    @Transactional
    public Long saveUser(final UserRequest params){
        userMapper.save(params);
        return params.getId();
    }

    @Transactional
    public UserResponse findUserById(final String userId){
        return userMapper.findById(userId);
    }
    @Transactional
    public int countByUserId(final String userId){
        return userMapper.countByUserId(userId);
    }
    @Transactional
    public int checkToken(final UserRequest params){
        return userMapper.checkToken(params);
    }
    @Transactional
    public int saveToken(final UserRequest param){
        return userMapper.createToken(param);
    }
    @Transactional
    public int checkUser(final UserRequest params){
        return userMapper.login(params);
    }
}
