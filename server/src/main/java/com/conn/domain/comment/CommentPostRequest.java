package com.conn.domain.comment;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CommentPostRequest {
    private int cid;
    private int bid;
    private String tableName;
    private String userId;
    private String content;
}
