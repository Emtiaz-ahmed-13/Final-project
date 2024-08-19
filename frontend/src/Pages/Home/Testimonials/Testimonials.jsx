import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5002/reviews")
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return (
        <section>
            <SectionTitle
                subheading="What our client Say" 
                heading="Testimonials"
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {reviews.map(review => (
                    <SwiperSlide key={review._id}>
                        <p className="py-8">{review.details}</p>
                        <h3 className="text-2xl text-orange-400">{review.name}</h3>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;