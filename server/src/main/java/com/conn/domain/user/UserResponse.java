package com.conn.domain.user;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class UserResponse {
    private String userId;
    private String userPW;
    private String userEmail;
    private String userTel;
    private boolean deleteYn;
    private LocalDateTime createDate;
}
