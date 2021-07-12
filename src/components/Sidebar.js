import React from 'react'
import NewFile from './NewFile'
import '../styles/Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <NewFile/>
            <div className="sidebar__itemsContainer">

            </div>
        </div>
    )
}

export default Sidebar
