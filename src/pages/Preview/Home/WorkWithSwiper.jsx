import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import SectionTitle from "../utils/SectionTitle";
import Section from "../utils/Section";

import {
  contentfulIsLoading,
  contentfulItemsText,
  fetchGetContentfulText,
} from "../../../redux/slices/contentfulTextSlice";

import Circular from "../../../utils/CircularProgress";
import ScrollAnimation from "react-animate-on-scroll";

const WorkWithSwiper = () => {
  const dispatch = useDispatch();
  const items = useSelector(contentfulItemsText);
  const isLoading = useSelector(contentfulIsLoading);

  React.useEffect(() => {
    dispatch(fetchGetContentfulText());
  }, [dispatch]);

  return (
    <div>
      <Section>
        <SectionTitle title="Swiper" />
        {isLoading ? (
          <Circular />
        ) : (
          <Swiper slidesPerView={3}>
            {items.map((items, index) => (
              <SwiperSlide key={items.sys.id}>
                <ScrollAnimation
                  animateIn="animate__fadeInUp"
                  delay={index * 500}
                >
                  <h3>{items.picture.title}</h3>
                  <img
                    src={items.picture.url}
                    alt={items.picture.fileName}
                    className="banner-swiper"
                  />
                  <p>{items.text}</p>
                </ScrollAnimation>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Section>
    </div>
  );
};

export default WorkWithSwiper;
