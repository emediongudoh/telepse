"use client";

import { useForm, Controller } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { SmallTitle } from "../small-title";

// Third-party import for phone input
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const contactFormSchema = z.object({
  whatsapp_number: z.string().min(5, "Please enter a valid number"),
});

export const ContactForm = () => {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      whatsapp_number: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex max-w-lg flex-col gap-8 rounded-2xl bg-white p-8 sm:p-16"
      >
        <SmallTitle title="Enter WhatsApp to request a callback" />

        {/* WhatsApp Phone Input with Flags & Codes */}
        <FormField
          control={form.control}
          name="whatsapp_number"
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Controller
                  control={form.control}
                  name="whatsapp_number"
                  render={({ field }) => (
                    <PhoneInput
                      country={"ng"} // default country: Nigeria
                      value={field.value}
                      onChange={phone => field.onChange(phone)}
                      inputClass="!w-full !h-13 !text-base !rounded-lg"
                      buttonClass="!border-none"
                      dropdownClass="!bg-white"
                      enableSearch={true}
                      placeholder="Enter WhatsApp number"
                    />
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          variant="default"
          size="lg"
          className="h-13"
        >
          Request callback
        </Button>
      </form>
    </Form>
  );
};
