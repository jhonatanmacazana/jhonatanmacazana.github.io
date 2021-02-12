import {
  Greeting,
  HelloButton,
  IntroWrapper,
  LineBreak,
  LongOne,
  MyTitle,
  ShortOne,
} from "./Intro.styles";

const Intro: React.FC = () => (
  <>
    <IntroWrapper>
      <ShortOne>
        <Greeting>Hi, I’m Jhonatan,</Greeting>
        <MyTitle>
          full stack developer <br />
          electrical engineer <br />
          and sysadmin
        </MyTitle>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:jhonatanmacazana1@gmail.com"
        >
          <HelloButton>Say hello</HelloButton>
        </a>
      </ShortOne>
      <LongOne>
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
      </LongOne>
    </IntroWrapper>
    <LineBreak />
  </>
);

export default Intro;
