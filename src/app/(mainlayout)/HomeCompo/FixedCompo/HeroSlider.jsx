


// components/HeroSlider.js
'use client';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


    
export default function HeroSlider() {

    




    


    const slides = [
        {
            image: 'https://news.cnrs.fr/sites/default/files/styles/visuel_principal/public/assets/images/adobestock_290833398_72dpi.jpg',
           
        },
        {
            image: 'https://w0.peakpx.com/wallpaper/128/635/HD-wallpaper-man-silhouette-alone-light-ray-dark-black.jpg',
            
        },
        {
            image: 'https://p0.piqsels.com/preview/929/680/902/adult-art-backlit-backyard.jpg',
            
        },
    ];

    return (
       <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            interval={4000}
            showStatus={false}
        >
            {slides.map((slide, index) => (
                <div key={index} className="relative">
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        width={1280}
                        height={500}
                        className="object-cover w-full h-[500px]"
                    />
                    
                </div>
            ))}
        </Carousel>
    );
}

