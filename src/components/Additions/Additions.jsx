
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';



import img1 from "../../assets/images/lastest/01.png";
import img2 from "../../assets/images/lastest/02.png";
import img3 from "../../assets/images/lastest/03.png";
import img4 from "../../assets/images/lastest/04.png";
import { Container } from '../../global/components';
import AdditoinCard from '../AdditoinCard';
import { AdditionsHeading, AdditionsHeadingDot, AdditionsHeadingDotsWrapper, AdditionsHeadingTitle, AdditionsWrapper, AdditoinCardsWrapper, BgAdditions } from './style';
const Additions = ({img}) => {
    return (
        <BgAdditions>
            <Container>
                <AdditionsWrapper>
                    <AdditionsHeading>
                        <AdditionsHeadingTitle>Lastest Additions</AdditionsHeadingTitle>
                        <AdditionsHeadingDotsWrapper>
                            <AdditionsHeadingDot src={img}/>
                            <AdditionsHeadingDot src={img}/>
                        </AdditionsHeadingDotsWrapper>
                    </AdditionsHeading>
                    <AdditoinCardsWrapper>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        freeMode={true}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide><AdditoinCard img={img1} title="Cherry Cherry" newPrice="$24.99.00" oldPrice="$54.00" active={true} /></SwiperSlide>
                        <SwiperSlide><AdditoinCard img={img2} title="Pink Huice" newPrice="$56.00" oldPrice="$76.00" active={false}/></SwiperSlide>
                        <SwiperSlide><AdditoinCard img={img3} title="Glossier Pack" newPrice="$32.00" oldPrice="$60.00" active={false}/></SwiperSlide>
                        <SwiperSlide><AdditoinCard img={img4}title="Splash Mash"  newPrice="$64.00" oldPrice="$120.00" active={false}/></SwiperSlide>
                        <SwiperSlide><AdditoinCard img={img2} title="Cherry Cherry" newPrice="$24.99.00" oldPrice="$54.00" active={false}/></SwiperSlide>
                        <SwiperSlide><AdditoinCard img={img3} title="Cherry Cherry" newPrice="$24.99.00" oldPrice="$54.00" active={false}/></SwiperSlide>
                        <SwiperSlide><AdditoinCard img={img4} title="Cherry Cherry" newPrice="$24.99.00" oldPrice="$54.00" active={false}/></SwiperSlide>
                        <SwiperSlide><AdditoinCard img={img1} title="Cherry Cherry" newPrice="$24.99.00" oldPrice="$54.00" active={false}/></SwiperSlide>
                        <SwiperSlide><AdditoinCard img={img2} title="Cherry Cherry" newPrice="$24.99.00" oldPrice="$54.00" active={false}/></SwiperSlide>
                        <SwiperSlide><AdditoinCard img={img4} title="Cherry Cherry" newPrice="$24.99.00" oldPrice="$54.00" active={false}/></SwiperSlide>
                    </Swiper>
                    </AdditoinCardsWrapper>
                </AdditionsWrapper>
            </Container>
        </BgAdditions>
    );
}

export default Additions;
