package com.conn.domain.board;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BoardPostRequest {
    private Long bid;
    private String tableName;
    private String title;
    private String content;
    private String userId;
    private String file;
}
