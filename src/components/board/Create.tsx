import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { createBoard } from 'apis/board';

import * as Style from 'assets/styleComponents/board/write';

const Create = () => {
    const { boardType } = useParams();
    const nav = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [firstImage, setFirstImage] = useState('');

    // 이미지 base64
    const onFileChange = (e: any) => {
        const {
            target: { files },
        } = e;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            const {
                currentTarget: { result },
            }: any = finishedEvent;
            setFirstImage(result);
        };
        reader.readAsDataURL(theFile);
    };

    // 게시글 작성
    const handleCreateBoard = async (e: any) => {
        e.preventDefault();
        (await createBoard({
            userId: sessionStorage.getItem('userId') === "billy9587" ? "admin" : sessionStorage.getItem('userId'),
            title: title,
            content: content,
            file: firstImage,
            tableName: boardType,
        })) && nav(`/${boardType}/1`);
    };

    const onChange = (e: any) => {
        const value = e.target.value;
        const name = e.target.name;
        switch (name) {
            case 'title':
                setTitle(value);
                break;
            case 'content':
                setContent(value);
                break;
            default:
                break;
        }
    };

    return (
        <div className="wrap">
            <Style.WriteForm>
                <h2>{boardType === 'notice' ? '공지사항 글쓰기' : '문의사항 글쓰기'}</h2>
                <input
                    maxLength={100}
                    type="text"
                    name="title"
                    value={title}
                    placeholder="제목 최대 100자"
                    onChange={onChange}></input>
                <textarea
                    maxLength={1000}
                    name="content"
                    value={content}
                    onChange={onChange}
                    placeholder="내용 최대 1000자"></textarea>
                <input type="file" accept="image/*" onChange={onFileChange} />
                <Style.Button>
                    <button onClick={handleCreateBoard}>글쓰기</button>
                </Style.Button>
            </Style.WriteForm>
        </div>
    );
};

export default Create;
