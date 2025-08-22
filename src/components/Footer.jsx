import React from 'react'

export default function Footer() {
  return (
    <>
      {/* Footer */}
            <footer className="bg-second text-white py-8">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div>
                        <img
                            src="https://via.placeholder.com/100x50?text=Artevo+Bionics"
                            alt="Logo"
                            className="h-10"
                        />
                        <p className="text-sm mt-2 font-primary text-white">
                            2025 Артэво Бионикс
                        </p>
                    </div>
                    <div>
                        <p className="text-sm font-primary text-white">
                            ООО «АРТЭВО БИОНИКС» (ОГРН 4167893778839) 35000
                            <br />
                            г. Краснодар, ул. Селезнева 3478
                            <br />
                            +7 (918) 123 45 56
                        </p>
                    </div>
                </div>
            </footer>
    </>
  )
}
