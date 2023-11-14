import React from "react";

function Showcase({ image }) {
  return (
    <section className="w-full h-96 bg-back-showcase bg-no-repeat	bg-center bg-cover	mt-4 flex items-center justify-center py-64">
      <div>
        <img
          src={require("../assets/img/" + image)}
          alt="showcase-img"
          className="rounded-full w-96 h-96 m-auto shadow-circula-showcase"
        />
      </div>
      <div className="w-3/6 mx-5 ">
        <h2 className="font-mono text-4xl font-bold">
          Hi! My name is David Anrango
        </h2>
        <p className="text-gray-300 text-xl">
          And today I want to tell you a little about myself, my profession, my
          skills and my knowledge.
        </p>
        <a
          href="#"
          className="cursor-pointer inline-block font-bold px-8 py-3 bg-gray-600 text-white text-sm mx-0 my-3 border border-solid border-white hover:opacity-70"
        >
          <i class="fa-solid fa-check"></i> Go
        </a>
      </div>
    </section>
  );
}

export default Showcase;
