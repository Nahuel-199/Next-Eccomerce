import styles from "../styles/MetodosPagos.module.css";

const MetodosPagos = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Metodos de pago</h1>
      <div className={styles.inputContainer}>
          <img src="/img/Metodos.jpg" alt="" className={styles.img}/>
      </div>
    </div>
  );
};

export default MetodosPagos;