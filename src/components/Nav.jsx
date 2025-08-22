import { Link, NavLink } from "react-router-dom";

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
                    <NavLink to="/about" className={({ isActive }) =>
                        `hover:text-hover font-primary text-xl ${isActive ? 'pb-2 border-b-2 border-hover' : ''}`
                    }>
                        О ПРОЕКТЕ
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/news" className={({ isActive }) =>
                        `hover:text-hover font-primary text-xl ${isActive ? 'pb-2 border-b-2 border-hover' : ''}`
                    }>
                        НОВОСТИ
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/company" className={({ isActive }) =>
                        `hover:text-hover font-primary text-xl ${isActive ? 'pb-2 border-b-2 border-hover' : ''}`
                    }>
                        КОМПАНИЯ
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contacts" className={({ isActive }) =>
                        `hover:text-hover font-primary text-xl ${isActive ? 'pb-2 border-b-2 border-hover' : ''}`
                    }>
                        КОНТАКТЫ
                    </NavLink>
                </li>
            </ul>

            {/* Кнопка заявки */}
            <NavLink to="/submit" className="bg-white hover:bg-hover text-black text-xl font-primary font-[600] py-2 px-4 rounded-4xl">
                ОСТАВИТЬ ЗАЯВКУ
            </NavLink>
        </nav>
    );
}
