import menuKopiTubruk from '../../assets/images/menu-kopi-tubruk.png';
import menuLatteKintamani from '../../assets/images/menu-latte-kintamani.png';
import menuColdBrewToraja from '../../assets/images/menu-cold-brew-toraja.png';
import menuEsKopiSusuAren from '../../assets/images/menu-es-kopi-susu-aren.png';

export default function Menu(){
    const menuItems = [
        {
            id: 1,
            name: "Kopi Tubruk",
            price: "Rp. 10.000",
            image: menuKopiTubruk
        },
        {
            id: 2,
            name: "Latte Kintamani",
            price: "Rp. 28.000",
            image: menuLatteKintamani
        },
        {
            id: 3,
            name: "Cold Brew Toraja",
            price: "Rp. 30.000",
            image: menuColdBrewToraja
        },
        {
            id: 4,
            name: "Es Kopi Susu Aren",
            price: "Rp. 12.000",
            image: menuEsKopiSusuAren
        }
    ];

    return (
        <section id="menu">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8 mt-8 mb-12">
                {/* Title */}
                <h2 className="text-center text-[24px] font-bold text-[#FF7158] mb-8">Featured menu</h2>
                
                {/* Menu Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {menuItems.map((item) => (
                        <div key={item.id} className="flex flex-col">
                            {/* Image Container */}
                            <div className="bg-[#FF7158] rounded-lg overflow-hidden mb-4">
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                            
                            {/* Menu Info */}
                            <div className="text-center">
                                <h3 className="text-[18px] text-gray-800 mb-2">
                                    {item.name}
                                </h3>
                                <p className="text-[16px] text-[#FF7158] font-medium">
                                    {item.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}