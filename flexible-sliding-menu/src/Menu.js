import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MenuContext } from "react-flexible-sliding-menu";
import { HomeSVG, DashboardSVG, GallerySVG } from "./svgs";

function Menu() {
    const { closeMenu } = useContext(MenuContext);
    return (
        <div className="Menu">
            <h1>Menu</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
                eligendi provident.
            </p>

            <nav onClick={closeMenu}>
                <NavLink exact to="/">
                    <HomeSVG />
                    <span>Home</span>
                </NavLink>
                <NavLink to="dashboard">
                    <DashboardSVG />
                    <span>Dashboard</span>
                </NavLink>
                <NavLink to="gallery">
                    <GallerySVG />
                    <span>Gallery</span>
                </NavLink>
            </nav>
        </div>
    )
}