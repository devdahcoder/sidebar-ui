import React from 'react'
import "./servicedropdown.css"

const ServiceDropdown = () => {
    return (
        <div className="side--bar--drop--down--content">
            <ul className="drop--down--ul--content">
                <li className="drop--down--li">
                    <a href="#" className="drop--down--link">
                        <div className="drop--down--text">
                            Credit
                        </div>

                        <div>

                        </div>
                    </a>
                </li>
                <li className="drop--down--li">
                    <a href="#" className="drop--down--link">
                        <div className="drop--down--text">
                            Transfer
                        </div>
                    </a>
                </li>
                <li className="drop--down--li">
                    <a href="#" className="drop--down--link">
                        <div className="drop--down--text">
                            Cash
                        </div>
                    </a>
                </li>
                <li className="drop--down--li">
                    <a href="#" className="drop--down--link">
                        <div className="drop--down--text">
                            My Bills
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default ServiceDropdown
