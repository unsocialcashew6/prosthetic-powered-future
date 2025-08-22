import React from 'react'

export default function Contact() {
  return (
    <>
      {/* Contact Section */}
            <section className="gradient_section_revers text-white pb-16">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center space-y-8 md:space-y-0">
                    <div className="w-full ml-16">
                        <p className="w-4/5  text-3xl font-normal font-primary text-white mb-4">
                            ХОТИТЕ ПОМОЧЬ ПРОЕКТУ ИЛИ ДАТЬ СОВЕТ?
                        </p>
                        <h2 className="text-7xl w-2/3 font-normal font-primary text-hover mb-4">
                            СВЯЖИТЕСЬ С НАМИ!
                        </h2>
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
    </>
  )
}
