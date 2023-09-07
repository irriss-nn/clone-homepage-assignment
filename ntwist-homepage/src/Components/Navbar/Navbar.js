import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { BiSolidDownArrow } from 'react-icons/bi';
import './navbar.css';

// Logo component
const Logo = ({ src }) => (
    <div className="logo">
        <Link to={"/"}>
            <img src={src} alt="" width={200} />
        </Link>
    </div>
);

// Dropdown menu component
const Dropdown = ({ show, color }) => (
    show ? (
        <div className="sub-nav position-absolute shadow rounded mt-3">
            <ul>
                <li className="menu-item"><span className="menu-link">Sustainability</span></li>
                <li className="menu-item"><span className="menu-link">Mineral Processing</span></li>
                <li className="menu-item"><span className="menu-link">Mine-To-Mill-To-Mine Optimization</span></li>
                <li className="menu-item"><span className="menu-link">Oil & Gas</span></li>
            </ul>
        </div>
    ) : null
);

// Main Navbar component
const Navbar = () => {
    // State variables
    const [isScrolled, setIsScrolled] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    // Color variables based on the state
    const arrowColor = !isScrolled ? "#ffffff" : "#213555";
    const headerClass = classNames('py-2', { 'scroll-top': !isScrolled, 'scroll-bottom': isScrolled });
    const logoImage = isScrolled ? "logoDark.png" : "logo.png";
    const logoPath = `./img/${logoImage}`;

    // Handle scroll event
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 200);
        };

        // Event listener for scroll
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        // Header with dynamic classes and mouse leave event
        <header onMouseLeave={() => setShowDropdown(false)} className={headerClass}>
            <nav>
                <div className="row align-items-center">
                    <div className="col-4">
                        <Logo src={logoPath} />
                    </div>
                    <div className="col-8 d-flex justify-content-end">
                        <ul>
                            <li className="menu-item">
                                <span className="menu-link">Home</span>
                            </li>
                            <li onMouseEnter={() => setShowDropdown(true)} className="position-relative">
                                <span className="menu-link">Industries</span>
                                <BiSolidDownArrow size={10} color={arrowColor} />
                                <Dropdown show={showDropdown} color={arrowColor} />
                            </li>
                            <li className="menu-item">
                                <span className="menu-link">AI Software</span>
                            </li>
                            <li className="menu-item">
                                <span className="menu-link">Blog</span>
                            </li>
                            <li className="menu-item">
                                <span className="menu-link">Contact Us</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
