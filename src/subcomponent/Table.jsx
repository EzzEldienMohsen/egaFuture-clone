/* eslint-disable react/prop-types */

const Table = ({c}) => {
  return (
    <div  className="flex justify-start items-start mb-4 flex-wrap">
      <div className={`p-3 border-[1px] border-dashed border-b-[white] border-[#ffffff9e] text-xs md:text-lg lg:text-xl hover:bg-[white] hover:text-[#ea4949] font-lato font-thin text-white ${c.num?"":"hidden"}`}>
        {c?.num}
      </div>
      <div className="p-3 border-[1px] border-dashed border-b-[white] border-[#ffffff9e] text-xs md:text-lg lg:text-xl hover:bg-[white] hover:text-[#ea4949] font-lato font-thin text-white">
        {c?.year}
      </div>
      <div className="p-3 border-[1px] border-dashed border-b-[white] border-[#ffffff9e] text-xs md:text-lg lg:text-xl hover:bg-[white] hover:text-[#ea4949] font-lato font-thin  text-white">
        {c?.title}
      </div>
      <div className="p-3 border-[1px] border-dashed border-b-[white] border-[#ffffff9e] text-xs md:text-lg lg:text-xl hover:bg-[white] hover:text-[#ea4949] font-lato font-thin text-white">
        {c?.text}
      </div>
    </div>
  );
}

export default Table