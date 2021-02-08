import styles from "./Intro.module.css";

const Intro: React.FC = () => (
  <>
    <div className={styles.intro}>
      <div className={styles.shortOne}>
        <p className={styles.greeting}>Hi, I’m Jhonatan,</p>
        <p className={styles.myTitle}>
          full stack developer <br />
          electrical engineer <br />
          and sysadmin
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:jhonatanmacazana1@gmail.com"
        >
          <button className={styles.helloButton}>Say hello</button>
        </a>
      </div>
      <div className={styles.longOne}>
        <p>
          I'm a Peruvian based Jr. full stack developer, working with IoT
          devices for over 2 years. I'm experienced in <strong>HTML5</strong>,{" "}
          <strong>JS</strong>, and <strong>CSS</strong>, and modern libraries
          like <strong>React</strong> and <strong>Next.js</strong>.
        </p>

        <p>
          Interested in IoT devices with low power consumption and the entire
          ecosystem for the development of a specific application.
        </p>
        <p>
          Worked on several projects related to environmental parameters
          acquisition with IoT. Published one paper indexed in IEEE related to
          temperature acquisition inside buildings.
        </p>
        <p>Worked as Software architect of three Peruvian startups.</p>
      </div>
    </div>
    <div className={styles.br}></div>
  </>
);

export default Intro;
