import React, { useState } from 'react';

import { useAppDispatch } from 'redux/hook';
import { signup, offAccount } from 'redux/slice/accountSlice';

import { login } from 'apis/account';

import { AccountForm } from 'assets/styleComponents/account/account';

const Login = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const dispatch = useAppDispatch();

    // 로그인
    const handleLogin = (e: any): void => {
        e.preventDefault();

        login({
            userId: id,
            userPw: pw,
        });
    };

    const onChange = (e: any): void => {
        const name = e.target.name;
        const value = e.target.value;
        switch (name) {
            case 'id':
                setId(value);
                break;
            case 'pw':
                setPw(value);
                break;
            default:
                break;
        }
    };

    return (
        <AccountForm>
            <div className="form">
                <h2>로그인</h2>
                <input type="text" name="id" onChange={onChange} value={id} placeholder="아이디" />
                <input type="password" name="pw" onChange={onChange} value={pw} placeholder="비밀번호" />
                <div className="buttons">
                    <button onClick={handleLogin}>로그인</button>
                    <div>
                        <button
                            onClick={() => {
                                dispatch(signup());
                            }}>
                            회원가입
                        </button>
                        <button
                            onClick={() => {
                                dispatch(offAccount());
                            }}>
                            닫기
                        </button>
                    </div>
                </div>
            </div>
            <div
                className="bg"
                onClick={() => {
                    dispatch(offAccount());
                }}></div>
        </AccountForm>
    );
};

export default Login;
