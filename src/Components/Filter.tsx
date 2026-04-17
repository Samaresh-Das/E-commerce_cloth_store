import { useState } from "react";

interface filterParams {
  getPriceFilterData: (price: number) => void;
}

const Filter = ({ getPriceFilterData }: filterParams) => {
  const [activePrice, setActivePrice] = useState<number>(0);

  const changeHandler = (price: number) => {
    setActivePrice(price);
    getPriceFilterData(price);
  };

  return (
    <div className="neu-flat rounded-3xl p-6 text-slate-700 w-full mb-8 lg:mb-0">
      <div className="flex items-center justify-between mb-6">
        <span className="text-xl font-bold inter">Filters</span>
        <svg
          className="h-6 w-6 text-[#E76F51] hidden lg:block"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>

      <div className="mb-6">
        <h2 className="block w-full text-sm font-semibold uppercase tracking-wider mb-4 text-slate-500">
          Max Price
        </h2>

        <div className="space-y-4">
          {[2000, 3000, 4000].map((price) => (
            <div key={price} className="flex items-center cursor-pointer" onClick={() => changeHandler(price)}>
              <div className={`w-6 h-6 rounded-full flex justify-center items-center mr-3 transition-colors duration-200 ${activePrice === price ? 'neu-inset' : 'neu-flat'}`}>
                {activePrice === price && <div className="w-3 h-3 rounded-full bg-[#E76F51]"></div>}
              </div>
              <label className="text-md font-medium cursor-pointer">
                &#8377;{price}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex flex-col gap-4 mt-8 pt-6 border-t border-slate-300">
        <button
          name="commit"
          type="button"
          onClick={() => {}}
          className="w-full rounded-xl neu-button bg-[#E76F51] px-5 py-3 text-sm font-bold text-white transition-all hover:bg-[#d46549]"
        >
          Apply Filters
        </button>
        <button
          name="reset"
          type="button"
          onClick={() => changeHandler(0)}
          className="w-full rounded-xl neu-button px-5 py-3 text-sm font-medium text-slate-500 hover:text-slate-700 transition-all"
        >
          Reset All
        </button>
      </div>
    </div>
  );
};

export default Filter;
