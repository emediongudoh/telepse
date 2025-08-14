"use client";

import { useRouter } from "next/navigation";

// Local imports
import { navLinks } from "@/constants";
import { NavLink } from "./nav-link";

// Third-party imports
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";

interface DesktopMenuProps {
  className?: string;
}

export const DesktopMenu = ({ className = "" }: DesktopMenuProps) => {
  const router = useRouter();

  return (
    <nav className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            Services <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-60"
          align="start"
        >
          {/* Content Marketing */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger
              onClick={() => router.push("/services/content-marketing")}
              className="text-md"
            >
              Content Marketing
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem
                onClick={() =>
                  router.push("/services/content-marketing#brand-communication")
                }
              >
                Brand Communication
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() =>
                  router.push("/services/content-marketing#marketing-strategy")
                }
              >
                Marketing Strategy
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() =>
                  router.push("/services/content-marketing#content-design")
                }
              >
                Content Design
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>

          <DropdownMenuItem
            onClick={() => router.push("/services/social-media-marketing")}
          >
            Social Media Marketing
          </DropdownMenuItem>

          {/* Digital Marketing */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger
              onClick={() => router.push("/services/digital-marketing")}
              className="text-md"
            >
              Digital Marketing
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem
                onClick={() =>
                  router.push("/services/digital-marketing#email-marketing")
                }
              >
                Email Marketing
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() =>
                  router.push("/services/digital-marketing#web-conversion")
                }
              >
                Web Conversion
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => router.push("/services/digital-marketing#seo")}
              >
                SEO
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() =>
                  router.push("/services/digital-marketing#google-ads")
                }
              >
                Google Ads
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>

          {/* Digital Technology */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger
              onClick={() => router.push("/services/digital-technology")}
              className="text-md"
            >
              Digital Technology
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem
                onClick={() =>
                  router.push(
                    "/services/digital-technology#product-requirements-design"
                  )
                }
              >
                Product Requirements Design
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() =>
                  router.push(
                    "/services/digital-technology#analytics-intelligence"
                  )
                }
              >
                Analytics Intelligence
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() =>
                  router.push(
                    "/services/digital-technology#digital-transformation"
                  )
                }
              >
                Digital Transformation
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            Solutions <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-60"
          align="start"
        >
          <DropdownMenuItem
            onClick={() =>
              router.push("/services/digital-technology#b2b-marketing")
            }
          >
            B2B Marketing
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              router.push("/services/digital-technology#b2c-marketing")
            }
          >
            B2C Marketing
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              router.push("/services/digital-technology#online-advertising")
            }
          >
            Online Advertising
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {navLinks.map((item, index) => (
        <NavLink
          key={index}
          label={item.label}
          href={item.href}
        />
      ))}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            Company <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-40"
          align="end"
        >
          <DropdownMenuItem onClick={() => router.push("/about")}>
            About
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push("/contact")}>
            Contact
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};
