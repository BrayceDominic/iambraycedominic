import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section
      id="about"
      className="bg-[#F5E6C8] dark:bg-[#2B2B2B] text-black dark:text-gray-300 py-20"
    >
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            img,
            imgClassName,
            titleClassName,
            spareImg,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={`${className} text-black dark:text-gray-300`}
              img={img}
              imgClassName={imgClassName}
              titleClassName={`${titleClassName} text-black dark:text-gray-300`}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
