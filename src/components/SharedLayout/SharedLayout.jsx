import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import items from "./items";
import css from './layout.module.css'


export const SharedLayout = () => {
    const elements = items.map(({id, text, link}) => <li key={id}>
        <NavLink className={css.link} to={link}>
            {text}
        </NavLink>
    </li>)
    return (
        <div>
            <ul className={css.menu}>
                {elements}
            </ul>
            <Suspense fallback={<div>Loading...</div>}>
                <main>
                    <Outlet />
                </main>
            </Suspense>
        </div>
    );
};