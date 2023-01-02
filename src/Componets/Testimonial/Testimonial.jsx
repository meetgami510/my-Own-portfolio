import React from 'react'
import './Testimonial.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import profilepic1 from "../../img/profile1.jpg";
import profilepic2 from "../../img/profile2.jpg";
import profilepic3 from "../../img/profile3.jpg";
import profilepic4 from "../../img/profile4.jpg";
import {Pagination} from "swiper"
import 'swiper/css/pagination'
import 'swiper/css'

const Testimonial = () => {
    const client = [
        {
            img:profilepic1,
            review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laudantium aspernatur rerum deserunt vero accusamus mollitia. Dolore, iure quia nemo quasi, ipsam quos doloribus beatae unde asperiores porro placeat aperiam!",
        },
        {
            img:profilepic2,
            review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laudantium aspernatur rerum deserunt vero accusamus mollitia. Dolore, iure quia nemo quasi, ipsam quos doloribus beatae unde asperiores porro placeat aperiam!",
        },
        {
            img:profilepic3,
            review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laudantium aspernatur rerum deserunt vero accusamus mollitia. Dolore, iure quia nemo quasi, ipsam quos doloribus beatae unde asperiores porro placeat aperiam!",
        },
        {
            img:profilepic4,
            review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laudantium aspernatur rerum deserunt vero accusamus mollitia. Dolore, iure quia nemo quasi, ipsam quos doloribus beatae unde asperiores porro placeat aperiam!",
        },
    ]
    return (
        <div className="t-wraper">
            <div className="t-heading">
                <span>Client always get </span>
                <span>Excepational Work</span>
                <span> For me....</span>
                <div className="blur t-blur1" style={{background:"#ABF1FF94"}}></div>
                <div className="blur t-blur2" style={{background:"var(--purple)"}}></div>
            </div>
            {/* slider */}
            <Swiper
            
            modules={[Pagination]}
            slidePerView = {1}
            pagination = {{clickable:true}}
            >
                {
                    client.map((client,index)=>{
                        return(
                            <SwiperSlide key={index}>
                                <div className="testimonial">
                                <img src={client.img} alt="" />
                                <span>{client.review}</span>
                                </div>

                            </SwiperSlide>
                        );
                    })
                }

            </Swiper>
        </div>
    )
}

export default Testimonial
