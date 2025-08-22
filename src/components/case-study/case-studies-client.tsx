"use client";

import { useState } from "react";

// Local imports
import { CaseStudyTags } from "./case-study-tags";
import { CaseStudyForm } from "./case-study-form";
import { CaseStudyFilter } from "./case-study-filter";
import { CaseStudyList } from "./case-study-list";

interface CaseStudyListProps {
  caseStudies: {
    main_image: string;
    slides: [];
    client: string;
    slug: string;
    who_is: string;
    industry?: string;
    service?: string | string[];
    solution?: string | string[];
    tags?: string[];
  }[];
}

export const CaseStudiesClient = ({ caseStudies }: CaseStudyListProps) => {
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [filtered, setFiltered] = useState(caseStudies);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleTagToggle = (tag: string) => {
    const newTag = selectedTag === tag ? "" : tag;
    setSelectedTag(newTag);
    const updated = filterCaseStudies(searchQuery, newTag);
    setFiltered(updated);
  };

  const handleFilter = (
    type: "industry" | "service" | "solution",
    value: string
  ) => {
    setSelectedTag(value);
    const updated = filterCaseStudies(searchQuery, value);
    setFiltered(updated);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const updated = filterCaseStudies(query, selectedTag);
    setFiltered(updated);
  };

  const filterCaseStudies = (query: string, tag: string) => {
    const lowerQuery = query.toLowerCase();

    return caseStudies.filter(study => {
      // const matchesQuery = study.client.toLowerCase().includes(lowerQuery);

      const serviceValues = Array.isArray(study.service)
        ? study.service
        : study.service
          ? [study.service]
          : [];

      const solutionValues = Array.isArray(study.solution)
        ? study.solution
        : study.solution
          ? [study.solution]
          : [];

      const matchesTag =
        tag === "" ||
        [study.industry, ...serviceValues, ...solutionValues].includes(tag);

      const matchesQuery =
        study.client.toLowerCase().includes(lowerQuery) ||
        (study.industry?.toLowerCase() || "").includes(lowerQuery) ||
        serviceValues.some(s => s.toLowerCase().includes(lowerQuery)) ||
        solutionValues.some(s => s.toLowerCase().includes(lowerQuery));

      return matchesQuery && matchesTag;
    });
  };

  return (
    <section className="wrapper section">
      <div className="flex flex-wrap justify-between gap-4">
        <div className="flex items-center gap-4">
          <CaseStudyFilter onFilter={handleFilter} />

          <button
            onClick={() => {
              setSelectedTag("");
              setSearchQuery("");
              setFiltered(caseStudies);
            }}
            className="group relative h-fit w-fit cursor-pointer"
          >
            Show all{" "}
            <span className="group-hover:bg-secondary-yellow absolute -right-2 -bottom-2 -left-2 h-1 origin-left rounded-full bg-black transition-colors duration-300"></span>
          </button>
        </div>

        <CaseStudyForm
          onSearch={handleSearch}
          query={searchQuery}
        />
      </div>

      <CaseStudyTags
        selectedTag={selectedTag}
        onToggleTag={handleTagToggle}
      />

      <CaseStudyList filtered={filtered} />
    </section>
  );
};
