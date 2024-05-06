import { ComplexComponent } from '../components';
import { BlueSection, GridElement, Illusion, LandingHero, Rows, Separator } from '../subcomponent';

const Landing = () => {
  return (
    <>
      <LandingHero />
      <Separator />
      <Rows />
      <Illusion />
      <GridElement />
     <BlueSection/>
     <ComplexComponent/>
    </>
  );
};

export default Landing;
