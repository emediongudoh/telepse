"use client";

import { Button } from "../ui/button";

// Local imports
import { caseStudyTags } from "@/constants";

interface CaseStudyTagsProps {
  selectedTag: string; // <-- single tag now
  onToggleTag: (tag: string) => void;
}

export const CaseStudyTags = ({
  selectedTag,
  onToggleTag,
}: CaseStudyTagsProps) => {
  const handleTagClick = (tag: string) => {
    // If tag is already selected, clear selection; else select only that tag
    if (selectedTag === tag) {
      onToggleTag(""); // clear selection
    } else {
      onToggleTag(tag); // select single tag
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {caseStudyTags.map(tag => (
        <Button
          key={tag}
          variant={selectedTag === tag ? "telepse_secondary" : "default"} // <-- compare single tag
          size="lg"
          onClick={() => handleTagClick(tag)}
          // className="bg-black text-white hover:bg-secondary_gray hover:text-black"
          className="hover:bg-secondary-gray hover:text-black"
        >
          {tag}
        </Button>
      ))}
    </div>
  );
};
