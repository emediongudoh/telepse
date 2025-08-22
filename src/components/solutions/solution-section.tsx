"use client";

import { useState } from "react";
import Image from "next/image";

// Third-party imports
import { Button } from "../ui/button";
import { Plus, X } from "lucide-react";

// Local imports
import { SvgPattern } from "../svg-pattern";
import { Title } from "../title";
import { Paragraph } from "../paragraph";

interface SolutionSectionProps {
  children: React.ReactNode;
  bgColor: string;
  fill: string;
  title: string;
  imageSrc: string;
  listItems?: string[];
  id: string;
  btnText: string;
}

export const SolutionSection = ({
  children,
  bgColor,
  fill,
  title,
  imageSrc,
  listItems,
  id,
  btnText,
}: SolutionSectionProps) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleAddItem = (item: string) => {
    if (!selectedItems.includes(item)) {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleRemoveItem = (item: string) => {
    setSelectedItems(selectedItems.filter(i => i !== item));
  };

  // Define the column order based on imagePosition
  const leftSection = (
    <div className="space-y-4">
      <div className="flex gap-4">
        <div className="flex-1">
          <Title
            size="lg"
            weight="normal"
          >
            {title}
          </Title>
        </div>
      </div>

      <div className="flex gap-4">
        <Paragraph
          size="lg"
          className="flex-1"
        >
          {children}
        </Paragraph>
      </div>

      <ul className="grid grid-cols-2 gap-6">
        {listItems?.map((item, index) => (
          <li
            key={index}
            className={`flex cursor-pointer items-center gap-2 rounded-md p-2 text-base transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_black] sm:text-lg ${bgColor === "#FFF" ? "bg-secondary-gray" : "bg-white"}`}
            onClick={() => handleAddItem(item)}
          >
            {item}
            <Plus className="cursor-pointer" />
          </li>
        ))}
      </ul>

      {/* Selected items container */}
      {selectedItems.length > 0 && (
        <div className="rounded-md bg-white p-4">
          <ul className="flex flex-wrap gap-2">
            {selectedItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-2 rounded-md border border-gray-300 bg-gray-100 px-3 py-1"
              >
                {item}
                <X
                  className="text-destructive cursor-pointer"
                  onClick={() => handleRemoveItem(item)}
                />
              </li>
            ))}
          </ul>
        </div>
      )}

      <Button
        variant="ghost"
        size="xl"
        className={`${bgColor === "#FFF" ? "bg-secondary-yellow shadow-[3px_3px_0px_black]" : "bg-black text-white hover:bg-black/80 hover:text-white"} transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none`}
      >
        {btnText}
      </Button>
    </div>
  );

  const imageSection = (
    <Image
      src={imageSrc}
      alt={title}
      width={500}
      height={500}
      className="h-48 w-full rounded-2xl border-8 border-black object-cover sm:h-96"
    />
  );

  const gridContent = (
    <>
      {leftSection}
      {imageSection}
    </>
  );

  return (
    <section
      className="section min-h-[90vh] px-0"
      style={{ backgroundColor: bgColor }}
      id={id}
    >
      <SvgPattern fill={fill} />

      <div className="wrapper grid grid-cols-1 items-center gap-6 px-4 sm:gap-12 md:grid-cols-2">
        {gridContent}
      </div>
    </section>
  );
};
