import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./style.scss";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper/types";

export default function Swipers() {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

	return (
		<div className="Swiper__container1">
			<Swiper
				style={
					{
						// кастомні CSS змінні Swiper (треба уточнити TS)
						"--swiper-navigation-color": "#fff",
						"--swiper-pagination-color": "#fff",
					} as React.CSSProperties
				}
				loop={true}
				spaceBetween={10}
				navigation={true}
				thumbs={{
					swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
				}}
				modules={[FreeMode, Navigation, Thumbs]}
				className="mySwiper2"
			>
				{Array.from({ length: 4 }, (_, i) => (
					<SwiperSlide key={i}>
						<img
							src={`https://swiperjs.com/demos/images/nature-${i + 1}.jpg`}
							alt={`Slide ${i + 1}`}
						/>
					</SwiperSlide>
				))}
			</Swiper>

			<Swiper
				onSwiper={setThumbsSwiper}
				loop={true}
				spaceBetween={10}
				slidesPerView={4}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[FreeMode, Navigation, Thumbs]}
				className="mySwiper"
			>
				{Array.from({ length: 10 }, (_, i) => (
					<SwiperSlide key={i}>
						<img
							src={`https://swiperjs.com/demos/images/nature-${i + 1}.jpg`}
							alt={`Thumb ${i + 1}`}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
