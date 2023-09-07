import React, { useEffect, useRef, useState } from 'react';

import * as Style from 'assets/styleComponents/main/main';

import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

import banner from 'assets/images/banner.png';
import mobanner from 'assets/images/mo.png';
import circle from 'assets/images/dotCircle.png';
import arrow from 'assets/images/arrow.png';
import prodcut01 from 'assets/images/제품1.png';
import prodcut02 from 'assets/images/제품2.png';
import prodcut03 from 'assets/images/제품3.png';
import prodcut04 from 'assets/images/제품4.png';
import car from 'assets/images/car.png';
import review01 from 'assets/images/리뷰1.png';
import review02 from 'assets/images/리뷰2.png';
import review03 from 'assets/images/리뷰3.png';
import review04 from 'assets/images/리뷰4.png';
import cut from 'assets/images/짜름4.png';
import introHeadBar from 'assets/images/headBar.png';

const Main = () => {
    const [bannerSwitch, setBannerSwitch] = useState(false);
    const [introSwitch, setIntroSwitch] = useState(false);
    const [deliverySwitch, setDeliverySwitch] = useState(false);
    const [reviewSwitch, setReviewSwitch] = useState(false);
    const introRef = useRef<any>(null);
    const deliveryRef = useRef<any>(null);
    const reviewRef = useRef<any>(null);
    

    const handleScrollDown = (): void => {
        introRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    useEffect(() => {
        Splitting();

        window.addEventListener('load',() => {
            setBannerSwitch(true);
        })

        window.addEventListener('scroll', () => {
            const y = window.scrollY;
            if (introRef.current?.offsetTop < y + 500) {
                setIntroSwitch(true);
            }
            if (deliveryRef.current?.offsetTop < y + 500) {
                setDeliverySwitch(true);
            }
            if (reviewRef.current?.offsetTop < y + 300) {
                setReviewSwitch(true);
            }
        });
    }, []);

    

    return (
        <>
            <Style.Banner>
                <img src={banner} alt="" className="pcimg" />
                <img src={mobanner} alt="" className="moimg" />
                <span data-splitting="chars" className={!bannerSwitch ? 'content' : 'content on'}>
                    <b>음식</b>은 눈으로도
                     먹습니다 <br />
                    <b>신선한</b> 재료를
                     사용하였고 <br />
                    아삭함과 깔끔한 맛을
                     내기 위해 노력했습니다.
                </span>
                <div className='moContent'>
                    <b>음식</b>은 눈으로도
                        먹습니다 <br />
                        <b>신선한</b> 재료를
                        사용하였고 <br />
                        아삭함과 깔끔한 맛을
                        내기 위해 노력했습니다.
                </div>
                <div className="scrollDown" onClick={handleScrollDown}>
                    <p>SCROLL DOWN</p>
                    <div>
                        <img src={circle} alt="" className='dotCircle' />
                        <img src={arrow} alt="" className='arrow' />

                    </div>
                    {/* <i className="fa-solid fa-angle-down"></i> */}
                </div>
            </Style.Banner>

            <Style.Intro ref={introRef}>
                <div className={introSwitch ? 'wrap on' : 'wrap'}>
                    <img className={introSwitch ? 'headBar on' : 'headBar'} src={introHeadBar} alt="" />
                    <h2>Introduce</h2>
                    <h3>목화식품</h3>
                    <div className="content" >
                        <p>
                            저희 목화식품은 다른 곳과 차별화된 보존 기간으로 장기간동안 보관할 수 있게 하였습니다.{' '}
                            <br />
                            또한, 완성도 높은 제품으로 해외 시장까지 진출하였고, 사업 초기부터 온라인 판매를 하여 <br />
                            인지도가 높아 저희 제품을 사용하는 매장의 경우 ‘ 치킨무까지 맛있는 곳 ’ 이라는 인식을 <br />
                            심어 줄 수 있습니다. <br />
                        </p>
                        <p>
                            이제는 똑같은 치킨에 똑같은 무를 사용하는 것이 아닌,
                            <br />
                            목화식품으로 색다른 매장이 되어보시길 바랍니다.
                        </p>
                    </div>
                </div>
            </Style.Intro>

            <Style.Proudct>
                <div className="wrap">
                    <h2>PRODUCT</h2>
                    <ul>
                        <li>
                            <div>
                                <img src={prodcut01} alt="" />
                                <a href="https://smartstore.naver.com/mokhwafood/products/2340376438">
                                    구매하기<i className="fa-solid fa-up-right-from-square"></i>
                                </a>
                            </div>
                            <h3>비트 치킨무 240gX50팩</h3>
                        </li>
                        <li>
                            <div>
                                <img src={prodcut02} alt="" />
                                <a href="https://smartstore.naver.com/mokhwafood/products/2340374984">
                                    구매하기<i className="fa-solid fa-up-right-from-square"></i>
                                </a>
                            </div>
                            <h3>치킨무 240gX50팩</h3>
                        </li>
                        <li>
                            <div>
                                <img src={prodcut03} alt="" />
                                <a href="https://smartstore.naver.com/mokhwafood/products/2373787319">
                                    구매하기<i className="fa-solid fa-up-right-from-square"></i>
                                </a>
                            </div>
                            <h3>비트 치킨무 5kgX3팩</h3>
                        </li>
                        <li>
                            <div>
                                <img src={prodcut04} alt="" />
                                <a href="https://smartstore.naver.com/mokhwafood/products/2373802749">
                                    구매하기<i className="fa-solid fa-up-right-from-square"></i>
                                </a>
                            </div>
                            <h3>치킨무 5kgX3팩</h3>
                        </li>
                    </ul>
                </div>
            </Style.Proudct>

            <Style.Delivery ref={deliveryRef}>
                <div className="wrap">
                    <h2>목화식품 배송안내</h2>
                    <ul className={deliverySwitch ? 'on' : ''}>
                        <li>
                            <img src={car} alt="" />
                        </li>
                        <li>
                            <p>
                                일주일에 1회 배송으로 최소 물량 5박스 이상부터 <br />
                                목화식품과 계약된 물류업체에서 냉장차 직접 배송도 가능합니다. <br className='br' />
                                그외 OEM 생산과 해외 수출 및 대량 구매 고객님께서는 <br />
                                <b>053-818-1120</b> 으로 문의 부탁드립니다.
                            </p>
                        </li>
                    </ul>
                </div>
            </Style.Delivery>

            <Style.Review ref={reviewRef}>
                <div className="wrap">
                    <ul className={reviewSwitch ? 'on' : ''}>
                        <li>
                            <img src={review01} alt="" />
                        </li>
                        <li>
                            <img src={review02} alt="" />
                        </li>
                        <li>
                            <img src={review03} alt="" />
                        </li>
                        <li>
                            <img src={review04} alt="" />
                        </li>
                    </ul>
                    <div className="board"></div>
                    <img className="cut" src={cut} alt="" />
                </div>
            </Style.Review>
        </>
    );
};

export default Main;
