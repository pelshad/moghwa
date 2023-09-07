package com.conn.domain.comment;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
public class CommentDBResponse {
    private int cid;
    private int bid;
    private String tableName;
    private String userId;
    private String content;
    private LocalDate createdDate;
}
