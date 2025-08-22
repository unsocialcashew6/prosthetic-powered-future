import React from "react";
import Footer from "../components/Footer";

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
                        <button className="bg-white hover:bg-hover text-black text-xl font-primary font-[600] py-2 px-4 rounded-4xl">
                            ПОДРОБНЕЕ
                        </button>
                    </div>
                    <div className="w-full">
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
                        <div className="bg-second p-6 rounded-4xl shadow-md">
                            <h3 className="text-2xl font-bold mb-4 font-second">
                                <span className="text-4xl">01</span>{" "}
                                ФУНКЦИОНАЛЬНОСТЬ
                            </h3>
                            <p className="font-primary text-xl mt-5 px-2.5">
                                Мы считаем, что современный протез — это
                                инструмент. И этот инструмент должен справляться
                                с самыми разными задачами. Грейферная кисть с
                                ЭМГ системой управления обеспечивает уверенный
                                захват, простоту управления и долговечность.
                            </p>
                        </div>
                        <div className="bg-second p-6 rounded-4xl shadow-md">
                            <h3 className="text-2xl font-bold mb-4 font-second">
                                <span className="text-4xl">02</span> ДОСТУПНОСТЬ
                            </h3>
                            <p className="font-primary text-xl px-2.5">
                                Мы стремимся создать протез, который будет
                                доступнее существующих решений. Оптимизация
                                конструкции, выбор материалов и продуманный
                                модульный дизайн — шаги к снижению затрат на
                                производство и обслуживание.
                            </p>
                        </div>
                        <div className="bg-second p-6 rounded-4xl shadow-md">
                            <h3 className="text-2xl font-bold mb-4 font-second">
                                <span className="text-4xl">03</span>{" "}
                                ЭСТЕТИЧНОСТЬ
                            </h3>
                            <p className="font-primary text-xl px-2.5">
                                Протез должен соответствовать не только
                                функциональным, но и эстетическим требованиям
                                пользователя. Быстросъемный модуль запястья
                                позволяет переключаться между мощной грейферной
                                кистью и косметической пятипалой рукой.
                            </p>
                        </div>
                    </div>
                    <h2 className="mt-10 text-4xl md:text-5xl font-bold font-second text-hover">
                        МЫ — ARTEVO
                    </h2>
                </div>
            </section>

            {/* Team Photo */}
            <section className="bg-second text-white py-16">
                <div className="container mx-auto flex justify-center content-center">
                    <h2 className="text-xl font-normal font-primary text-white">
                        ОБЩЕЕ ФОТО КОМАНДЫ
                    </h2>
                </div>
            </section>

            {/* Team Section */}
            <section className="bg-primary text-white py-16">
                <div className="container mx-auto px-4">
                    <p className="px-16 w-full text-xl mt-8 font-primary">
                        Изначально студенческий проект Кубанского
                        государственного университета, в котором объединились
                        люди с разными компетенциями. Команда состоит из
                        междисциплинарной группы, состоящей из студентов и
                        выпускников физико-технического факультета, факультета
                        прикладной математики и других. Нас объединяет одна цель
                        — переосмыслить современные протезы и сделать их
                        доступнее.
                    </p>

                    <div className="w-full border-1 border-[#a1a19f] my-16"></div>

                    <div className="grid grid-cols-2 gap-8">
                        <div className="flex flex-row p-6">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member"
                                className="w-16 h-16 rounded-full mb-4"
                            />
                            <div className="ml-5">
                                <h3 className="text-3xl font-bold font-second text-hover mb-2">
                                    ДРАГУНОВ ДАНИИЛ
                                </h3>
                                <p className="mt-5">
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit. Aenean commodo ligula eget
                                    dolor.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row p-6">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member"
                                className="w-16 h-16 rounded-full mb-4"
                            />
                            <div className="ml-5">
                                <h3 className="text-3xl font-bold font-second text-hover mb-2">
                                    АНДРЕЙ ИВАНИСОВ
                                </h3>
                                <p className="mt-5">
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit. Aenean commodo ligula eget
                                    dolor.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row p-6">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member"
                                className="w-16 h-16 rounded-full mb-4"
                            />
                            <div className="ml-5">
                                <h3 className="text-3xl font-bold font-second text-hover mb-2">
                                    ТОПОРКОВ НИКИТА
                                </h3>
                                <p className="mt-5">
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit. Aenean commodo ligula eget
                                    dolor.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row p-6">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member"
                                className="w-16 h-16 rounded-full mb-4"
                            />
                            <div className="ml-5">
                                <h3 className="text-3xl font-bold font-second text-hover mb-2">
                                    ГОРБУШИН АРСЕНИЙ
                                </h3>
                                <p className="mt-5">
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit. Aenean commodo ligula eget
                                    dolor.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row p-6">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member"
                                className="w-16 h-16 rounded-full mb-4"
                            />
                            <div className="ml-5">
                                <h3 className="text-3xl font-bold font-second text-hover mb-2">
                                    КОНОВАЛОВА СОФЬЯ
                                </h3>
                                <p className="mt-5">
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit. Aenean commodo ligula eget
                                    dolor.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row p-6">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member"
                                className="w-16 h-16 rounded-full mb-4"
                            />
                            <div className="ml-5">
                                <h3 className="text-3xl font-bold font-second text-hover mb-2">
                                    КОНОВАЛОВА АНАСТАСИЯ
                                </h3>
                                <p className="mt-5">
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit. Aenean commodo ligula eget
                                    dolor.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="gradient_section_revers text-white py-16">
              <div className="container mx-auto items-center space-y-8 md:space-y-0">
                <div className="mx-4 w-full border-1 border-[#a1a19f]"></div>
              </div>
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center space-y-8 md:space-y-0">
                    <div className="w-full ml-16">
                        <p className="w-4/5  text-3xl font-normal font-primary text-white mb-4">
                            ХОТИТЕ ПОМОЧЬ ПРОЕКТУ ИЛИ ДАТЬ СОВЕТ?
                        </p>
                        <h2 className="text-7xl w-2/3 font-normal font-primary text-hover mb-4">СВЯЖИТЕСЬ С НАМИ!</h2>
                        <button className="bg-white hover:bg-hover text-black text-xl font-primary font-[600] w-2/4 py-2 px-4 rounded-4xl">
                            КОНТАКТЫ
                        </button>
                    </div>
                    <div className="w-full flex justify-center">
                        <img
                            src="./img/1.png"
                            alt="Грейферная кисть «ФАЛАНГА - 2»"
                            className="w-2/3 rotate-180"
                        />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}
