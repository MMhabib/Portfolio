/* eslint-disable react/prop-types */
"use client";

import Marquee from "react-fast-marquee";
import { CardBody, CardContainer, CardItem } from "../card/3d-card";



export function Card({
  title,
  description,
  image,
  techStack = [],
  githubLink,
  liveLink,
  onClick,
}) {
  return (
    <CardContainer data-aos="zoom-in" className="inter-var ">
     <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.2] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full max-w-[30rem] h-auto rounded-xl p-4 sm:p-6 border mx-auto">
        
        {/* Clickable wrapper */}
        <div onClick={onClick} className="cursor-pointer pointer-events-auto">
          <CardItem
  translateZ={50}
  className="text-2xl font-bold text-neutral-600 dark:text-white "
>
  {title}
</CardItem>

          <CardItem
            as="p"
            translateZ={60}
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 line-clamp-5"
          >
            {description}
          </CardItem>

          <CardItem translateZ={100} rotateX={20} rotateZ={-10} className="w-full mt-4">
            <img
              src={image}
              alt="Project Screenshot"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            />
          </CardItem>

          {techStack.length > 0 && (
            <CardItem translateZ={30} className="w-full mt-6">
              <Marquee gradient={false} speed={50} pauseOnHover={true}>
                {techStack?.map(({logo}, index) => (
                  logo &&
                  <img
                    key={index}
                    src={logo}
                    alt={`Tech Logo ${index + 1}`}
                    className="h-8 mx-6"
                  />
                ))}
              </Marquee>
            </CardItem>
          )}
        </div>

        {/* Buttons outside clickable wrapper */}
        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="a"
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl text-xs font-medium dark:text-white border border-purple-500 hover:bg-purple-500 hover:text-white transition-all"
          >
            View Code
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="a"
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-800 text-white text-xs font-semibold"
          >
            View Live
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
