import styles from './Preloader.module.css';

const Preloader = () => {
  return (
    <div className={styles.overlay_loader}>
      <div className={styles.loader}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Preloader;
