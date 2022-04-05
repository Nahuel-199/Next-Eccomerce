import Head from "next/head";
import Link from "next/link";
import { useState, useContext, useEffect} from "react";
import valid from"../utils/valid";
import { DataContext } from "../store/GlobalState";
import { postData } from "../utils/fetchData"
import { useRouter } from 'next/router'

const Register = () => {
  const initialState = { name: '', email: '', password: '', cf_password: '' }
  const [userData, setUserData] = useState(initialState)
  const { name, email, password, cf_password } = userData

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
    const errMsg = valid(name, email, password, cf_password)
    if(errMsg) return dispatch({ type: 'NOTIFY', payload: {error: errMsg} })

    dispatch({ type: 'NOTIFY', payload: {loading: true} })

    const res = await postData('auth/register', userData)
    console.log(res)
    
    if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })

    return dispatch({ type: 'NOTIFY', payload: {success: res.msg} })
  }

  useEffect(() => {
    if(Object.keys(auth).length !== 0) 
    router.push("/")
}, [auth])

  return (
    <div>
      <Head>
        <title>Registrarse</title>
      </Head>
      <form className="mx-auto my-4" style={{maxWidth: '500px'}} onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="name" className="form-label">
           Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={handleChangeInput}
          />
          </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
          Correo electrónico
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
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
            name="password"
            value={password}
            onChange={handleChangeInput}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">
           Confirmar contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            name="cf_password"
            value={cf_password}
            onChange={handleChangeInput}
          />
        </div>
        <button type="submit" className="btn btn-dark w-100">
        Registrarse
        </button>
        <p className="my-2">¿Ya tienes una cuenta?
          <Link href="/signin">
            <a style={{color: 'crimson'}}> Inicia sesión ahora</a>
            </Link>
            </p>
      </form>
    </div>
  );
};
  
  export default Register