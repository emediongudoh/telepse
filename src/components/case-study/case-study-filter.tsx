"use client";

import { ListFilterPlus } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface CaseStudyFilterProps {
  onFilter: (type: "industry" | "service" | "solution", value: string) => void;
}

export const CaseStudyFilter = ({ onFilter }: CaseStudyFilterProps) => {
  const createItem = (
    type: "industry" | "service" | "solution",
    label: string
  ) => (
    <DropdownMenuItem
      onSelect={e => {
        e.preventDefault(); // Keep dropdown open
        onFilter(type, label);
      }}
    >
      {label}
    </DropdownMenuItem>
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="gray"
          size="lg"
        >
          Filter <ListFilterPlus />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-60"
        align="start"
      >
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="text-md">
            Industries
          </DropdownMenuSubTrigger>
          <DropdownMenuContent
            side="right"
            className="w-48"
          >
            {["Fintech", "Software", "Ecommerce", "Healthcare", "Craft"].map(
              industry => createItem("industry", industry)
            )}
          </DropdownMenuContent>
        </DropdownMenuSub>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="text-md">
            Services
          </DropdownMenuSubTrigger>
          <DropdownMenuContent
            side="right"
            className="w-48"
          >
            {[
              "Content marketing",
              "Social media marketing",
              "Digital marketing",
              "Digital technology",
            ].map(service => createItem("service", service))}
          </DropdownMenuContent>
        </DropdownMenuSub>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="text-md">
            Solutions
          </DropdownMenuSubTrigger>
          <DropdownMenuContent
            side="right"
            className="w-48"
          >
            {["B2B", "B2C", "Online advertising"].map(solution =>
              createItem("solution", solution)
            )}
          </DropdownMenuContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
