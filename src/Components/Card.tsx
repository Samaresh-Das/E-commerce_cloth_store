interface Params {
  title: string;
  //   category: string;
  price: number;
  imageUrl: string;
}

const Card = ({ title, price, imageUrl }: Params) => {
  return (
    <div>
      <a href="#" className="flex max-w-full flex-col gap-1 rounded-md">
        <img
          alt={title}
          src={imageUrl}
          className="h-96 w-full object-contain"
        />

        <div className="flex h-full w-full flex-col items-start justify-around px-0 py-4">
          <div className="mb-4 flex flex-col items-start gap-4">
            <p className="text-[25px] font-bold md:text-2xl">{title}</p>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-start max-[991px]:flex-col lg:items-center">
              <p className="text-[32px] text-[#DBD2D7] ">${price}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
