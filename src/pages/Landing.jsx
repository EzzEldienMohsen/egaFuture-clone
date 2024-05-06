import { GridElement, Illusion, LandingHero, Rows, Separator } from '../subcomponent';

const Landing = () => {
  return (
    <>
      <LandingHero />
      <Separator />
      <Rows />
      <Illusion />
      <GridElement/>
    </>
  );
};

export default Landing;
