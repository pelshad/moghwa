package com.conn.domain.comment;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CommentMapper {
    void save(CommentPostRequest params);

    List<CommentDBResponse> findAll(CommentGetRequest params);

    void update(CommentPostRequest params);

    void deleteById(CommentPostRequest params);

}
