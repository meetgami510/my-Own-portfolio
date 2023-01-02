import React from 'react'
import './Portfoliyo.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import Sidebar from "../../img/sidebar.png"
import Ecommerce from "../../img/ecommerce.png"
import HOC from "../../img/hoc.png"
import MusicApp from "../../img/musicapp.png"
import 'swiper/css'



function Portfoliyo() {
  return (
        <div className="portfoliyo">
            {/*heading */}
            <span>Recent Projects</span>
            <span>Portfolio</span>

            {/* slider */}
            <Swiper 
            spaceBetween={100}
            slidesPerView={3}
            grabCursor={true}
            className='portfoliyo-slider'
            >
                

                <SwiperSlide>
                    <img src={Sidebar} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ecommerce} alt="" />
                </SwiperSlide>{" "}
                <SwiperSlide>
                    <img src={HOC} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={MusicApp} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
  )
}

export default Portfoliyo
