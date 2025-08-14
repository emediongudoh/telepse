import { CalendarClock } from "lucide-react";
import { Button } from "../ui/button";

// Local imports
import { BigTitle } from "../big-title";

export const SolutionsPitch = () => {
  return (
    <section className="bg-[#FEE600] py-8">
      <div className="wrapper flex flex-col items-center gap-8 px-4 py-8">
        <BigTitle
          title="The present and the future are digital. Gain ahead in marketing and
          transformation."
          isBold={false}
        />

        <Button
          variant="default"
          size="lg"
          className="h-14 w-fit border border-black text-lg hover:bg-transparent hover:text-black"
        >
          Book your free strategy <CalendarClock />
        </Button>
      </div>
    </section>
  );
};
