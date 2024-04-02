import styles from "./Window.module.css";

const Window = ({ children }) => {
  return (
    <div className={styles.window}>
      <div className={styles.title_bar}>
        <div className={styles.buttons}>
          <div className={styles.close_button}></div>
          <div className={styles.minimize_button}></div>
          <div className={styles.zoom_button}></div>
        </div>
        <div className={styles.title}>Sistema de Notas</div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Window;
