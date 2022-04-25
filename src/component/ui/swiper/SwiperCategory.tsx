import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper';
import { FC } from 'react';
import { IProduct } from '../../../interface';
import { Card } from '../card/Card';

interface Props {
	products: IProduct[];
}

export const SwiperCategory: FC<Props> = ({ products }) => {
	return (
		<>
			<Swiper
				slidesPerView={1}
				spaceBetween={10}
				loop={true}
				navigation={false}
				// pagination={{
				// 	clickable: true
				// }}
				breakpoints={{
					375: {
						slidesPerView: 1,
						spaceBetween: 10
					},
					765: {
						slidesPerView: 3,
						spaceBetween: 10
					},
					1024: {
						slidesPerView: 4,
						spaceBetween: 10
					}
				}}
				modules={[Navigation, Pagination]}
				className="mySwiper"
			>
				{products.map((product, i) => (
					<SwiperSlide key={i}>
						<Card product={product} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};
