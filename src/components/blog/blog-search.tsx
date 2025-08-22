"use client";

type BlogSearchProps = {
  value: string;
  onChange: (val: string) => void;
};

export const BlogSearch = ({ value, onChange }: BlogSearchProps) => {
  return (
    <input
      type="text"
      placeholder="Search posts..."
      value={value}
      onChange={e => onChange(e.target.value)}
      className="flex-1 rounded-md border border-gray-300 px-4 py-2 focus:border-black focus:outline-none"
    />
  );
};
