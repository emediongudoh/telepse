import { Button } from "../ui/button";

// Local imports
import { BigTitle } from "../big-title";
import { SmallTitle } from "../small-title";

export const ContentCTA = () => {
  return (
    <div className="mx-auto my-16 flex max-w-4xl grid-cols-1 items-center justify-between gap-8 rounded-2xl border bg-white px-8 py-12 shadow">
      <BigTitle
        title="Win with content"
        isBold={false}
        isCentered={false}
      />

      <div className="border-l-4 border-l-[#F5B341] px-4">
        <SmallTitle title="creative" />
      </div>

      <div className="border-l-4 border-l-[#F5B341] px-4">
        <SmallTitle title="magnetic" />
      </div>

      <Button
        variant="default"
        size="lg"
        className="h-14"
      >
        Start
      </Button>
    </div>
  );
};
