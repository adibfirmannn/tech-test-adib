import { useState } from 'react';
import coffeIcon from '../../assets/images/icon-coffe.png';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Fungsi untuk smooth scroll ke section tertentu
    const handleScrollToSection = (e, sectionId) => {
        // Mencegah default behavior dari anchor tag
        e.preventDefault(); 
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Tutup mobile menu setelah klik
        setMenuOpen(false);
    };

    return (
        <nav className="w-full flex items-center py-4 px-4 md:px-8 bg-white relative">
            {/* Logo */}
            <div className="flex items-center flex-1">
                <img src={coffeIcon} alt="Coffee Logo" className="h-10 w-10 object-contain" />
            </div>
            {/* Nav Links - Desktop */}
            <div className="hidden md:flex space-x-18 justify-end mr-8">
                <a href="#about" onClick={(e) => handleScrollToSection(e, 'about')} className="text-[16px] text-black hover:text-[#FF7158] transition-colors">About Us</a>
                <a href="#menu" onClick={(e) => handleScrollToSection(e, 'menu')} className="text-[16px] text-black hover:text-[#FF7158] transition-colors">Menu</a>
                <a href="#contact" onClick={(e) => handleScrollToSection(e, 'contact')} className="text-[16px] text-black hover:text-[#FF7158] transition-colors">Contact Us</a>
            </div>
            {/* Sign In Button - Desktop */}
            <div className="hidden md:block">
                <button className="bg-[#29A867] text-white px-6 py-2 rounded-md text-[16px] hover:opacity-90 transition-opacity">Sign In</button>
            </div>
            {/* Hamburger - Mobile */}
            <div className="md:hidden flex items-center">
                <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
                    <span className="text-2xl">&#9776;</span>
                </button>
            </div>
            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 z-50 md:hidden">
                    <a href="#about" className="py-2 text-[16px] text-[#FF7158] hover:text-[#FF7158] w-full text-center" onClick={(e) => handleScrollToSection(e, 'about')}>About Us</a>
                    <a href="#menu" className="py-2 text-[16px] text-black hover:text-[#FF7158] w-full text-center" onClick={(e) => handleScrollToSection(e, 'menu')}>Menu</a>
                    <a href="#contact" className="py-2 text-[16px] text-black hover:text-[#FF7158] w-full text-center" onClick={(e) => handleScrollToSection(e, 'contact')}>Contact Us</a>
                    <a href="#signin" className="py-2 text-[16px] text-black hover:text-[#FF7158] w-full text-center" onClick={(e) => handleScrollToSection(e, 'signin')}>Sign In</a>
                </div>
            )}
        </nav>
    );
}