import React from "react";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function News() {
    return (
        <div>
            {/* News Section */}
            <section className="pt-16 bg-primary">
                <div className="container mx-auto px-4">
                    <h2 className="font-second text-4xl md:text-5xl font-bold text-hover mb-32 overflow-visible whitespace-nowrap">
                        НОВОСТИ ПРОЕКТА
                    </h2>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-full bg-hover"></div>

                        {/* News items */}
                        <div className="space-y-12">

                            {/* First news item */}
                            <div className="flex justify-between gap-25">
                                <div className="w-1/2 flex items-center justify-end">
                                    <div className="p-6">
                                        <p className="text-xl text-right text-hover font-primary">
                                            9 ДЕКАБРЯ 2022
                                        </p>
                                        <p className="text-base text-right text-white font-primary">
                                            Демонстрация первого прототипа
                                            <br />«Фаланга - 1»
                                        </p>
                                    </div>
                                </div>
                                <div className="w-1/2 flex justify-start">
                                    <div className="p-6 w-128 h-96">
                                      <div className="bg-white h-full rounded-4xl shadow-md flex justify-center">
                                          
                                      </div>
                                    </div>
                                </div>
                            </div>

                            {/* Second news item */}
                            <div className="flex justify-between gap-25">
                                <div className="w-1/2 flex justify-end">
                                    <div className="p-6 w-128 h-96 ">
                                      <div className="bg-white h-full rounded-4xl shadow-md flex justify-center">
                                          
                                      </div>
                                    </div>
                                </div>
                                <div className="w-1/2 flex items-center">
                                    <div className="p-6">
                                        <p className="text-xl text-left text-hover font-primary">
                                            28 ноября 2023
                                        </p>
                                        <p className="text-base text-left text-white font-primary">
                                            Участие в выставке на III Конгрессе<br />молодых учёных в Сириусе
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Third news item */}
                            <div className="flex justify-between gap-25">
                                <div className="w-1/2 flex justify-end items-center">
                                    <div className="p-6">
                                        <p className="text-xl text-right text-hover font-primary">
                                            7 октября 2024
                                        </p>
                                        <p className="text-base text-right text-white font-primary">
                                            Создание прототипа второй ревизии<br/>
                                            устройства, участие в выставке «БИОПРОМ»<br/>в г. Геленджик
                                        </p>
                                    </div>
                                </div>
                                <div className="w-1/2 flex justify-start">
                                    <div className="p-6 w-128 h-96">
                                      <div className="bg-white h-full rounded-4xl shadow-md flex justify-center">
                                          
                                      </div>
                                    </div>
                                </div>
                            </div>

                            {/* Fourth news item */}
                            <div className="flex justify-between gap-25">
                                <div className="w-1/2 flex justify-end">
                                    <div className="p-6 w-128 h-96 ">
                                      <div className="bg-white h-full rounded-4xl shadow-md flex justify-center">
                                          
                                      </div>
                                    </div>
                                </div>
                                <div className="w-1/2 flex items-center">
                                    <div className="p-6">
                                        <p className="text-xl text-left text-hover font-primary">
                                            28 ноября 2023
                                        </p>
                                        <p className="text-base text-left text-white font-primary">
                                            Участие в выставке на III Конгрессе<br />молодых учёных в Сириусе
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

              <div className="pt-16 container mx-auto items-center space-y-8 md:space-y-0">
                <div className="mx-4 w-full border-1 border-[#a1a19f]"></div>
              </div>

            </section>

            <Contact />

            <Footer />
        </div>
    );
}
