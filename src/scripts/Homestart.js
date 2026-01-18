import React, { useState } from "react";
import { Link } from "react-router-dom";
import { baseurl } from "../global";
function Homestart(props) {
  const { baseUrl } = props;
  const [count, Setcount] = useState(0);
  const handleClick = () => {
    window.location.href = `${baseUrl}/wordpress-React//#/about`;
  };
  return (
    <div className="w-full">
      <section className="w-1/2 mt-10 rounded-md  bg-green-500 m-auto py-2  px-2 flex flex-col items-center gap-4">
        <h2 className="text-center text-lg capitalize font-semibold text-white">
          This is React Theme BoilerPlate with React and Tailwind CSS
        </h2>
        <h5 className="text-base font-medium text-white">
          An open-source WordPress Theme boilerplate with, React.js, and
          Tailwind CSS, designed to let developers start coding immediately
          without setup.
        </h5>

        <section className="w-full flex flex-col items-center justify-center">
          <span className="text-black text-lg capitalize">
            Total count {count}
          </span>
          <article className="w-1/2 m-auto flex flex-row items-center justify-between">
            <button
              className="text-base font-normal capitalize cursor-pointer px-2 py-2 bg-green-400 text-white rounded-md hover:bg-white hover:text-green-400"
              onClick={() => Setcount((prev) => prev + 1)}>
              incease count
            </button>
            <button
              className="text-base font-normal capitalize cursor-pointer px-2 py-2 bg-red-400 text-white rounded-md hover:bg-white hover:text-red-400"
              onClick={() => Setcount((prev) => prev - 1)}>
              decrease count
            </button>
          </article>
        </section>

        <span className="w-full px-2 flex flex-row gap-1">
          <h2 className="capitalize text-sm text-white">next page</h2>{" "}
          <h2
            onClick={handleClick}
            className="capitalize text-blue-500 cursor-pointer animate-bounce">
            click here
          </h2>
        </span>
      </section>
    </div>
  );
}

export default Homestart;
