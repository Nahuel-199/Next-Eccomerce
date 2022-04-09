import React from 'react'
import NavBar from './Navbar'
import Notify from './Notify'
import Modal from './Modal'

function Layout({children}) {
    return (
        <div>
            <NavBar />
            <Notify />
            <Modal />
            {children}
        </div>
    )
}

export default Layout