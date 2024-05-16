"use client";

import Image from "next/image";
import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Image1 from "../Components/images/map.jpg";
import Image2 from "../Components/images/certified-1.jpg";
import Image4 from "../Components/images/certified-3.png";
import Image6 from "../Components/images/grave-1.jpeg";
import Image7 from "../Components/images/grave-2.jpeg";
import Image8 from "../Components/images/grave-3.jpeg";

export default class ImagesCaurosel extends Component {
  render() {
    let data = [
      {
        img: Image1,
        title: "map",
        text: " Graveyard Map ",
      },
      {
        img: Image2,
        title: "Apprecitaion sheild",
        text: " Okhai Memon Jamat Appreciation certificate",
      },

      {
        img: Image4,
        title: "Apprecitaion sheild",
        text: " Okhai Memon Jamat Appreciation certificate",
      },
      {
        img: Image6,
        title: "omj graveyard",
        text: " Okhai Memon Jamat grave yard",
      },
      {
        img: Image7,
        title: "omj graveyard",
        text: " Okhai Memon Jamat grave yard",
      },
      {
        img: Image8,
        title: "omj graveyard",
        text: " Okhai Memon Jamat grave yard",
      },
    ];
    const settings = {
      dots: true,
      dotsClass: "slick-dots line-indicator",
      infinite: true,
      speed: 400,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],

      customPaging: (i: any) => (
        <div className="-mt-2 text-xs opacity-0">{i}</div>
      ),
    };
    return (
      <div className="mt-6 w-[95%]  ">
        <Slider {...settings} className="">
          {data.map((val, index) => {
            return (
              <div
                className="px-3 xl-lg:px-1 group mb-2 md:mb-5  relative overflow-hidden  outline-none"
                key={index}
              >
                <div className="relative bg-slate-900 rounded-lg mx-10  overflow-hidden">
                  <Image
                    src={val.img}
                    className="w-full h-[300px]  md:h-400px]   object-fill"
                    alt={val.title}
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
