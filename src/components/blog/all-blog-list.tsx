"use client";

import { useState, useEffect } from "react";

// Local imports
import { BlogCard } from "./blog-card";
import { BlogCategories } from "./blog-categories";
import { BlogFilter } from "./blog-filter";
import { BlogSearch } from "./blog-search";
import { BlogPagination } from "./blog-pagination";

type Post = {
  _id: string;
  title: string;
  slug: string;
  main_image: string;
  preview: string;
  author?: { name: string };
  categories?: { title: string }[];
  publishedAt: string;
};

export const AllBlogList = ({ posts }: { posts: Post[] }) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [timeFilter, setTimeFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const postsPerPage = 10;

  // Reset page on filter/search change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, timeFilter, searchQuery]);

  // Unique categories
  const categories = Array.from(
    new Set(posts.flatMap(p => p.categories?.map(c => c.title) || []))
  );

  // Filtering logic
  let filteredPosts = posts;

  // Category
  if (activeCategory !== "all") {
    filteredPosts = filteredPosts.filter(post =>
      post.categories?.some(c => c.title === activeCategory)
    );
  }

  // Time
  const now = new Date();
  filteredPosts = filteredPosts.filter(post => {
    const publishedDate = new Date(post.publishedAt);
    if (timeFilter === "7days") {
      const last7days = new Date();
      last7days.setDate(now.getDate() - 7);
      return publishedDate >= last7days;
    }
    if (timeFilter === "1month") {
      const last1month = new Date();
      last1month.setMonth(now.getMonth() - 1);
      return publishedDate >= last1month;
    }
    if (timeFilter === "3months") {
      const last3months = new Date();
      last3months.setMonth(now.getMonth() - 3);
      return publishedDate >= last3months;
    }
    return true;
  });

  // Search
  if (searchQuery.trim()) {
    filteredPosts = filteredPosts.filter(post => {
      const title = post.title.toLowerCase();
      const author = post.author?.name.toLowerCase() || "";
      const categories =
        post.categories?.map(c => c.title.toLowerCase()).join(", ") || "";
      return (
        title.includes(searchQuery.toLowerCase()) ||
        author.includes(searchQuery.toLowerCase()) ||
        categories.includes(searchQuery.toLowerCase())
      );
    });
  }

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <section className="wrapper section w-full">
      {/* Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <BlogCategories
          categories={categories}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />

        <BlogSearch
          value={searchQuery}
          onChange={setSearchQuery}
        />

        <BlogFilter
          value={timeFilter}
          onChange={setTimeFilter}
        />
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {paginatedPosts.map(item => (
          <BlogCard
            key={item._id}
            title={item.title}
            slug={item.slug}
            main_image={item.main_image}
            preview={item.preview}
            author={item.author}
            category={item.categories?.map(c => c.title).join(", ")}
            publishedDate={item.publishedAt}
          />
        ))}
      </div>

      {/* Pagination */}
      <BlogPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </section>
  );
};
