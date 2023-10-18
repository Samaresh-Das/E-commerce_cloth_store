import React from "react";

interface journalParams {
  title: string;
  category: string;
  imageUrl: string;
}

const Journal = ({ title, category, imageUrl }: journalParams) => {
  return (
    <div className="max-w-sm  rounded-lg mx-auto">
      <a href="#">
        <img className="rounded-t-lg" src={imageUrl} alt="" />
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
