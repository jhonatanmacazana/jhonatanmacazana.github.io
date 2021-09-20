import {
  Greeting,
  HelloButton,
  IntroWrapper,
  LineBreak,
  LongOne,
  MyTitle,
  ShortOne,
} from "./Intro.styles";

const Intro = () => (
  <>
    <IntroWrapper>
      <ShortOne>
        <Greeting>Hi, I’m Jhonatan,</Greeting>
        <MyTitle>
          full stack developer <br />
          electrical engineer <br />
          and SRE
        </MyTitle>
        <a target="_blank" rel="noopener noreferrer" href="mailto:jhonatan.macazana1@gmail.com">
          <HelloButton>Say hello</HelloButton>
        </a>
      </ShortOne>
      <LongOne>
        <p>
          I'm a Peruvian-based Jr. Full stack developer for over 2 years. I'm interested in the{" "}
          <a target="_blank" rel="noopener noreferrer" href="https://jamstack.org/">
            JAM Stack
          </a>
          , with plenty of experience in <strong>React</strong> and <strong>Next.js</strong> work.
          Also, I'm a big fan of{" "}
          <a target="_blank" rel="noopener noreferrer" href="https://hasura.io/">
            Hasura
          </a>
          , along with GraphQL and{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.graphql-code-generator.com/"
          >
            other tools
          </a>{" "}
          that work really nicely with Typescript.
        </p>

        <p>
          I have a bachelor's degree in electrical engineering with a specialization in Digital and
          Computational Systems, with a special interest in IoT devices with low power consumption
          and the entire ecosystem for the development of a specific application.
        </p>

        <p>
          I have developed my own web cloud to monitor remote LoRa-based stations. Lately, I have
          realized worked with the open-source platform{" "}
          <a target="_blank" rel="noopener noreferrer" href="https://thingsboard.io/">
            Thingsboard
          </a>
          . I have worked on several projects related to environmental parameter acquisition with
          IoT. Published one indexed paper in IEEE related to temperature acquisition inside
          buildings.
        </p>

        <div>
          <p>
            I have also a good understanding of the cloud by constantly trying up new technologies.
            I have managed several production environments with Docker containers, orchestrators,
            and load balancers. Worked as Software architect of three Peruvian startups:
          </p>
          <ul>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://nextmedicall.com">
                Nextmedicall
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://linkop.pe">
                Linkop
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://certificatek.com">
                Certificatek
              </a>
            </li>
          </ul>
        </div>
      </LongOne>
    </IntroWrapper>
    <LineBreak />
  </>
);

export default Intro;
