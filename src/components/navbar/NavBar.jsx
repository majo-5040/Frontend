import React from "react";
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">Logo</div>
            <ul className="navbar-link">
                <li><a href="Inicio.jsx">INICIO</a></li>
                <li><a href="Login.jsx">LOGIN</a></li>
                <li><a href="Contacto.jsx">CONTACTOS</a></li>
                <li><a href="Producto.jsx">PRODUCTOS</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;