'use client'
import { FaSearch } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import './index.css';
import Link from "next/link";
import { GiOwl } from "react-icons/gi";
import { useState } from "react";
import LoginModal from "../LoginModal";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="main-header">
            <div className="header-logo">
                <Link href="/" className="header-title">G<GiOwl className="header-icon" />Books</Link>
            </div>
            <form className="search-form">
                <select name="filter">
                    <option value={"title"}>Obra</option>
                    <option value={"author"}>Autor(a)</option>
                    <option value={"publisher"}>Editora</option>
                </select>
                <input type="text" name="search" placeholder="Digite sua busca..."/>
                <button className="btn" type="submit"><FaSearch /></button>
            </form>
            <button className="btn modal-login-btn" onClick={() => setIsOpen(true)}>
                <FaBookOpenReader className="modal-open-icon" />
                <p className="modal-open-text">Entrar</p>
            </button> 
            {isOpen && <LoginModal  isOpen={isOpen} setIsOpen={setIsOpen}  />}
        </header>
    );
}