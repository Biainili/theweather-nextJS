import React from "react";
import Image from "next/image";

const Weather = ({ data }) => {

  if (!data.weather || !data.weather[0] || !data.weather[0].icon) {
    console.error('Weather data or icon information is missing:', data);
    return null; 
  }

  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

  console.log(data);
  return (
    <div className="relative flex-col justify-between max-w-[500px] w-500px h-[90vh] m-auto p-4 text-gray-200 ">
      {/* Top */}
      <div className="relative flex justify-between pt-12 mb-8">
        <div className="flex felx-col items-center">
          <Image
            src={iconUrl}
            alt="/"
            width={100}
            height={100}
          />
          <p className="text-4xl px-4">{data.weather[0].main}</p>
        </div>
        <p className="text-8xl">{((data.main.temp - 32) * 5 / 9).toFixed(0)}&#176;C</p>
      </div>
      {/* Bottom */}
      <div className="bg-black/50 relative p-8 rounded-md">
        <p className="text-3xl text-center pb-6 font-bold">Weather in {data.name}</p>
        <div className="flex justify-between text-center">
          <div>
            <p className="font-bold text-2xl">
              {data.main.feels_like.toFixed(0)}&#176;
            </p>
            <p className="text-xl">Feels Like</p>
          </div>
          <div>
            <p className="font-bold text-2xl">{data.main.humidity}%</p>
            <p className="text-xl">Humidity</p>
          </div>
          <div>
            <p className="font-bold text-2xl">
              {data.wind.speed.toFixed(0)} MPH
            </p>
            <p className="text-xl">Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
