import { ComplexFirstSection } from "../subcomponent";
import { motion } from 'framer-motion';


const ComplexComponent = () => {
  return (
    <div className="complex py-4 px-2 md:py-6 md:px-4 lg:py-14 lg:px-10 flex flex-col gap-6">
     <ComplexFirstSection/>
     <div className="flex flex-col justify-center items-center px-4 py-4 md:grid md:grid-cols-3 md:px-2 lg:px-6 ">
     
     </div>
    </div>
  );
}

export default ComplexComponent