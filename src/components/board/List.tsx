import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { GetBoard, BoardList } from 'interfaces/board';

import { getBoard } from 'apis/board';

import Paging from './Pageing';
import Loading from 'components/loding/Loading';

import * as Style from 'assets/styleComponents/board/list';

const Board = () => {
    const nav = useNavigate();
    const { boardType, boardPage } = useParams();
    const [board, setBoard] = useState<GetBoard | undefined>(undefined);

    const writerCheck = (userId:string | null, bid:number | undefined) :void=>{
        if(boardType !== 'notice'){
            let sessionId = sessionStorage.getItem('userId');
            (sessionId == userId || sessionId == "billy9587")
                ? nav(`/boardDetail/${boardType}/${bid}`)
                : alert("해당 글은 작성자와 관리자만 확인할 수 있습니다.")
        } else {
            nav(`/boardDetail/${boardType}/${bid}`);
        }

    }

    useEffect(() => {
        getBoard(
            {
                tableName: boardType,
                boardPage: Number(boardPage),
            },
            setBoard,
        );
    }, [nav]);

    return board === undefined ? (
        <Loading />
    ) : (
        <Style.Container>
            <div className="wrap">
                <h2>{boardType === 'notice' ? '공지사항' : '문의사항'}</h2>
                {boardType === 'notice' && sessionStorage.getItem('userId') === 'billy9587' && (
                    <Link className="write" to={`/${boardType}/write`}>
                        글쓰기
                    </Link>
                )}
                {boardType !== 'notice' && sessionStorage.getItem('userId') !== null && (
                    <Link className="write" to={`/${boardType}/write`}>
                        글쓰기
                    </Link>
                )}
                <ul className="title">
                    <li>번호</li>
                    <li>제목</li>
                    <li>글쓴이</li>
                    <li>작성일</li>
                    <li>조회수</li>
                </ul>
                {board.boardList.length <= 0 ? (
                    <p style={{ textAlign: 'center', lineHeight: '300px', borderBottom: '1px solid #aaa' }}>
                        현재 게시글이 없습니다.
                    </p>
                ) : (
                    board.boardList?.map((a: BoardList, i: number) => {
                        return (
                            <ul className="list" key={i}>
                                <li>{a.bid}</li>
                                <li className='linkDetail' onClick={() => {
                                    writerCheck(a.userId,a.bid);
                                }}>
                                    {a.title}
                                </li>
                                <li>{a.userId === "admin" ? "관리자" : a.userId}</li>
                                <li>{a.createdDate.split(' ')[0]}</li>
                                <li>{a.viewCnt}</li>
                            </ul>
                        );
                    })
                )}
            </div>
            <Paging boardPage={Number(boardPage)} boardLength={board.pageCount} url={`/${boardType}`} />
        </Style.Container>
    );
};

export default Board;
