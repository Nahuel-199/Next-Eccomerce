import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/logoFox.png" objectFit='contain' layout='fill' alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            SUBLIMACIONES FOX
          </h2>
          <h2 className={styles.motto}>
            DISEÑOS PERSONALIZADOS
          </h2>
        </div>
        <div className={styles.card}>
        <h1 className={styles.title}>SOBRE NOSOTROS</h1>
        <p className={styles.text}>
           Somos un emprendimiento, dedicado a hacer estampados,
           tanto en tela negra y blanca, como diferentes tipo y colores. 
           Nos especializamos en remeras, buzos, barbijos
          stickers y mas...
          <br /> 
          <br /> 
        </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>HORARIO DE ATENCION</h1>
          <p className={styles.text}>
            LUNES A JUEVES
            <br /> 09:00 - 20:00
          </p>
          <p className={styles.text}>
            VIERNES Y SABADO
            <br /> 10:00 - 20:00
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
