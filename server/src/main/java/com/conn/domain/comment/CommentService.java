package com.conn.domain.comment;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentMapper commentMapper;

    @Transactional
    public int saveComment(final CommentPostRequest params){
        commentMapper.save(params);
        return params.getCid();
    }

    public List<CommentDBResponse> findAllComment(final CommentGetRequest params){
        return commentMapper.findAll(params);
    }

    @Transactional
    public int updateComment(final CommentPostRequest params){
        commentMapper.update(params);
        return params.getCid();
    }

    @Transactional
    public int deleteComment(final CommentPostRequest params){
        commentMapper.deleteById(params);
        return params.getCid();
    }

}
