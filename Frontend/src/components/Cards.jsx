import React from "react";

const Cards = ({ item }) => {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100  shadow-xl dark:bg-slate-700 dark:text-white dark:border hover:scale-105 duration-200">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="rounded-full border-[2px] px-3 py-1">
                ${item.price}
              </div>
              <div className="rounded-full border-[2px] px-3 py-1 hover:bg-pink-500 hover:cursor-pointer hover:text-white duration-200 ">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
