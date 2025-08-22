import React from "react";
import Footer from "../components/Footer";

export default function Company() {
    return (
        <div>
            {/* News Section */}
            <section className="pt-16 bg-primary h-dvh">
                <div className="container mx-auto px-4">
                    <h2 className="font-second text-4xl md:text-5xl font-bold text-hover mb-8 overflow-visible whitespace-nowrap">
                        КОМПАНИЯ
                    </h2>

                    <div className="flex justify-between">
                        <div className="w-1/2"><p className="text-left font-primary text-base ">ИНФОРМАЦИЯ ОБ ОРГАНИЗАЦИИ</p></div>
                        <div className="w-1/2"><p className="text-left font-primary text-base ml-32">УПРАВЛЕНИЕ</p></div>
                    </div>

                    <div className="flex mt-8">
                        <div className="w-1/2 bg-second rounded-3xl"><p className="px-5 py-10 text-left font-primary text-base ">
                          ООО «АРТЭВО БИОНИКС» (ОГРН 4167893778839)<br/>
                          ИНН 2312330551<br/>
                          КПП 231201001<br/>
                          Юр. адрес: 35000 г. Краснодар, ул. Селезнева 150, кв. 733<br/><br/>
                          Деятельность осуществляется при грантовой и<br/>
                          информационной поддержке Фонда содействия<br/>
                          развитию малых форм предприятий в<br/>
                          научно-технической сфере и Лаборатории робототехники и<br/>
                          мехатроники Кубанского государственного университета
                          </p></div>
                        <div className="ml-8 w-1/4 bg-second rounded-3xl"><p className="text-left font-primary text-base ml-2.5"></p></div>
                        <div className="ml-8 w-1/4">
                          <h2 className="font-second text-xl md:text-2xl font-bold text-hover mb-8 overflow-visible whitespace-nowrap">
                            ДРАГУНОВ ДАНИИЛ
                          </h2>
                          <p className="text-left font-primary text-base">
                            Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit.
                            Aenean commodo ligula eget
                            dolor.
                          </p>
                        </div>
                    </div>

                    <div className="flex mt-8 ml-4 mb-8">
                      <h2 className="font-primary text-xl font-bold text-white overflow-visible whitespace-nowrap">
                        Новости разработки
                      </h2>
                    </div>

                    <div className="w-1/4 ml-4 border-2 border-hover"></div>

                    <div className="flex mt-8 ml-4"><p className="text-left font-primary text-xl text-[#828282]">Следите за разработкйой в соцсетях:</p></div>

                    <div className="flex mt-8"><i class="fa-brands fa-vk fa-5x"></i><i class="fa-brands fa-telegram fa-5x"></i></div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
