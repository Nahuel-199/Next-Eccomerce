import React, { useContext } from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {DataContext} from '../store/GlobalState'
import Cookie from 'js-cookie'
import styles from "../styles/Navbar.module.css";
import { VscMenu } from "react-icons/vsc";
import { BsCart3 } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import Search from './Search'

function Navbar() {
    const router = useRouter()
    const {state, dispatch} = useContext(DataContext)
    const { auth, cart } = state


    const isActive = (r) => {
        if(r === router.pathname){
            return " active"
        }else{
            return ""
        }
    }

    const handleLogout = () => {
        Cookie.remove('refreshtoken', {path: 'api/auth/accessToken'})
        localStorage.removeItem('firstLogin')
        dispatch({ type: 'AUTH', payload: {} })
        dispatch({ type: 'NOTIFY', payload: {success: 'Ha cerrado sesion!'} })
        return router.push('/')
    }

    const adminRouter = () => {
        return(
            <>
            <Link href="/users">

                <a className="dropdown-item">Users</a>
            </Link>

            <Link href="/create">

                <a className="dropdown-item">Products</a>

            </Link>
            <Link href="/categories">

                <a className="dropdown-item">Categories</a>

            </Link>
            </>
        )
    }

    const loggedRouter = () => {
        return(
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" 
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: "white"}}>
                    <img src={auth.user.avatar} alt={auth.user.avatar} 
                    style={{
                        borderRadius: '50%', width: '30px', height: '30px',
                        transform: 'translateY(-3px)', marginRight: '3px'
                    }} /> {auth.user.name}
                </a>

                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <Link href="/profile">

                        <a className="dropdown-item" style={{ color: "black"}}>Perfil</a>

                    </Link>
                    {
                        auth.user.role === 'admin' && adminRouter()
                    }
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item" onClick={handleLogout} style={{ color: "black"}}>Cerrar Sesion</button>
                </div>
            </li>
        )
    }

    return (
        <nav className={styles.containerNav}>
            <Link href="/">
                <a className="navbar-brand" style={{
                                        fontSize: "29px",
                                        letterSpacing: "10px",
                                        fontWeight: "600",
                                        fontFamily: "'Urbanist', sans-serif",
                                        color: "#e5a900"
                                    }}>SUBLI FOX</a>
            </Link>
            <img className={styles.logo} src='img/logoFox.png' />
            <ul className={styles.ulCart}>
                    <li className="nav-item">
                        <Link href="/cart">
                            <a className={"nav-link" + isActive('/cart')}>
                                <BsCart3 style={{ color: "white", position: "relative"}}></BsCart3>
                                <span className="position-absolute"
                                    style={{
                                        padding: '3px 6px',
                                        background: '#ed143dc2',
                                        borderRadius: '50%',
                                        top: '12px',
                                        marginLeft: '-8px',
                                        color: 'white',
                                        fontSize: '14px',
                                        color: 'white'
                                    }}>
                                        {cart.length}
                                    </span>
                                <span className={styles.spanCart} style={{color: "white", marginLeft: "10px"}}>Carrito</span> 
                            </a>
                        </Link>
                    </li>
                    </ul>
            <button className="navbar-toggler" style={{ width: "5%" }} type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <VscMenu className={styles.icon} style={{ fontSize: "29px"}}></VscMenu>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav p-1">
                    
                    {
                        Object.keys(auth).length === 0 
                        ? <li className="nav-item">
                            <Link href="/signin">
                                <a className={"nav-link" + isActive('/signin')}>
                                    <FaUserAlt  aria-hidden="true" style={{ color: "white"}}></FaUserAlt> 
                                    <span style={{color: "white", marginLeft: "10px"}}>Iniciar Sesion</span> 
                                </a>
                            </Link>
                        </li>
                        : loggedRouter()
                    }
                </ul>
            </div>
            <Search />
        </nav>
      
    )
}

export default Navbar