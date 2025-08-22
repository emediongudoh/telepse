import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

// Local imports
import { DesktopMenu } from "./desktop-menu";
import { Logo } from "./logo";

export const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
        >
          <Menu className="size-8" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-60"
      >
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>

        <DesktopMenu className="flex flex-col items-center gap-6 px-4" />
      </SheetContent>
    </Sheet>
  );
};
