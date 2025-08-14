import React from "react";

export default function Home() {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-primary text-white relative">
                {/* <div class="overlay"></div> */}
                <div className="container mx-auto pt-16 grid grid-cols-3 grid-rows-1 gap-4">
                    <div className="w-full">
                        <h1 className="font-second text-4xl md:text-5xl font-bold mb-4 overflow-visible whitespace-nowrap">
                            УМНЫЕ ПРОТЕЗЫ,
                        </h1>
                        <h2 className="font-primary text-3xl mb-8">
                            ДОСТУПНЫЕ КАЖДОМУ
                        </h2>
                        <button className="bg-white hover:bg-hover text-black font-primary text-xl py-2 px-4 rounded-4xl">
                            ПОДРОБНЕЕ
                        </button>
                    </div>
                    <div className=" w-full">
                        <div
                            className="absolute inset-0 bg-radial-gradient rounded-lg"
                            style={{
                                background:
                                    "radial-gradient(circle at center bottom, rgba(255, 255, 255, 0.3) 0%, transparent 70%)",
                            }}
                        ></div>
                        <img
                            src="./img/1.png"
                            alt="Грейферная кисть «ФАЛАНГА - 2»"
                            className="w-full h-full"
                        />
                    </div>
                    <div className="w-full grid grid-cols-1 grid-rows-[1fr_auto]">
                        <div className="w-full flex items-center justify-center">
                            <p className="w-full text-4xl font-primary">
                                3D СЕКВЕНЦИЯ
                            </p>
                        </div>
                        <div className="mb-10 flex justify-end items-end">
                            <p className="text-lg text-[#757575] font-primary">
                                Грейферная кисть «ФАЛАНГА - 2»
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="gradient_section text-white py-16">
                <div className="container mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold font-second text-hover">
                        ЦЕЛЬ ПРОЕКТА
                    </h2>
                    <p className="w-2/3 text-3xl my-8 font-primary">
                        Наша цель заключается в улучшении качества жизни людей,
                        нуждающихся в вспомогательных технологиях, путем
                        разработки доступных и функциональных моделей протезов
                        рук.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-card p-6 rounded-4xl shadow-md">
                            <h3 className="text-2xl font-bold mb-4 font-second">
                                01 ФУНКЦИОНАЛЬНОСТЬ
                            </h3>
                            <p className="font-primary text-2xl">
                                Мы считаем, что современный протез — это
                                инструмент. И этот инструмент должен справляться
                                с самыми разными задачами. Грейферная кисть с
                                ЭМГ системой управления обеспечивает уверенный
                                захват, простоту управления и долговечность.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-4xl shadow-md">
                            <h3 className="text-2xl font-bold mb-4 font-second">
                                02 ДОСТУПНОСТЬ
                            </h3>
                            <p className="font-primary text-2xl">
                                Мы стремимся создать протез, который будет
                                доступнее существующих решений. Оптимизация
                                конструкции, выбор материалов и продуманный
                                модульный дизайн — шаги к снижению затрат на
                                производство и обслуживание.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-4xl shadow-md">
                            <h3 className="text-2xl font-bold mb-4 font-second">
                                03 ЭСТЕТИЧНОСТЬ
                            </h3>
                            <p className="font-primary text-2xl">
                                Протез должен соответствовать не только
                                функциональным, но и эстетическим требованиям
                                пользователя. Быстросъемный модуль запястья
                                позволяет переключаться между мощной грейферной
                                кистью и косметической пятипалой рукой.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="bg-gray-900 text-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-8">
                        МЫ — ARTEVO
                    </h2>
                    <p className="text-xl mb-8">
                        Изначально студенческий проект Кубанского
                        государственного университета, в котором объединились
                        люди с разными компетенциями. Команда состоит из
                        междисциплинарной группы, состоящей из студентов и
                        выпускников физико-технического факультета, факультета
                        прикладной математики и других. Нас объединяет одна цель
                        — переосмыслить современные протезы и сделать их
                        доступнее.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-gray-800 p-6 rounded shadow-md">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member"
                                className="w-16 h-16 rounded-full mb-4"
                            />
                            <h3 className="text-2xl font-bold mb-2">
                                ДРАГУНОВ ДАНИИЛ
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit. Aenean commodo ligula eget
                                dolor.
                            </p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded shadow-md">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member"
                                className="w-16 h-16 rounded-full mb-4"
                            />
                            <h3 className="text-2xl font-bold mb-2">
                                АНДРЕЙ ИВАНИСОВ
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit. Aenean commodo ligula eget
                                dolor.
                            </p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded shadow-md">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member"
                                className="w-16 h-16 rounded-full mb-4"
                            />
                            <h3 className="text-2xl font-bold mb-2">
                                ТОПОРКОВ НИКИТА
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit.
                            </p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded shadow-md">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member"
                                className="w-16 h-16 rounded-full mb-4"
                            />
                            <h3 className="text-2xl font-bold mb-2">
                                ГОРБУШИН АРСЕНИЙ
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit.
                            </p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded shadow-md">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member"
                                className="w-16 h-16 rounded-full mb-4"
                            />
                            <h3 className="text-2xl font-bold mb-2">
                                КОНОВАЛОВА СОФЬЯ
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit. Aenean commodo ligula eget
                                dolor.
                            </p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded shadow-md">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member"
                                className="w-16 h-16 rounded-full mb-4"
                            />
                            <h3 className="text-2xl font-bold mb-2">
                                КОНОВАЛОВА АНАСТАСИЯ
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit. Aenean commodo ligula eget
                                dolor.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-black text-white py-16">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center space-y-8 md:space-y-0">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
                            ХОТИТЕ ПОМОЧЬ ПРОЕКТУ ИЛИ ДАТЬ СОВЕТ?
                        </h2>
                        <button className="bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded">
                            КОНТАКТЫ
                        </button>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img
                            src="https://via.placeholder.com/600x600?text=Протез+с+розой"
                            alt="Протез с розой"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div>
                        <img
                            src="https://via.placeholder.com/100x50?text=Artevo+Bionics"
                            alt="Logo"
                            className="h-10"
                        />
                        <p className="text-sm mt-2">2025 Артэво Бионикс</p>
                    </div>
                    <div>
                        <p className="text-sm">
                            ООО «АРТЭВО БИОНИКС» (ОГРН 4167893778839) 35000
                            <br />
                            г. Краснодар, ул. Селезнева 3478
                            <br />
                            +7 (918) 123 45 56
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
