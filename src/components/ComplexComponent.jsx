import { ComplexFirstSection } from "../subcomponent";


const ComplexComponent = () => {
  return (
    <div className="complex py-4 px-2 md:py-6 md:px-4 lg:py-14 lg:px-10 flex flex-col gap-6">
     <ComplexFirstSection/>
    </div>
  );
}

export default ComplexComponent