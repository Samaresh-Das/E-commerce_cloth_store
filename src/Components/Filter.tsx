interface filterParams {
  getPriceFilterData: (price: number) => void;
}

const Filter = ({ getPriceFilterData }: filterParams) => {
  const changeHandler = (price: number) => {
    getPriceFilterData(price);
  };

  return (
    <details
      open
      className="ml-8  rounded-lg border border-gray-200 open:shadow-lg text-gray-700 md:my-12 w-[250px]"
    >
      <summary className="flex cursor-pointer select-none items-center justify-between bg-gray-100 px-5 py-3 lg:hidden">
        <span className="text-sm font-medium"> Toggle Filters </span>

        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </summary>

      <div className="flex border-t border-gray-200 lg:border-t-0">
        <div className="w-full">
          <h1 className="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">
            Price
          </h1>

          <div className="space-y-2 px-5 py-6">
            <div className="flex items-center">
              <input
                id="20+"
                type="radio"
                name="Price"
                value="20+"
                className="h-5 w-5 rounded border-gray-300"
                onChange={() => changeHandler(20)}
              />

              <label htmlFor="20+" className="ml-3 text-sm font-medium">
                {" "}
                $20+{" "}
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="30+"
                type="radio"
                name="Price"
                value="30+"
                className="h-5 w-5 rounded border-gray-300"
                onChange={() => changeHandler(30)}
              />

              <label htmlFor="30+" className="ml-3 text-sm font-medium">
                {" "}
                $30+{" "}
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="40+"
                type="radio"
                name="Price"
                value="40+"
                className="h-5 w-5 rounded border-gray-300"
                onChange={() => changeHandler(40)}
              />

              <label htmlFor="40+" className="ml-3 text-sm font-medium">
                {" "}
                $40+{" "}
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex justify-between border-t border-gray-200 px-5 py-3">
          <button
            name="reset"
            type="button"
            className="rounded text-xs font-medium text-gray-600 underline"
            onClick={() => changeHandler(0)}
          >
            Reset All
          </button>

          <button
            name="commit"
            type="button"
            className="rounded bg-[#6995b1] px-5 py-3 text-xs font-medium text-white active:scale-95"
          >
            Apply
          </button>
        </div>
      </div>
    </details>
  );
};

export default Filter;
