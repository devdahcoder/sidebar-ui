import React, {useState} from 'react'
import "./sidebartogglebtn.css"


const SideBarToggleBtn = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        const sidebar = document.querySelector(".sidebar");
        sidebar.classList.toggle("active");
        setSidebarOpen(!sidebarOpen)
    }

    return (
        <div onClick={toggleSidebar} className="side--bar--toggle--icon--container">
            <button className="side--bar--toggle--icon--btn">
                <svg width="10" height="18" style={{transform: sidebarOpen ? "rotate(180deg)" : ""}} viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.71251 17.75C1.89925 17.7506 2.08377 17.7094 2.25249 17.6294C2.42121 17.5493 2.56986 17.4325 2.68751 17.2875L8.72501 9.78748C8.90886 9.56381 9.00937 9.28326 9.00937 8.99373C9.00937 8.7042 8.90886 8.42364 8.72501 8.19998L2.47501 0.699979C2.26284 0.444708 1.95795 0.284177 1.62741 0.253702C1.29688 0.223228 0.96778 0.325305 0.712509 0.537478C0.457238 0.749652 0.296708 1.05454 0.266234 1.38507C0.235759 1.71561 0.337836 2.04471 0.550009 2.29998L6.13751 8.99998L0.73751 15.7C0.584656 15.8835 0.487559 16.1069 0.45771 16.3438C0.427861 16.5808 0.466507 16.8213 0.569076 17.0369C0.671646 17.2526 0.833846 17.4344 1.03648 17.5607C1.23912 17.6871 1.47372 17.7528 1.71251 17.75Z" fill="#D0D0D0"/>
                </svg>
            </button>
        </div>
    )
}

export default SideBarToggleBtn
