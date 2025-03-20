import { useState } from "react";
import { AiFillCloseSquare, AiOutlineCloseSquare } from "react-icons/ai";
import './index.css'

interface LoginModalProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function LoginModal({ isOpen, setIsOpen }: LoginModalProps) {
    const [isHovered, setIsHovered] = useState(false);

    if (!isOpen) return null; // Não renderiza se o modal estiver fechado

    return (
        <div className="modal-content-login">
            <div className="modal-content-login-card">
                <div 
                    className="modal-content-close" 
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => setIsOpen(false)}
                >
                    {isHovered ? (
                        <AiFillCloseSquare className="modal-content-close-icon" />
                    ) : (
                        <AiOutlineCloseSquare className="modal-content-close-icon" />
                    )}
                </div>

                <h2 className="modal-content-title">Login</h2>

                <form className="modal-form">
                    <input className="modal-form-input" type="text" name="email" placeholder="E-mail"/>
                    <input className="modal-form-input" type="password" name="password" placeholder="Senha"/>
                    <button className="btn btn-default" type="submit"> Entrar </button>
                </form>
            </div>
        </div>
    ); 
}
