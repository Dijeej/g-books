'use client'
import { FaBookOpenReader } from "react-icons/fa6";
import './index.css';
import Link from "next/link";
import { GiOwl } from "react-icons/gi";
import { useState } from "react";
import LoginModal from "../LoginModal";
import SearchBar from "../SearchBar";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="main-header">
            <div className="header-logo">
                <Link href="/" className="header-title">G<GiOwl className="header-icon" />Books</Link>
            </div>

            <SearchBar />

            <button className="btn modal-login-btn" onClick={() => setIsOpen(true)}>
                <FaBookOpenReader className="modal-open-icon" />
                <p className="modal-open-text">Entrar</p>
            </button> 
            {isOpen && <LoginModal  isOpen={isOpen} setIsOpen={setIsOpen}  />}
        </header>
    );
}