import useScroll from "#root/helpers/hooks/useScroll";

import styles from "./test.module.css";

const Test: React.FC = () => {
  useScroll();

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleShadow}>Title Shadow</div>
      test div
    </div>
  );
};

export default Test;
