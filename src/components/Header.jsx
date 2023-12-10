import React from "react";
import { MdPostAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlices";
import '../style/Header.css';

const Header = () => {
    const dispatch = useDispatch();
    return (
        <div className="Navbar">
            <div className="NavbarLogo">REACT APP</div>
            <div className="NavbarForm">
            
                <div>
                    <input type="text"className="NarbarInput" placeholder="Arama Yapınız..."></input>
                </div>
                <div onClick={() => dispatch(modalFunc())} className="NavbarIcn">
                    <MdPostAdd  className="NavbarIcn" color="#1d6df1" size={40} />
                </div>
            </div>
        </div>
    )
}

export default Header