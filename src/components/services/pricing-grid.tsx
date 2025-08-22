import { Plus } from "lucide-react";
import { Button } from "../ui/button";

// Local imports
import { Title } from "../title";
import { Paragraph } from "../paragraph";
import { SlickTitle } from "../slick-title";

export const PricingGrid = () => {
  return (
    <section
      className="section wrapper"
      id="pricing"
    >
      <SlickTitle title="Clear, simplified pricing" />
      <Paragraph
        align="center"
        size="lg"
      >
        Explore our social media marketing pricing, offered at your own pace
      </Paragraph>

      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
        {/* Standard plan */}
        <div className="space-y-6 rounded-2xl border bg-white p-6 shadow">
          <Title size="sm">Standard plan</Title>
          <Paragraph
            size="lg"
            color="muted"
          >
            Instagram, Facebook, X.
          </Paragraph>
          <Title>
            ₦600k{" "}
            <span className="text-muted-foreground text-xl sm:text-2xl">
              / 3 months
            </span>
          </Title>

          <div className="border"></div>

          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-lg sm:text-xl">
              <Plus /> 3 Social Media Account
            </li>
            <li className="flex items-center gap-2 text-lg sm:text-xl">
              <Plus /> 3 Social Media Account
            </li>
            <li className="flex items-center gap-2 text-lg sm:text-xl">
              <Plus />
              Team Trainee
            </li>
            <li className="flex items-center gap-2 text-lg sm:text-xl">
              <Plus />
              Free Platform Access
            </li>
          </ul>

          <Button
            variant="gray"
            size="xl"
            className="w-full"
          >
            Start
          </Button>
        </div>

        {/* Premium plan */}
        <div className="rounded-2xl border bg-white shadow">
          <Paragraph
            align="center"
            size="lg"
            className="bg-secondary-yellow rounded-tl-2xl rounded-tr-2xl p-3 text-center text-xl"
          >
            Most Popular
          </Paragraph>
          <div className="space-y-6 p-6">
            <Title size="sm">Premium Plan</Title>
            <Paragraph
              size="lg"
              color="muted"
            >
              Instagram, Facebook, X plus.
            </Paragraph>
            <Title>
              ₦900k{" "}
              <span className="text-muted-foreground text-xl sm:text-2xl">
                / 3 months
              </span>
            </Title>

            <div className="border"></div>

            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-lg sm:text-xl">
                <Plus />5 Social Media Account
              </li>
              <li className="flex items-center gap-2 text-lg sm:text-xl">
                <Plus />
                Team Trainee
              </li>
              <li className="flex items-center gap-2 text-lg sm:text-xl">
                <Plus />
                Free Platform Access
              </li>
              <li className="flex items-center gap-2 text-lg sm:text-xl">
                <Plus />
                24/7 Customer Support
              </li>
              <li className="flex items-center gap-2 text-lg sm:text-xl">
                <Plus />
                Monthly Target
              </li>
            </ul>

            <Button
              variant="telepse_secondary"
              size="xl"
              className="w-full"
            >
              Start
            </Button>
          </div>
        </div>

        {/* Professional plan */}
        <div className="space-y-6 rounded-2xl border bg-white p-6 shadow">
          <Title size="sm">Professional Plan</Title>
          <Paragraph
            size="lg"
            color="muted"
          >
            Instagram, Facebook, X, LinkedIn.
          </Paragraph>
          <Title>
            ₦1.2m{" "}
            <span className="text-muted-foreground text-xl sm:text-2xl">
              / 3 months
            </span>
          </Title>

          <div className="border"></div>

          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-lg sm:text-xl">
              <Plus />
              10 Social Media Account
            </li>
            <li className="flex items-center gap-2 text-lg sm:text-xl">
              <Plus />
              Team Trainee
            </li>
            <li className="flex items-center gap-2 text-lg sm:text-xl">
              <Plus />
              Free Platform Access
            </li>
            <li className="flex items-center gap-2 text-lg sm:text-xl">
              <Plus />
              24 hour Customer Support
            </li>
          </ul>

          <Button
            variant="gray"
            size="xl"
            className="w-full"
          >
            Start
          </Button>
        </div>
      </div>
    </section>
  );
};
