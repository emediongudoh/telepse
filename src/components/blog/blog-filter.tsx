"use client";

type BlogFilterProps = {
  value: string;
  onChange: (val: string) => void;
};

export const BlogFilter = ({ value, onChange }: BlogFilterProps) => {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className="rounded-md border border-gray-300 px-4 py-3 focus:border-black focus:outline-none"
    >
      <option value="all">All time</option>
      <option value="7days">Last 7 days</option>
      <option value="1month">Last 1 month</option>
      <option value="3months">Last 3 months</option>
    </select>
  );
};
