import { FaSearch } from "react-icons/fa";
import './index.css';

export default function SearchBar() { 
    return (
        <form className="search-form">
            <select className="search-select" name="filter">
                <option className="search-select-option" value={"title"}>Obra</option>
                <option className="search-select-option" value={"author"}>Autor(a)</option>
                <option className="search-select-option" value={"publisher"}>Editora</option>
            </select>
            <input className="search-input" type="text" name="search" placeholder="Digite sua busca..."/>
            <button className="btn search-btn" type="submit"><FaSearch className="search-btn-icon" /></button>
        </form>
    )
}