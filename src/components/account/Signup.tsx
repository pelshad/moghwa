import React, { useState } from 'react';

import { useAppDispatch } from 'redux/hook';
import { login, offAccount } from 'redux/slice/accountSlice';

import { signup } from 'apis/account';

import { formatPhoneNumber } from 'utils/formatPhoneNumber';

import { AccountForm } from 'assets/styleComponents/account/account';

const Signup = () => {
    const dispatch = useAppDispatch();
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEamil] = useState('');

    // 회원가입
    const handleSignup = (e: any): void => {
        e.preventDefault();

        const phoneRegex = /^\d{2,3}-\d{3,4}-\d{4}$/;
        const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

        if (id.length < 2) {
            alert('아이디 두자리 이상 해주세요.');
            return;
        } else if (pw.length < 6) {
            alert('비밀번호 6자리 이상해주세요.');
        } else if (!phoneRegex.test(tel)) {
            alert('전화번호 형식이 아닙니다.');
            return;
        } else if (!emailRegex.test(email)) {
            alert('이메일 형식이 아닙니다.');
            return;
        }

        signup({
            userId: id,
            userPw: pw,
            userTel: tel,
            userEmail: email,
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
            case 'tel':
                setTel(formatPhoneNumber(value));
                break;
            case 'email':
                setEamil(value);
                break;
            default:
                break;
        }
    };

    return (
        <AccountForm>
            <div className="form">
                <h2>회원가입</h2>
                <input type="text" name="id" onChange={onChange} value={id} placeholder="아이디" />
                <input type="password" name="pw" onChange={onChange} value={pw} placeholder="비밀번호" />
                <input type="text" name="tel" onChange={onChange} value={tel} placeholder="전화번호" maxLength={13} />
                <input type="text" name="email" onChange={onChange} value={email} placeholder="이메일" />
                <div className="buttons">
                    <button onClick={handleSignup}>가입하기</button>
                    <div>
                        <button
                            onClick={() => {
                                dispatch(login());
                            }}>
                            뒤로가기
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

export default Signup;
