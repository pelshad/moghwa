import { styled } from 'styled-components';
import reviewBg from '../../images/reviewBg.png';

export const Banner = styled.div`
    width: 100%;
    position: relative;
    @keyframes text-active-animation {
        0%{margin-right:15px;}
        100%{margin-right:0px;}
    }
    @keyframes fadeIn {
                0%{opacity:0}
                100%{opacity:100}
            }
    > img {
        width: 100%;
    }
    .moContent{
        display: none;
    }

    .content {
        position: absolute;
        top: 65%;
        left: 52%;
        color: #fff;
        font-weight: 400;
        line-height: 1.2;
        
        padding: 20px;
        border-radius: 10px;
        text-shadow: 5px 5px 5px black;
        b {
            color: #fff;
            font-size: 42px;
            font-weight: 900;
            line-height: 1.2;
        }
        span{
            font-size: 42px;
        }
        .char{
            opacity: 0;
            transition: transform .3s cubic-bezier(.3,0,.3,1), opacity .3s linear;
            transition-delay: calc(20ms + (30ms * var(--char-index)));
            animation: text-active-animation 2.5s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
    }

    .content.on {
        opacity: 1;
        .char{
            opacity: 1;
            transform: translateX(calc(0.2em * var(--char-index)));
        }
        background: rgba(0,0,0,0.4);
        transition: 1.5s 1.5s;
    }
    
    .scrollDown {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        color: #fff;
        p {
            font-size: 10px;
            margin-bottom: 10px;
        }
        .dotCircle{
            animation: rotate 8s linear infinite;
        }
        .arrow{
            position: absolute;
            transform: translate(-50%, -50%);
            top: 62%;
            left: 50%;
            animation: down 1s  infinite;
        }
        @keyframes rotate{
            0%{transform:rotate(0deg);}
            100%{transform:rotate(360deg);}
        }
        @keyframes down {
            0%{top:59%;}
            100%{top:65%;}
        }
        
    }

    @media (max-width: 1800px) {
        .content {
            span{
                font-size: 30px;
            }
            b {
                font-size: 30px;
            }
        }
    }
    @media (max-width: 1300px) {
        .content {
            top: 65%;
            left: 55%;
            span{
                font-size: 22px;
            }
            b {
                font-size: 22px;
            }
        }
    }
    @media (max-width: 1000px) {
        .content {
            top: 65%;
            left: 55%;
            span{
                font-size: 18px;
            }
            b {
                font-size: 18px;
            }
        }
    }
    @media (max-width: 800px) {
        .content{
            display: none !important;
        }
        /* .content {
            top: 15%;
            left: 45%;
            span{
                font-size: 16px;
                line-height:1.5;
            }
            .char{
            opacity: 0;
            transition: transform .3s cubic-bezier(.3,0,.3,1), opacity .3s linear;
            transition-delay: calc(20ms + (30ms * var(--char-index)));
            animation: none !important;
        }
        } */

        .moContent{
        display: block;
        position: absolute;
        top: 15%;
        left: 45%;
        color: #fff;
        font-weight: 400;
        line-height:1.5;
        font-size: 16px;
        padding: 20px;
        border-radius: 10px;
        text-shadow: 5px 5px 5px black;
        animation: fadeIn 1s linear;
        background: rgba(0,0,0,0.4);
        p{
            font-size: 16px;
            font-weight: 400;
            padding: 5px;
        }
        b {
            color: #fff;
            font-size: 16px;
            font-weight: 900;
            line-height:1.5;
        }
        .arrow{
            left: 45% !important;
        }
        }
    
    @media (max-width: 500px) {
        .moContent{
        display: block;
        position: absolute;
        top: 15%;
        left: 45%;
        color: #fff;
        font-weight: 400;
        line-height:1.5;
        font-size: 14px;
        padding: 10px;
        border-radius: 10px;
        text-shadow: 5px 5px 5px black;
        animation: fadeIn 1s linear;
        background: rgba(0,0,0,0.4);
        p{
            font-size: 16px;
            font-weight: 400;
            padding: 5px;
        }
        b {
            color: #fff;
            font-size: 14px;
            font-weight: 900;
            line-height:1.5;
        }
        .arrow{
            left: 45% !important;
        }
        }
        /* .content {
            animation: fadeIn 1s linear;
            top: 15%;
            left: 45%;
            span{
                font-size: 14px;
                line-height:1.5;
            }
            
        }
        .content.on {
        transition: 1s;
    } */
    }
    }
`;

