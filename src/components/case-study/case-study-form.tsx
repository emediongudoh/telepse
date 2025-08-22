"use client";

import { useEffect } from "react";

// Third-party imports
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";

interface CaseStudyFormProps {
  onSearch: (query: string) => void;
  query: string; // <- Add this
}

const caseStudyFormSchema = z.object({
  query: z.string(),
});

export const CaseStudyForm = ({ onSearch, query }: CaseStudyFormProps) => {
  // 1. Define login form.
  const form = useForm<z.infer<typeof caseStudyFormSchema>>({
    resolver: zodResolver(caseStudyFormSchema),
    defaultValues: {
      query: "",
    },
  });

  // 2. Watch form input value
  const watchedQuery = form.watch("query");

  // 3. Run search when input changes
  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(watchedQuery);
    }, 150); // slight debounce for UX

    return () => clearTimeout(timeout);
  }, [watchedQuery, onSearch]);

  // 4. Update input field when query prop changes
  useEffect(() => {
    form.setValue("query", query); // <- Sync external value into form
  }, [query, form]);

  return (
    <Form {...form}>
      <form className="flex">
        <FormField
          control={form.control}
          name="query"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Search for case studies"
                  autoComplete="off"
                  className="bg-secondary-gray w-fit focus:ring-black sm:w-96"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
