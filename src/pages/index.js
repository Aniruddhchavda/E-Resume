import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import Timeline2 from '../components/TimeLine2/TimeLine2';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Drums from '../components/Drums/Drums'
import { AiOutlineBorder } from 'react-icons/ai';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>

      <Timeline />
      <Timeline2 />

      <Drums />
      <Projects />
      <Technologies />

    </Layout>
  );
};

export default Home;
