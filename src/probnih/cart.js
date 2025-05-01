
import React from "react";

function Sidebar({ isOpen, onClose }) {
    
    return (
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
            <div className="sidebar-content">
                <button className="close-btn" onClick={onClose} style={{ color: "white"}}>
                    ✕
                </button>
                <h2 style={{textAlign: "center"}}>զամբյուղ</h2>
            </div>
        </div>
    );
}

export default Sidebar;