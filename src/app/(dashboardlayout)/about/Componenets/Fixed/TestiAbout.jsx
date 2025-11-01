



"use client";
import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSlide } from "../../../../(mainlayout)/Redux/counter/testimonialSlice";
import * as Icons from "react-icons/gi"; // Import all Gi icons

export default function TestiAbout() {
    const [comments, setComments] = useState([]);
    const dispatch = useDispatch();
    const currentSlide = useSelector((state) => state.testimonial.currentSlide);
    const containerRef = useRef(null);
    const dragStartX = useRef(0);
    const dragEndX = useRef(0);
    const isDragging = useRef(false);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("http://localhost:4004/testimonials");
            const data = await res.json();
            setComments(data.comments);
        };
        fetchData();
    }, []);

    const handleDragStart = (e) => {
        isDragging.current = true;
        dragStartX.current = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    };

    const handleDragEnd = (e) => {
        if (!isDragging.current) return;
        dragEndX.current = e.type === "touchend" ? e.changedTouches[0].clientX : e.clientX;
        const diff = dragStartX.current - dragEndX.current;

        const maxSlide = Math.ceil(comments.length / 2) - 1;
        if (diff > 50 && currentSlide < maxSlide) {
            dispatch(setSlide(currentSlide + 1));
        } else if (diff < -50 && currentSlide > 0) {
            dispatch(setSlide(currentSlide - 1));
        }

        isDragging.current = false;
    };

    return (
        <div
            className="container mx-auto py-10 overflow-hidden select-none"
            ref={containerRef}
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
        >
            <div
                className="flex translate-x-16 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {Array.from({ length: Math.ceil(comments.length / 2) }).map((_, index) => (
                    <div key={index} className="flex flex-wrap justify-start gap-14 pt-8 w-full shrink-0">
                        {comments.slice(index * 2, index * 2 + 2).map((chumu) => (
                            <TestimonialCard key={chumu.id} chumu={chumu} />
                        ))}
                    </div>
                ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex mt-6 gap-2 justify-center">
                {Array.from({ length: Math.ceil(comments.length / 2) }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => dispatch(setSlide(index))}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                            currentSlide === index ? "bg-green-500 scale-110" : "bg-gray-500"
                        }`}
                    ></button>
                ))}
            </div>
        </div>
    );
}

function TestimonialCard({ chumu }) {
    const IconComponent = Icons[chumu.image] || Icons.GiDoubled;

    return (
        <ul className="list bg-[#161616] w-136 tracking-wide rounded-box shadow-md p-4">
            <li className="list-row">
                <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-4">
                        <img width={36} className="rounded-full" src={chumu.pic} alt={chumu.name} />
                        <div>
                            <div className="text-[15px] text-white font-bold opacity-60">{chumu.name}</div>
                            <div className="text-[14px] font-semibold opacity-60">{chumu.profession}</div>
                        </div>
                    </div>
                    <div className="text-green-600 text-[38px]">
                        <IconComponent />
                    </div>
                </div>
                <p className="list-col-wrap text-[#9A9A9A] text-[15px]">{chumu.text}</p>
            </li>
        </ul>
    );
}
