import React from "react";

const Card = ({ title, image, desc, price }) => {
  return (
    <div className="mx-auto col-span-2 md:col-span-3 lg:col-span-4">
      <div className="card bg-base-100 col-span-1 md:col-span-2 lg:col-span-2 shadow-xl">
        <figure className="border-b-2 border-slate-900">
          <img src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">Rs: {price}</h2>
          <h2 className="card-title">{title}</h2>
          <p className="text-lg leading-5">{desc}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
