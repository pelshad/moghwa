package com.conn.domain.user;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class UserRequest {
    private Long id;
    private String userId;
    private String userPw;
    private String userEmail;
    private String userTel;
    private LocalDateTime createDate;

    private String token;
}
