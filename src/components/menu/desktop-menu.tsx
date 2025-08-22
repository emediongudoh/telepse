"use client";

import { useRouter } from "next/navigation";

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

// Local imports
import { NAV_LINKS } from "@/constants";
import { NavLink } from "./nav-link";

interface DesktopMenuProps {
  className?: string;
}

export const DesktopMenu = ({ className = "" }: DesktopMenuProps) => {
  const router = useRouter();

  // Helper to ensure scroll-to-top on navigation
  const goToTop = (path: string) => {
    router.push(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className={className}>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="font-medium"
          >
            Services <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-60"
          align="start"
        >
          {/* Content marketing */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger
              onClick={() => goToTop("/services/content-marketing")}
              className="text-md"
            >
              Content marketing
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem
                onClick={() =>
                  goToTop("/services/content-marketing#brand_message")
                }
              >
                Brand message
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() =>
                  goToTop("/services/content-marketing#marketing_strategy")
                }
              >
                Marketing strategy
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() =>
                  goToTop("/services/content-marketing#content_design")
                }
              >
                Content design
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>

          {/* Social media marketing */}
          <DropdownMenuItem
            onClick={() => goToTop("/services/social-media-marketing")}
          >
            Social media marketing
          </DropdownMenuItem>

          {/* Digital marketing */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger
              onClick={() => goToTop("/services/digital-marketing")}
              className="text-md"
            >
              Digital marketing
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem
                onClick={() =>
                  goToTop("/services/digital-marketing#email_marketing")
                }
              >
                Email marketing
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() =>
                  goToTop("/services/digital-marketing#web_conversion")
                }
              >
                Web conversion
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => goToTop("/services/digital-marketing#seo")}
              >
                SEO
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() =>
                  goToTop("/services/digital-marketing#google_ads")
                }
              >
                Google ads
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Solutions */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="font-medium"
          >
            Solutions <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-60"
          align="start"
        >
          {/* Tech solutions */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger
              onClick={() => goToTop("/solutions")}
              className="text-md"
            >
              Marketing
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem onClick={() => goToTop("/solutions#b2b")}>
                B2B marketing
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => goToTop("/solutions#b2c")}>
                B2C marketing
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => goToTop("/solutions#online_advertising")}
              >
                Online advertising
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>

          {/* Digital technology */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger
              onClick={() => goToTop("/solutions/digital-technology")}
              className="text-md"
            >
              Tech
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem
                onClick={() => goToTop("/solutions/digital-technology#prd")}
              >
                Product requirements design
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() =>
                  goToTop(
                    "/solutions/digital-technology#analytics_intelligence"
                  )
                }
              >
                Analytics intelligence
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() =>
                  goToTop("/solutions/digital-technology#digital_transform")
                }
              >
                Digital transform
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Case study and tech page */}
      {NAV_LINKS.map((item, index) => (
        <NavLink
          key={index}
          label={item.label}
          href={item.href}
        />
      ))}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="font-medium"
          >
            Company <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-40"
          align="end"
        >
          <DropdownMenuItem onClick={() => goToTop("/about")}>
            About
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => goToTop("/contact")}>
            Contact
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};