export const Intro = styled.div`
    text-align: center;
    padding: 100px 0px 50px;
    .wrap {
        position: relative;
        top: 100px;
        opacity: 0;
        transition: top 0.5s, opacity 1s;
    }
    .on {
        top: 0px;
        opacity: 1;
    }
    h2 {
        display: inline-block;
        padding: 10px 50px 0px 50px;
        font-size: 24px;
        font-weight: bold;
        font-family: 'Kanit';
    }
    h3 {
        font-size: 40px;
        font-weight: bold;
        margin-top: 30px;
    }
    p {
        font-size: 18px;
        line-height: 1.7;
        font-weight: 400;
        letter-spacing: -2px;
        margin-top: 50px;
    }
    .headBar{
        position: absolute;
        transform: translate(-50%, -50%);
        width: 15%;
        left: 49.6%;
        top: -5%;
        opacity: 0;
        transition: top 0.5s, opacity 1s;
    }
    .headBar.on{
        top: 2%;
        opacity: 1;
        transition: 0.5s 0.5s;
    }
    @media (max-width: 1200px){
        .headBar{
        width: 20%;
        left: 49.6%;
        top: -5%;
    }
    }
    
    
    @media (max-width: 700px) {
        p {
            font-size: 16px;
        }
    }
    @media (max-width: 600px) {
        padding: 80px 0px 30px;
        h3 {
            font-size: 30px;
        }
        p {
            margin-top: 20px;
            font-size: 14px;
            &:nth-child(1) {
                br {
                    display: none;
                }
            }
        }
        .headBar{
        width: 30%;
        left: 49.6%;
        top: -5%;
        }
    }
    @media (max-width:400px){
        p{
            letter-spacing: -1px !important;
        }
        .headBar{
            width: 40%;
            left: 49.6%;
            top: -5%;
        }
    }
`;

export const Proudct = styled.div`
    text-align: center;
    padding: 50px 0px;
    h2 {
        font-size: 34px;
        font-weight: bold;
        font-family: 'Kanit';
    }
    ul {
        display: flex;
        gap: 15px;
        margin-top: 50px;
        li {
            flex: 1;
            div {
                position: relative;
                &:hover {
                    &::after {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background-color: #bae14822;
                        border: 3px solid #bae148;
                        border-radius: 20px;
                    }
                    a {
                        opacity: 1;
                        white-space: nowrap;
                    }
                }
                img {
                    width: 100%;
                }
                a {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    z-index: 1;
                    transform: translate(-50%, -50%);
                    background-color: #97c318;
                    padding: 10px 20px;
                    font-size: 18px;
                    color: #fff;
                    border-radius: 20px;
                    opacity: 0;
                    i {
                        font-size: 16px;
                        color: #fff;
                        padding-left: 5px;
                    }
                }
            }
            h3 {
                margin-top: 20px;
                font-size: 18px;
            }
        }
    }
    @media (max-width: 700px) {
        ul {
            display: grid;
            grid-template-columns: 1fr 1fr;
            h3{
                font-size: 16px !important;
            }
        }
        
    }
`;

export const Delivery = styled.div`
    padding: 50px 0px 0px;
    h2 {
        font-size: 28px;
        font-weight: 900;
        margin-bottom: 50px;
        text-align: center;
    }
    ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: flex-start;
        justify-content: center;
        grid-gap: 30px;
        li {
            overflow: hidden;
            img {
                position: relative;
                top: -100px;
                left: 200px;
                opacity: 0;
                width: 100%;
                transition: top 1s, left 1s, opacity 1s;
            }
            p {
                font-size: 20px;
                line-height: 1.5;
                letter-spacing: -2px;
                opacity: 0;
                transition: opacity 0.5s 0.5s;
                b {
                    font-size: 20px;
                    line-height: 1.5;
                    font-weight: 900;
                    letter-spacing: -2px;
                }
            }
        }
    }
    ul.on {
        li {
            img {
                opacity: 1;
                top: 0;
                left: 0;
            }
            p {
                opacity: 1;
            }
        }
    }
    @media (max-width: 1000px) {
        ul {
            li {
                p {
                    font-size: 16px;
                    b {
                        font-size: 16px;
                    }
                }
            }
        }
    }
    @media (max-width: 800px) {
        ul {
            text-align: center;
            grid-template-columns: 1fr;
        }
    }
    @media (max-width: 500px) {
        ul {
            li {
                p {
                    br {
                        display: none;
                    }
                }
            }
        }
    }
    @media (max-width: 400px) {
        li {
            
            p {
                letter-spacing: -1px !important;

                b {
                    letter-spacing: -1px !important;
                }
            }
        }
    }
`;

export const Review = styled.div`
    padding: 300px 0px 150px;
    position: relative;
    background-image: url(${reviewBg});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    .board {
        background-color: #fff;
        width: 100%;
        height: 150px;
        position: absolute;
        top: 0px;
        left: 0px;
        border-bottom-right-radius: 150px;
    }
    .cut {
        position: absolute;
        top: 150px;
        left: 0px;
    }
    ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 20px;
        position: relative;
        top: -100px;
        opacity: 0;
        transition: opacity 0.5s, top 0.5s;
        li {
            img {
                width: 100%;
            }
        }
    }
    ul.on {
        top: 0;
        opacity: 1;
    }
    @media (max-width: 900px) {
        padding: 150px 0px 100px;
        .board {
            background-color: #fff;
            width: 100%;
            height: 50px;
            position: absolute;
            top: 0px;
            left: 0px;
            border-bottom-right-radius: 50px;
        }
        .cut {
            position: absolute;
            top: 50px;
            left: 0px;
            height: 80px;
        }
        ul {
            grid-template-columns: 1fr 1fr;
        }
    }
`;
