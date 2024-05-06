import { rows } from '../assets';

const Rows = () => {
  return (
    <div className="num flex flex-col md:flex-row px-6 py-6 justify-between items-center">
      {rows.map((r) => {
        return (
          <div key={r.id} className="font-lato text-center gap-2 text-white">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold my-1 md:my-0">
              {r.title}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl">{r.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Rows;
