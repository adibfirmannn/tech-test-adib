import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import banner1 from '../../assets/images/banner1.jpg';
import banner2 from '../../assets/images/banner2.jpg';
import banner3 from '../../assets/images/banner3.jpg';
import iconCoffeShop from '../../assets/images/about-us-coffe-shop.png';
import iconMission from '../../assets/images/about-us-mission.png';
import iconCollaboration from '../../assets/images/about-us-collaboration.png';

export default function AboutUs() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const bannerImages = [
        { id: 1, src: banner1, alt: "Coffee Shop 1" },
        { id: 2, src: banner2, alt: "Coffee Shop 2" },
        { id: 3, src: banner3, alt: "Coffee Shop 3" }
    ];

    // slide secara otomatis
    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
        }, 5000); 
        return () => clearInterval(slideInterval);
    }, [bannerImages.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
    };

    const goToNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    };

    const aboutInfo = [
        {
            id: 1,
            icon: iconCoffeShop,
            alt: "Coffee Shop",
            text: "Berdiri sejak 2020 di Bandung, Kopi Nusantara hadir sebagai kedai kopi lokal yang mengusung konsep kopi asli Indonesia. Kami menggunakan biji kopi pilihan dari Gayo, Toraja, dan Kintamani, diproses secara manual brew untuk menjaga cita rasa."
        },
        {
            id: 2,
            icon: iconMission,
            alt: "Mission",
            text: "Misi kami adalah mengenalkan kekayaan kopi nusantara ke khalayak luas dengan menghadirkan suasana yang nyaman dan harga yang terjangkau. Kami percaya bahwa secangkir kopi bukan sekadar minuman, melainkan pengalaman rasa dan budaya."
        },
        {
            id: 3,
            icon: iconCollaboration,
            alt: "Collaboration",
            text: "Selain menyajikan kopi, kami juga aktif berkolaborasi dengan petani lokal untuk menjaga keberlanjutan produksi dan kualitas kopi Indonesia. Setiap biji kopi yang kami sajikan memiliki cerita, dan kami ingin setiap pelanggan bisa merasakannya dalam setiap tegukan."
        }
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 mt-8 mb-12">
            {/* Banner Slider */}
            <div className="relative rounded-lg overflow-hidden mb-8 group">
                {/* Slider Container */}
                <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96">
                    {bannerImages.map((banner, index) => (
                        <div
                            key={banner.id}
                            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                                index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            <img 
                                src={banner.src} 
                                alt={banner.alt} 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={goToPrevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                    onClick={goToNextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {bannerImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentSlide 
                                    ? 'bg-white scale-110' 
                                    : 'bg-white/50 hover:bg-white/80'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
            
            <section id="about">
                {/* Title */}
                <h2 className="text-center text-[24px] font-bold text-[#FF7158] mb-8">
                    About Us
                </h2>
                
                {/* Info Rows */}
                <div className="space-y-6">
                    {aboutInfo.map((info, index) => (
                        <div 
                            key={info.id} 
                            className={`flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 ${
                                index !== aboutInfo.length - 1 ? 'mb-6' : ''
                            }`}
                        >
                            {/* Icon Container */}
                            <div className="bg-[#FF7158] rounded-full flex items-center justify-center w-[100px] h-[100px] flex-shrink-0">
                                <img 
                                    src={info.icon} 
                                    alt={info.alt} 
                                    className="w-1/2 h-1/2 object-contain" 
                                />
                            </div>
                            
                            {/* Text Content */}
                            <p className="text-[18px] text-gray-700 text-center sm:text-left leading-relaxed">
                                {info.text}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}