package com.conn.domain.board;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardMapper {

    void save(BoardPostRequest params);

    List<BoardDBResponse> findAll(BoardGetRequest params);

    int pageCount(String tableName);

    BoardDBResponse findById(BoardGetRequest params);

    long viewCount(BoardGetRequest id);

    void update(BoardPostRequest params);

    void deleteById(BoardPostRequest params);


}
