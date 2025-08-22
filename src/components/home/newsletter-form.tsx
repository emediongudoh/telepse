"use client";

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
import { Button } from "../ui/button";
import { Send } from "lucide-react";

const newsletterFormSchema = z.object({
  email: z.string().email(),
});

export const NewsletterForm = () => {
  // 1. Define login form.
  const form = useForm<z.infer<typeof newsletterFormSchema>>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define submit handler.
  const onSubmit = async (values: z.infer<typeof newsletterFormSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Enter your email address"
                  autoComplete="off"
                  className="flex-1 bg-white focus:ring-black"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          variant="default"
          className="h-12 rounded-l-none rounded-r-md bg-black hover:bg-black/80"
        >
          Subscribe <Send />
        </Button>
      </form>
    </Form>
  );
};
