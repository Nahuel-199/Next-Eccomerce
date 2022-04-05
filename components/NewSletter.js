import { Send } from "@material-ui/icons";
import styles from "../styles/NewSletter.module.css";

const Newsletter = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Noticias</h1>
      <div className={styles.desc}>Si busca un producto personalizado por favor dejenos un email.</div>
      <div className={styles.inputContainer}>
        <input className={styles.Input} placeholder="Su email..." />
        <button className={styles.boton}>
          <Send />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;