import React from "react";

interface journalParams {
  title: string;
  category: string;
  imageUrl: string;
  hoverProps: boolean;
  onMouseEnter: () => void;
}

const Journal = ({
  title,
  category,
  imageUrl,
  hoverProps,
  onMouseEnter,
}: journalParams) => {
  return (
    <div className="max-w-sm  rounded-lg mx-auto">
      <a href="#">
        <img
          className={`${
            hoverProps
              ? "transform transition-transform hover:scale-110 bg-black bg-opacity-75 hover:bg-opacity-100"
              : ""
          }  rounded-t-lg`}
          src={imageUrl}
          alt=""
          onMouseEnter={onMouseEnter}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight ">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {category}
        </p>
      </div>
    </div>
  );
};

export default Journal;
