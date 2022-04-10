import styles from "../styles/MetodosPagos.module.css";
import { BsWhatsapp, BsFacebook, BsInstagram } from "react-icons/bs";
import Link from "next/link";


const MetodosPagos = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Metodos de pago</h1>
      <div className={styles.inputContainer}>
          <img src="/img/Metodos.jpg" alt="" className={styles.img}/>
      </div>
     <div className={styles.container2}>
      <h1 className={styles.title2}>Redes</h1>
      <div className={styles.iconContainer}>
          <Link href="https://walink.co/17bbcd">
            <BsWhatsapp style={{color: "green"}} className={styles.icon} />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=100072559574435">
            <BsFacebook style={{animationDelay: "1s", color: "blue"}} className={styles.icon} />
            </Link>
            <Link href="https://instagram.com/foxsublimaciones1.0?utm_medium=copy_link">
            <BsInstagram  style={{animationDelay: "2s",borderRadius: "40px",lineHeight: "250px",color: "white", background: "#d6249f",
            background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
            boxShadow: "0px 3px 10px rgba(0,0,0,.25)"
           }} className={styles.icon}/>
           </Link>
      </div>
      </div>
    </div>
  );
};

export default MetodosPagos;