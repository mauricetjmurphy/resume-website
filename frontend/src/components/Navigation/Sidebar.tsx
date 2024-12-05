import React from 'react';
import '../../styles/main.css';
import { Link } from 'react-scroll';
import { MenuLink } from '../Layout/layoutData';

interface SidebarPropTypes {
    isOpen: boolean;
    toggleSidebar: () => void;
    menuLinks: MenuLink[];
}

function Sidebar({ isOpen, toggleSidebar, menuLinks }: SidebarPropTypes) {
    return (
        <div className={isOpen ? 'sidebar active' : 'sidebar'}>
            <ul className="nav-links">
                {menuLinks.map((el, i) => (
                    <li onClick={toggleSidebar} className="link-item" key={i}>
                        <Link
                            className="link-item"
                            smooth={true}
                            to={`${el.name.toLowerCase()}`}
                            onClick={toggleSidebar}
                        >
                            {el.name}
                        </Link>
                    </li>
                ))}
                <a
                    className="resume"
                    href="/resume/Maurice_Murphy.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Resume
                </a>
            </ul>
        </div>
    );
}

export default Sidebar;
