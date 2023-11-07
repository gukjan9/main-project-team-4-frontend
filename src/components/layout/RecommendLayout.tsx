import styled from 'styled-components';
import { theme } from '../../styles/theme';
import RecommendCard from '../common/RecommendCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

type RecommendType = {
  title: string;
  data: ItemType[];
};

type ItemType = {
  category_m_id: number;
  category_m_name: string;
  item_created_at: string;
  item_id: number;
  item_main_image: string;
  item_name: string;
  item_price: string;
  item_state: 'SELLING' | 'RESERVED' | 'SOLDOUT';
  member_id: number;
  member_nickname: string;
  shop_name: string;
};

function RecommendLayout({ title, data }: RecommendType) {
  return (
    <LayOut>
      <Container>
        <h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path
              d="M4.77589 9.606L5.64789 15.5H18.3839L19.2509 9.52L15.7579 12.54L12.0029 7.713L8.09389 12.524L4.77589 9.606ZM14.8139 8.069L14.7359 8.136L14.8769 8.15L16.0439 9.649L17.4809 8.407L17.6209 8.421L17.5589 8.339L19.9719 6.253C20.1261 6.11991 20.3174 6.03711 20.52 6.01568C20.7226 5.99425 20.9269 6.03522 21.1056 6.1331C21.2843 6.23098 21.4288 6.3811 21.5198 6.56336C21.6108 6.74563 21.644 6.95136 21.6149 7.153L20.1149 17.5H3.92189L2.39889 7.2C2.36864 6.99724 2.40143 6.79007 2.49284 6.60657C2.58424 6.42307 2.72984 6.27209 2.90991 6.17409C3.08998 6.07609 3.29581 6.0358 3.49954 6.05868C3.70327 6.08156 3.89504 6.1665 4.04889 6.302L6.34989 8.327L6.29989 8.387L6.40889 8.379L7.85289 9.649L9.06489 8.156L9.17389 8.147L9.11389 8.095L11.2449 5.476C11.3398 5.35931 11.4598 5.26554 11.596 5.20167C11.7322 5.1378 11.8811 5.10548 12.0315 5.10711C12.1819 5.10875 12.33 5.1443 12.4648 5.21111C12.5996 5.27792 12.7175 5.37428 12.8099 5.493L14.8149 8.069H14.8139ZM3.99989 18.5H19.9999V19.5C19.9999 19.7652 19.8945 20.0196 19.707 20.2071C19.5195 20.3946 19.2651 20.5 18.9999 20.5H4.99989C4.73467 20.5 4.48032 20.3946 4.29278 20.2071C4.10525 20.0196 3.99989 19.7652 3.99989 19.5V18.5Z"
              fill="white"
            />
          </svg>
          {title}
        </h1>
        <CardWrapper>
          <StyledSwiper
            modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectCoverflow]}
            slidesPerView={3}
            // slidesPerGroup={3}
            navigation
            centeredSlides
            speed={1000}
            effect="coverflow"
            pagination={{ clickable: true, type: 'progressbar' }}
            // scrollbar={{ draggable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
          >
            {data.map((item: ItemType, index) => (
              <SwiperSlide key={index}>
                <RecommendCard
                  shopName={item.shop_name}
                  categoryTitle={title}
                  itemState={item.item_state}
                  id={item.item_id}
                  img={item.item_main_image}
                  itemTitle={item.item_name}
                  price={item.item_price}
                />
              </SwiperSlide>
            ))}
          </StyledSwiper>
        </CardWrapper>
      </Container>
    </LayOut>
  );
}

export default RecommendLayout;

const LayOut = styled.div`
  width: 80rem;
  height: 38.6875rem;
`;
const Container = styled.div`
  width: 100vw;
  height: 38.6875rem;

  position: absolute;
  left: 0rem;
  background-color: ${theme.pointColor};

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2.5rem;
    gap: 0.5rem;

    color: white;
    font-size: 1.625rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 67.5rem;
  margin: 1.25rem auto 3.12rem auto;
`;
const StyledSwiper = styled(Swiper)`
  position: relative;
  height: 32.6875rem;
  .swiper-button-next,
  .swiper-button-prev {
    color: ${theme.inputColor}; // 네비게이션 버튼 색상 변경
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 3.125rem; // 네비게이션 화살표 크기 변경
  }
  .swiper-pagination {
    bottom: 10px !important; // 하단에서 10px의 위치에 배치
    top: auto !important; // 기본 상단 위치를 무시
    width: 100%; // 너비를 100%로 설정하여 컨테이너를 가득 채움
  }

  .swiper-pagination-progressbar {
    width: 100%;
    background: rgba(255, 255, 255, 0.5); // 프로그레스바 배경색
    .swiper-pagination-progressbar-fill {
      background: ${theme.navy}; // 프로그레스바 채우기 색상
    }
  }
`;