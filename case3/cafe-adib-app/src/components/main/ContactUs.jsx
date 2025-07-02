import iconHome from '../../assets/images/contact-us-home.png';
import iconPhone from '../../assets/images/contact-us-telp.png';
import iconInstagram from '../../assets/images/contact-us-instagram.png';

export default function ContactUs(){
    const contactInfo = [
        {
            id: 1,
            icon: iconHome,
            text: "Jl. Riau No.21, Bandung"
        },
        {
            id: 2,
            icon: iconPhone,
            text: "(+62) 8212499O753"
        },
        {
            id: 3,
            icon: iconInstagram,
            text: "adibfirmannn"
        }
    ];

    return (
        <section id="contact">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8 mt-8 mb-12">
                {/* Title */}
                <h2 className="text-center text-[24px] font-bold text-[#FF7158] mb-8">Contact Us</h2>
                
                {/* Description */}
                <p className="text-[18px] text-center md:text-left mb-8 max-w-6xl">
                    Kami senang mendengar dari Anda! Jika Anda memiliki pertanyaan, ingin memesan kopi, atau sekadar menyapa, silakan hubungi kami melalui salah satu kontak di bawah ini.
                </p>
                
                {/* Contact Information */}
                <div className="flex flex-col space-y-6 max-w-2xl mx-auto md:mx-0">
                    {contactInfo.map((contact) => (
                        <div key={contact.id} className="flex items-center space-x-4">
                            {/* Icon Container */}
                            <div className="bg-[#FF7158] rounded-full flex items-center justify-center w-16 h-16 flex-shrink-0">
                                <img src={contact.icon} alt="Contact Icon" className="w-8 h-8 object-contain" />
                            </div>
                            
                            {/* Contact Text */}
                            <p className="text-[18px] font-semibold text-gray-800">
                                {contact.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}