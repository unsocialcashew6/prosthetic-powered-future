import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="flex justify-between items-center py-8 px-16 bg-primary">
            {/* Логотип с ссылкой на главную страницу */}
            <Link
                to="/"
                className="text-white hover:text-hover font-bold"
            >
                <img
                    src="https://via.placeholder.com/100x50?text=Artevo+Bionics"
                    alt="Logo ARTEVO BIONICS"
                    className="h-8 inline-block"
                />
            </Link>

            {/* Меню */}
            <ul className="flex space-x-16 text-white">
                <li>
                    <Link to="/about" className="hover:text-hover font-primary text-xl">
                        О ПРОЕКТЕ
                    </Link>
                </li>
                <li>
                    <Link to="/news" className="hover:text-hover font-primary text-xl">
                        НОВОСТИ
                    </Link>
                </li>
                <li>
                    <Link to="/company" className="hover:text-hover font-primary text-xl">
                        КОМПАНИЯ
                    </Link>
                </li>
                <li>
                    <Link to="/contacts" className="hover:text-hover font-primary text-xl">
                        КОНТАКТЫ
                    </Link>
                </li>
            </ul>

            {/* Кнопка заявки */}
            <button className="bg-white hover:bg-hover text-black text-xl font-primary font-[600] py-2 px-4 rounded-4xl">
                ОСТАВИТЬ ЗАЯВКУ
            </button>
        </nav>
    );
}
