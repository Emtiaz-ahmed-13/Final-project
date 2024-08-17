import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch("reviews.json")
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <section>
            <SectionTitle
            subheading="What our client Say" 
            heading="Testimonials">
            </SectionTitle>
            
        </section>
    );
};

export default Testimonials;