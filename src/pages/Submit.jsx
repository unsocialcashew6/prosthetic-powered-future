import React from "react";
import Footer from "../components/Footer";

export default function Submit() {
    return (
        <div>
            <section className="pt-16 bg-primary h-dvh">
                <div className="container mx-auto px-4 flex flex-col">
                    <h3 className="font-primary text-2xl font-normal text-white mb-32">
                        ХОТИТЕ ПРИНЯТЬ УЧАСТИЕ В ТЕСТИРОВАНИИ ПРОТОТИПОВ?
                        <br />
                        <span className="font-primary text-2xl font-normal text-hover mb-8">
                            ОСТАВЬТЕ ЗАЯВКУ!
                        </span>
                    </h3>
                    <div className="bg-second w-2/3 h-full self-center px-10 py-10 shadow-2xl rounded-4xl">
                        <div className="flex flex-row justify-center space-x-25 space-y-4">
                            {/* Отступ между полями */}
                            <div className="w-1/2">
                                <label
                                    htmlFor="first-name"
                                    className="block text-base font-medium font-primary mb-1"
                                >
                                    Имя
                                </label>
                                <input
                                    type="text"
                                    id="first-name"
                                    name="first-name"
                                    placeholder="Введите здесь свое имя"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-hover font-primary"
                                />
                            </div>
                            <div className="w-1/2">
                                <label
                                    htmlFor="last-name"
                                    className="block text-base font-medium font-primary mb-1"
                                >
                                    Фамилия
                                </label>
                                <input
                                    type="text"
                                    id="last-name"
                                    name="last-name"
                                    placeholder="Введите здесь свою фамилию"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-hover font-primary"
                                />
                            </div>
                        </div>
                        <div className="flex flex-row justify-center mb-4">
                            {/* Отступ между полями */}
                            <div className="w-full">
                                <label
                                    htmlFor="first-name"
                                    className="block text-base font-primary font-medium mb-1"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Введите здесь свой Email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-hover font-primary"
                                />
                            </div>
                        </div>
                        <div className="flex flex-row justify-center mb-4">
                            {/* Отступ между полями */}
                            <div className="w-full">
                                <label
                                    htmlFor="first-name"
                                    className="block text-base font-primary font-medium mb-1"
                                >
                                    Вам требуется протез?
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Да (ампутация или дисмелия) / Нет, но я знаю кому требуется"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-hover font-primary"
                                />
                            </div>
                        </div>
                        <div className="flex flex-row justify-center mb-4">
                            {/* Отступ между полями */}
                            <div className="w-full">
                                <label
                                    htmlFor="first-name"
                                    className="block text-base font-primary font-medium mb-1"
                                >
                                    Выберите уровень ампутации*
                                </label>
                                <button className="border border-gray-300 rounded-bl-md rounded-tl-md w-1/2 py-2 hover:border-hover focus:border-hover font-primary">Предплечье</button>
                                <button className="border border-gray-300 rounded-br-md rounded-tr-md w-1/2 py-2 hover:border-hover focus:border-hover font-primary">Плечо</button>
                            </div>
                        </div>
                        <button type="submit" className="w-full bg-white text-black font-primary py-2 rounded-md hover:bg-hover">Отправить</button>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
