import React from "react";

function ExamplePage(props) {
  const { baseUrl } = props;
  const handleClick = () => {
    window.location.href = `${baseUrl}`;
  };
  return (
    <div className="w-full">
      <div className="w-[55%] m-auto py-2 px-2 border border-sm  flex flex-col  justify-center items-center shadom-sm gap-3 h-60  bg-green-500 mt-10 rounded-md">
        <h2 className="text-lg font-sans text-white">
          WordPress React Theme Boilerplate with React and Tailwind CSS
        </h2>

        <div className="w-full flex  flex-row items-center ">
          <ul className="w-1/2  flex flex-col ">
            <li className="text-sm font-medium text-white">
              1. Seamless React integration for WordPress
            </li>
            <li className="text-sm font-medium text-white">
              2. Integrated Tailwind CSS with WP style isolation
            </li>
            <li className="text-sm font-medium text-white">
              4. Built-in routing system
            </li>
            <li className="text-sm font-medium text-white">
              3. Optimized build process with Webpack and versioning
            </li>
          </ul>

          <section className="w-1/2  px-2 ">
            <div className="w-full flex flex-row">
              <article className="w-3/5">
                <ul className="w-full">
                  <li className="text-xs font-medium text-white">
                    Tech Stack: PHP, React.js, Tailwind CSS, MySQL
                  </li>
                  <li></li>
                </ul>
              </article>
            </div>
          </section>
        </div>

        <span className="w-full px-2 flex flex-row gap-1">
          <h2 className="capitalize text-sm text-white">Home Page</h2>{" "}
          <h2
            onClick={handleClick}
            className="capitalize text-blue-500 cursor-pointer animate-bounce">
            Click Here
          </h2>
        </span>
      </div>
    </div>
  );
}

export default ExamplePage;
