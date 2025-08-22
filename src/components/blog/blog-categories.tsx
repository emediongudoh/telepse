"use client";

type BlogCategoriesProps = {
  categories: string[];
  activeCategory: string;
  onChange: (cat: string) => void;
};

export const BlogCategories = ({
  categories,
  activeCategory,
  onChange,
}: BlogCategoriesProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onChange("all")}
        className={`cursor-pointer rounded-md px-4 py-2 transition ${
          activeCategory === "all"
            ? "bg-black text-white"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        All
      </button>
      {categories.map((cat, idx) => (
        <button
          key={`${cat}-${idx}`}
          onClick={() => onChange(cat)}
          className={`cursor-pointer rounded-md px-4 py-2 transition ${
            activeCategory === cat
              ? "bg-black text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};
