import React from "react";
import { NavLink } from "react-router-dom";
import classNames from 'classnames';
import './navbar.scss';

export const Navbar: React.FC = () => {
    return (
        <nav className="navbar is-light px-3">
            <div className="navbar-brand">
                <NavLink
                    to={'/page-1'}
                    end
                    className={({ isActive }) =>
                        classNames('navbar-item', {
                            'is-active': isActive
                    })
                    }
                >
                    Page 1
                </NavLink>
                <NavLink
                    to={'/page-2'}
                    end
                    className={({ isActive }) =>
                        classNames('navbar-item', {
                            'is-active': isActive
                    })
                    }
                >
                    Page 2
                </NavLink>
                <NavLink
                    to={'/page-3'}
                    end
                    className={({ isActive }) =>
                        classNames('navbar-item', {
                            'is-active': isActive
                    })
                    }
                >
                    Page 3
                </NavLink>
                <NavLink
                    to={'/page-4'}
                    end
                    className={({ isActive }) =>
                        classNames('navbar-item', {
                            'is-active': isActive
                    })
                    }
                >
                    Page 4
                </NavLink>
                <NavLink
                    to={'/page-5'}
                    end
                    className={({ isActive }) =>
                        classNames('navbar-item', {
                            'is-active': isActive
                    })
                    }
                >
                    Page 5
                </NavLink>
            </div>
        </nav>
    );
};