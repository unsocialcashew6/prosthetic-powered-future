import React from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function About() {
    return (
        <div>
            {/* First Section - 3D Секвенция */}
            <section className="relative bg-primary py-16">
                <div className="container mx-auto px-4 relative">
                    {/* Центральная картинка */}
                    <div className="flex justify-center relative">
                        <img
                            src="./img/1.png"
                            alt="Рука"
                            className="w-1/3 relative z-10"
                        />

                        {/* Линия + Блок 01 (слева) */}
                        <div className="absolute left-0 bottom-1/6 w-1/3">
                            <div className="flex items-start">
                                <span className="bg-[#cccccc] text-black w-30 h-10 rounded-md flex items-center justify-center font-normal font-primary mr-3 text-2xl">
                                    01
                                </span>
                                <div>
                                    <h3 className="text-hover font-normal font-primary text-2xl">
                                        ГРЕЙФЕРНАЯ КИСТЬ
                                    </h3>
                                    <p className="text-base mt-1 font-primary text-gray-300 w-2/3">
                                        Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit. Aenean commodo ligula
                                        eget dolor. Aenean massa. Cum sociis
                                        natoque penatibus et magnis dis
                                        parturient montes, nascetur ridiculus
                                        mus
                                    </p>
                                    <p className="text-base font-primary mt-2 text-gray-300">
                                        Donec quam felis, ultricies nec,
                                        pellentesque eu, pretium quis, sem.
                                    </p>
                                </div>
                            </div>
                            {/* Линия */}
                            <div className="z-20 absolute left-75 -top-25 w-2/3 border-t border-[#cccccc] -rotate-35"></div>
                        </div>

                        {/* Линия + Блок 02 (справа) */}
                        <div className="absolute right-0 top-1/6 w-1/3">
                            <div className="flex items-start">
                                <span className="bg-[#cccccc] text-black w-30 h-10 rounded-md flex items-center justify-center font-normal font-primary mr-3 text-2xl">
                                    02
                                </span>
                                <div>
                                    <h3 className="text-hover font-normal font-primary text-2xl">
                                        БЫСТРОСЪЕМНОЕ ЗАПЯСТЬЕ
                                    </h3>
                                    <p className="text-base mt-1 font-primary text-gray-300 w-2/3">
                                        Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit. Aenean commodo ligula
                                        eget dolor. Aenean massa. Cum sociis
                                        natoque penatibus et magnis dis
                                        parturient montes, nascetur ridiculus
                                        mus.
                                    </p>
                                </div>
                            </div>
                            {/* Линия */}
                            <div className="z-20 absolute -left-50 top-40 w-2/4 border-t border-[#cccccc] -rotate-55 "></div>
                        </div>

                        {/* Линия + Блок 03 (снизу) */}
                        <div className="absolute right-0 w-1/3 bottom-25">
                            {/* Линия */}
                            <div className="z-20 absolute -left-40 top-25 w-1/3 border-t border-[#cccccc] -rotate-35 "></div>

                            <div className="flex items-start">
                                <span className="bg-[#cccccc] text-black w-30 h-10 rounded-md flex items-center justify-center font-normal font-primary mr-3 text-2xl">
                                    03
                                </span>
                                <div>
                                    <h3 className="text-hover font-normal font-primary text-2xl">
                                        ЭМГ СИСТЕМА УПРАВЛЕНИЯ
                                    </h3>
                                    <p className="text-base mt-1 font-primary text-gray-300 w-2/3">
                                        Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit. Aenean commodo ligula
                                        eget dolor. Aenean massa. Cum sociis
                                        natoque penatibus et magnis dis
                                        parturient montes, nascetur ridiculus
                                        mus.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Заголовок снизу */}
                <div className="text-left absolute top-2/4 right-1/4">
                    <p className="w-full text-3xl font-primary">3D СЕКВЕНЦИЯ</p>
                </div>
            </section>

            {/* Second Section - Cosmetic Hand */}
            <section className="bg-second py-20 relative">
                <div className="container mx-auto px-4 relative">
                    {/* Центральная картинка */}
                    <div className="flex justify-center relative">
                        <img
                            src="./img/4.png"
                            alt="Рука"
                            className="w-1/3 relative z-10"
                        />

                        {/* Линия + Блок 01 (слева) */}
                        <div className="absolute left-0 top-1/4 w-1/3">
                            <div className="flex items-start">
                                <span className="bg-[#cccccc] text-black w-30 h-10 rounded-md flex items-center justify-center font-normal font-primary mr-3 text-2xl">
                                    01
                                </span>
                                <div>
                                    <h3 className="text-hover font-normal font-primary text-2xl">
                                        КОСМЕТИЧЕСКАЯ КИСТЬ
                                    </h3>
                                    <p className="text-base mt-1 font-primary text-gray-300 w-2/3">
                                        Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit. Aenean commodo ligula
                                        eget dolor. Aenean massa. Cum sociis
                                        natoque penatibus et magnis dis
                                        parturient montes, nascetur ridiculus
                                        mus
                                    </p>
                                    <p className="text-base font-primary mt-2 text-gray-300">
                                        Donec quam felis, ultricies nec,
                                        pellentesque eu, pretium quis, sem.
                                    </p>
                                </div>
                            </div>
                            {/* Линия */}
                            <div className="z-20 absolute left-75 top-25 w-2/3 border-t border-[#cccccc] rotate-15"></div>
                        </div>

                        {/* Линия + Блок 02 (справа) */}
                        <div className="absolute right-0 top-1/3 w-1/3">
                            <div className="flex items-start">
                                <span className="bg-[#cccccc] text-black w-30 h-10 rounded-md flex items-center justify-center font-normal font-primary mr-3 text-2xl">
                                    02
                                </span>
                                <div>
                                    <h3 className="text-hover font-normal font-primary text-2xl">
                                        БЫСТРОСЪЕМНОЕ ЗАПЯСТЬЕ
                                    </h3>
                                    <p className="text-base mt-1 font-primary text-gray-300 w-2/3">
                                        Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit. Aenean commodo ligula
                                        eget dolor. Aenean massa. Cum sociis
                                        natoque penatibus et magnis dis
                                        parturient montes, nascetur ridiculus
                                        mus.
                                    </p>
                                </div>
                            </div>
                            {/* Линия */}
                            <div className="z-20 absolute -left-45 top-40 w-2/4 border-t border-[#cccccc] -rotate-65 "></div>
                        </div>

                        {/* Линия + Блок 03 (снизу) */}
                        <div className="absolute right-0 w-1/3 bottom-0">
                            {/* Линия */}
                            <div className="z-20 absolute -left-40 top-25 w-1/3 border-t border-[#cccccc] -rotate-35 "></div>

                            <div className="flex items-start">
                                <span className="bg-[#cccccc] text-black w-30 h-10 rounded-md flex items-center justify-center font-normal font-primary mr-3 text-2xl">
                                    03
                                </span>
                                <div>
                                    <h3 className="text-hover font-normal font-primary text-2xl">
                                        РОТАЦИЯ ЗАПЯСТЬЯ НА 360
                                    </h3>
                                    <p className="text-base mt-1 font-primary text-gray-300 w-2/3">
                                        Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit. Aenean commodo ligula
                                        eget dolor. Aenean massa. Cum sociis
                                        natoque penatibus et magnis dis
                                        parturient montes, nascetur ridiculus
                                        mus.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Заголовок снизу */}
                <div className="text-left absolute top-2/3 left-1/4">
                    <p className="w-full text-3xl font-primary">3D СЕКВЕНЦИЯ</p>
                </div>
            </section>

            {/* Flexibility Section */}
            <section className="bg-black py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-6xl font-bold text-hover font-second text-center mb-4">
                        ГИБКОСТЬ БЕЗ КОМПРОМИССОВ
                    </h2>
                    <p className="text-3xl text-left mb-8 ml-18 font-primary">
                        Адаптивный функционал
                    </p>
                </div>
            </section>

            {/* Photo Section */}
            <section className="bg-black flex flex-row justify-center w-full min-h-100 -space-x-33">
                <div className="bg-second p-6 rounded shadow-md w-2/3 clip-path-1">
                    <p className="text-center">ФОТО ПОЛЬЗОВАТЕЛЯ 1</p>
                </div>
                <div className="bg-second p-6 rounded shadow-md w-2/3 clip-path-2">
                    <p className="text-center">ФОТО ПОЛЬЗОВАТЕЛЯ 2</p>
                </div>
                <div className="bg-second p-6 rounded shadow-md w-2/3 clip-path-3">
                    <p className="text-center">ФОТО ПОЛЬЗОВАТЕЛЯ 3</p>
                </div>
            </section>

            {/* User Testimonials */}
            <section className="bg-black py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex items-start">
                            <div className="text-white text-2xl mr-2">▲</div>
                            <p className="font-primary text-3xl">
                                С другой стороны постоянное
                                информационно-пропагандистское обеспечение нашей
                                деятельности представляет собой интересный
                                эксперимент проверки соответствующий условий
                                активизации.
                            </p>
                        </div>
                        <div className="flex items-start">
                            <div className="text-white text-2xl mr-2">▲</div>
                            <p className="font-primary text-3xl">
                                С другой стороны постоянное
                                информационно-пропагандистское обеспечение нашей
                                деятельности представляет собой интересный
                                эксперимент проверки соответствующий условий
                                активизации.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="bg-second py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8 flex justify-center">
                        <p className="text-3xl font-primary text-left font-bold w-3/5">
                            ВИДЕО НАРЕЗКА С ЭМГ ПРОГРАММИРОВАНИЕМ И ПЛАТАМИ
                            НАШЕЙ РАЗРАБОТКИ
                        </p>
                    </div>

                    <p className="font-primary text-left text-2xl w-2/5">
                        Управляется ARTEVO MB1 - нашим собственным
                        интеллектуальным модулем управления.
                    </p>
                </div>
            </section>
            <Contact />

            <Footer />
        </div>
    );
}
