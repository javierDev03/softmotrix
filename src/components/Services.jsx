import React from "react";
import { Dataservices } from "../data/Dataservices";

export default function Services() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Dataservices.map((info) => (
          <div
            key={info.id}
            className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 saturate-100 backdrop-contrast-100"
          >
            <img
              className="w-full"
              src={info.image}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{info.title}</div>
              <p className="text-gray-700 text-base">{info.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              {/* Iterar sobre las etiquetas y mostrar cada una */}
              {info.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}