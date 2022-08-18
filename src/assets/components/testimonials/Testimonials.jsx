import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../avatar1.jpg'
import AVATAR2 from '../../avatar2.jpg'
import AVATAR3 from '../../avatar3.jpg'
import AVATAR4 from '../../avatar4.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    img: AVATAR1,
    name: 'Pritty Girl',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quod error minus sit a inventore repudiandae ea facilis nam placeat voluptates dolorum consequuntur, suscipit nesciunt mollitia illo aut repellat.Dolores excepturi est veritatis voluptas quod inventore similique laudantium saepe, repellat dolor.'
  },
  {
    img: AVATAR2,
    name: 'Rohit Singh',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quod error minus sit a inventore repudiandae ea facilis nam placeat voluptates dolorum consequuntur, suscipit nesciunt mollitia illo aut repellat.Dolores excepturi est veritatis voluptas quod inventore similique laudantium saepe, repellat dolor.'
  },
  {
    img: AVATAR3,
    name: 'Atul Rai',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quod error minus sit a inventore repudiandae ea facilis nam placeat voluptates dolorum consequuntur, suscipit nesciunt mollitia illo aut repellat.Dolores excepturi est veritatis voluptas quod inventore similique laudantium saepe, repellat dolor.'
  },
  {
    img: AVATAR4,
    name: 'Salini Singh',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quod error minus sit a inventore repudiandae ea facilis nam placeat voluptates dolorum consequuntur, suscipit nesciunt mollitia illo aut repellat.Dolores excepturi est veritatis voluptas quod inventore similique laudantium saepe, repellat dolor.'
  },
]

const Testimonials = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">'  + "</span>";
    },
  };
  return (
    <section id='testimonials'>
      <h5>Review from Clints</h5>
      <h2>Testimonials</h2>
      <Swiper pagination={pagination} modules={[Pagination]}  spaceBetween={40} slidesPerView={1} className="container testimonials_container mySwiper">
        {
          data.map(({ img, name, review }, count) => {
            return (
              <SwiperSlide key={count} className="testimonial">
                <div className="clint_img">
                  <img src={img} alt="AVATAR1" />
                </div>
                <h5 className="clint_name">{name}</h5>
                <small className="clint_review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
