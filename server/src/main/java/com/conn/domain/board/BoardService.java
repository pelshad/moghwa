package com.conn.domain.board;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BoardService {

    private final BoardMapper boardMapper;

    @Transactional
    public Long saveBoard(final BoardPostRequest params){
        boardMapper.save(params);
        return params.getBid();
    }

    public List<BoardDBResponse> findAllBoard(BoardGetRequest param){
        return boardMapper.findAll(param);
    }

    public BoardDBResponse findBoardById(final BoardGetRequest params)
    {
        return boardMapper.findById(params);
    }

    @Transactional
    public Long viewCountBoard(final BoardGetRequest params){
        boardMapper.viewCount(params);
        return params.getBid();
    }

    public int findTotalPage(final String tableName){return boardMapper.pageCount(tableName);}

    @Transactional
    public Long updateBoard(final BoardPostRequest params){
        boardMapper.update(params);
        return params.getBid();
    }

    @Transactional
    public Long deleteBoard(final BoardPostRequest params){
        boardMapper.deleteById(params);
        return params.getBid();
    }


}
