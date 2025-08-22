import React from "react";
import Footer from "../components/Footer";

export default function Contacts() {
    return (
        <div>
            {/* News Section */}
            <section className="pt-16 bg-primary h-dvh">
                <div className="container mx-auto px-4 flex justify-between">
                    <div className="w-1/2">
                        <h2 className="font-second text-4xl md:text-5xl font-bold text-hover mb-8 overflow-visible whitespace-nowrap">
                            НАШИ КОНТАКТЫ
                        </h2>

                        <div className="flex mt-8">
                            <div className="w-full bg-second rounded-3xl">
                                <ul className="px-5 py-10 space-y-10">
                                    <li className="text-left font-primary text-2xl">
                                        <i class="fa-solid fa-location-dot fa-xl pr-15"></i>
                                        35075 г. Краснодар, ул. Селезнева 150
                                    </li>
                                    <li className="text-left font-primary text-2xl">
                                        <i class="fa-solid fa-envelope fa-xl pr-15"></i>
                                        artevorteam@gmail.com
                                    </li>
                                    <li className="text-left font-primary text-2xl">
                                        <i class="fa-solid fa-phone fa-xl pr-15"></i>
                                        +7 (918) 630-07-68
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex mt-8 ml-4 mb-8">
                            <h2 className="font-primary text-xl font-bold text-white overflow-visible whitespace-nowrap">
                                Новости разработки
                            </h2>
                        </div>

                        <div className="w-1/4 ml-4 border-2 border-hover"></div>

                        <div className="flex mt-8 ml-4">
                            <p className="text-left font-primary text-xl text-[#828282]">
                                Следите за разработкйой в соцсетях:
                            </p>
                        </div>

                        <div className="flex mt-8">
                            <i class="fa-brands fa-vk fa-5x"></i>
                            <i class="fa-brands fa-telegram fa-5x"></i>
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-col">
                        <div className="container mx-auto items-center space-y-8 md:space-y-0">
                            <div className="mx-4 w-full border-1 border-[#a1a19f]"></div>
                        </div>
                        <img
                            src="./img/1.png"
                            alt="Грейферная кисть «ФАЛАНГА - 2»"
                            className="w-2/3 rotate-180 self-center"
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
