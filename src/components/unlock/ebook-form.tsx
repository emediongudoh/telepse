"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Third-party imports
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { ChevronsUpDown } from "lucide-react";

// Local imports
import { RequiredAsterisk } from "./required-asterisk";
import { ALL_COUNTRIES } from "@/lib/countries";

const ebookFormSchema = z.object({
  firstname: z.string().min(2, { message: "Firstname is required." }),
  lastname: z.string().min(2, { message: "Lastname is required." }),
  email: z.string().email(),
  country: z.string(),
});

export const EbookForm = () => {
  // 1. Define signup form.
  const form = useForm<z.infer<typeof ebookFormSchema>>({
    resolver: zodResolver(ebookFormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      country: "",
    },
  });

  // 2. Define submit handler.
  const onSubmit = async (values: z.infer<typeof ebookFormSchema>) => {
    console.log(values);
  };

  // Country field logic
  const [countryOpen, setCountryOpen] = useState(false);

  useEffect(() => {
    async function detectLocation() {
      try {
        // 1. Try Geolocation (browser-based)
        navigator.geolocation.getCurrentPosition(async pos => {
          const { latitude, longitude } = pos.coords;
          const res = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );
          const data = await res.json();
          form.setValue("country", data.countryName);
        });
      } catch (err) {
        // 2. Fallback: IP-based lookup
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        if (data && data.country_name) {
          form.setValue("country", data.country_name);
        }

        console.error(err);
      }
    }
    detectLocation();
  }, [form]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 bg-white p-6 sm:p-12"
      >
        {/* Firstname field */}
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-normal">
                First name <RequiredAsterisk />
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="First name"
                  autoComplete="off"
                  className="border-black text-lg focus:ring-black"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Lastname field */}
        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-normal">
                Last name <RequiredAsterisk />
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Last name"
                  autoComplete="off"
                  className="border-black text-lg focus:ring-black"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-normal">
                Email <RequiredAsterisk />
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Email"
                  autoComplete="off"
                  className="border-black text-lg focus:ring-black"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Country field */}
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-normal">
                Location <RequiredAsterisk />
              </FormLabel>
              <FormControl>
                <Popover
                  open={countryOpen}
                  onOpenChange={setCountryOpen}
                >
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      className="flex h-12 w-full justify-between border border-black text-lg font-normal"
                    >
                      {field.value ? (
                        <div className="flex items-center gap-2">
                          <Image
                            src={
                              ALL_COUNTRIES.find(c => c.name === field.value)
                                ?.flag || ""
                            }
                            alt={
                              ALL_COUNTRIES.find(c => c.name === field.value)
                                ?.name || ""
                            }
                            width={20}
                            height={20}
                            className="rounded"
                          />
                          {field.value}
                        </div>
                      ) : (
                        "Select a region..."
                      )}
                      <ChevronsUpDown className="opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    side="bottom"
                    align="start"
                    sideOffset={4}
                    avoidCollisions={false}
                    className="hide--scrollbar max-h-60 w-60 overflow-y-auto p-0"
                  >
                    <Command>
                      <CommandInput
                        placeholder="Search a region..."
                        className="text-lg"
                      />
                      <CommandEmpty>No country found.</CommandEmpty>
                      <CommandGroup
                        heading="Countries"
                        className="!text-xl"
                      >
                        {ALL_COUNTRIES.map(country => (
                          <CommandItem
                            key={country.code}
                            onSelect={() => {
                              form.setValue("country", country.name);
                              setCountryOpen(false);
                            }}
                            className="flex items-center gap-2"
                          >
                            <div className="relative h-6 w-10">
                              <Image
                                src={country.flag}
                                alt={country.name}
                                fill
                                className="object-contain"
                                sizes="24px"
                              />
                            </div>

                            <span className="text-lg">{country.name}</span>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          variant="default"
          size="lg"
          className="h-14 text-lg"
        >
          Get free ebook
        </Button>
      </form>
    </Form>
  );
};
