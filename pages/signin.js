import Head from "next/head";
import Link from "next/link";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../store/GlobalState";
import { postData } from "../utils/fetchData"
import Cookie from "js-cookie"
import { useRouter } from "next/router"
import styles from "../styles/Sign.module.css";

const Signin = () => {
  const initialState = { email: '', password: '' }
  const [userData, setUserData] = useState(initialState)
  const { email, password } = userData

  const {state, dispatch} = useContext(DataContext)
  const { auth } = state
  const router = useRouter()
  
  const handleChangeInput = e => {
    const {name, value} = e.target
    setUserData({...userData, [name]:value})
    dispatch({ type: 'NOTIFY', payload: {} })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    dispatch({ type: 'NOTIFY', payload: {loading: true} })

    const res = await postData('auth/login', userData)
    console.log(res)
    
    if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })

    dispatch({ type: 'NOTIFY', payload: {success: res.msg} })

    dispatch({ type: 'AUTH', payload: {
       token: res.access_token,
       user: res.user
    }})

    Cookie.set("refreshtoken", res.refresh_token, {
      path: "api/auth/accessToken",
      expires: 7
    })
    localStorage.setItem("firstLogin", true)
  }

  useEffect(() => {
      if(Object.keys(auth).length !== 0) 
      router.push("/")
  }, [auth])

  return (
    <div className={styles.sign}>
      <Head>
        <title>Inicio De Sesión</title>
      </Head>
      <form className="mx-auto my-4" style={{maxWidth: '500px'}} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
          Correo electrónico
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email..."
            name="email"
            value={email}
            onChange={handleChangeInput}
          />
          <div id="emailHelp" className="form-text">
          Nunca compartiremos tu correo electrónico con nadie más.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
           Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Contraseña..."
            name="password"
            value={password}
            onChange={handleChangeInput}
          />
        </div>
        <button type="submit" className="btn btn-dark w-100">
         Iniciar Sesión
        </button>
        <p className="my-2">¿No tienes una cuenta? 
          <Link href="/register">
            <a style={{color: 'crimson'}}> Regístrate ahora</a>
            </Link>
            </p>
      </form>
    </div>
  );
};

export default Signin;
