import { NavLink } from "react-router-dom";

import circlesImg from "../assets/circles.png";

const Sidebar = () => (
    <div className="sidebar-container">
        <div className="sidebar-content">
            <h1 className="sidebar-title">Dona<br/>Maria</h1>
            <div className="sidebar-links">
                <NavLink to="/" className={({ isActive }) => (
                    isActive ? "sidebar-link sidebar-active" : "sidebar-link"
                )}>
                    Cadastro
                </NavLink>
                <NavLink to="/vacancies" className={({ isActive }) => (
                    isActive ? "sidebar-link sidebar-active" : "sidebar-link"
                )}>
                    Vagas Abertas
                </NavLink>
            </div>
        </div>
        <img
            src={circlesImg}
            alt="decorative circles"
            className="sidebar-decorative-circles"
        />
    </div>
)

export default Sidebar;
