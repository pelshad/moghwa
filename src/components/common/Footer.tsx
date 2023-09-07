import React from 'react';
import { styled } from 'styled-components';

const Footer = () => {
    return (
        <Foot>
            <div>
                <span>
                    <b>상호</b>: 목화식품
                </span>
                <span>
                    <b>대표자</b>: 장성진
                </span>
            </div>
            <p>
                <b>주소</b>: 경상북도 경산시 압량읍 가일길 149 나동
            </p>
            <p>
                <b>E-mail</b>: billy9587@naver.com
            </p>
            <div>
                <span>
                    <b>전화번호</b>: 053-818-1120
                </span>
                <span>
                    <b>사업자번호</b>: 640-14-01328
                </span>
            </div>
            <h2>ⓒ MOKHWA.ALL RIGHTS RESERVED.</h2>
        </Foot>
    );
};

const Foot = styled.footer`
    width: 100%;
    padding: 50px 0px;
    background-color: #333;
    text-align: center;
    color: #fff;
    div {
        display: inline-flex;
        gap: 30px;
        span {
            line-height: 1.5;
            font-size: 16px;
            b {
                line-height: 1.5;
                font-size: 16px;
            }
        }
    }
    p {
        line-height: 1.5;
        font-size: 16px;
        b {
            line-height: 1.5;
            font-size: 16px;
        }
    }
    h2 {
        font-size: 16px;
        margin-top: 50px;
    }
    @media (max-width:500px) {
        padding: 25px 0px;
        div {
        display: inline-flex;
        gap: 15px;
        span {
            line-height: 1.5;
            font-size: 12px;
            b {
                line-height: 1.5;
                font-size: 12px;
            }
        }
    }
    p {
        line-height: 1.5;
        font-size: 12px;
        b {
            line-height: 1.5;
            font-size: 12px;
        }
    }
    h2 {
        font-size: 12px;
        margin-top: 25px;
    }
    }
`;

export default Footer;
