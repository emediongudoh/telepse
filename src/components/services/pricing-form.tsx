import { CircleCheck } from "lucide-react";
import { SmallTitle } from "../small-title";
import { BigTitle } from "../big-title";

export const PricingForm = () => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      <div className="space-y-6 rounded-2xl border bg-white p-6 shadow">
        <SmallTitle
          title="Standard Plan"
          isCentered={false}
          isBold={false}
        />
        <p className="text-lg leading-loose sm:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus.
        </p>

        <BigTitle
          title="$350 / month"
          isCentered={false}
          isBold={false}
        />

        <ul className="space-y-6">
          <li className="flex items-center gap-2 text-lg sm:text-xl">
            <CircleCheck className="fill-black text-[#FEE600]" />3 Social Media
            Account
          </li>
          <li className="flex items-center gap-2 text-lg sm:text-xl">
            <CircleCheck className="fill-black text-[#FEE600]" />3 Social Media
            Account
          </li>
          <li className="flex items-center gap-2 text-lg sm:text-xl">
            <CircleCheck className="fill-black text-[#FEE600]" />
            Team Trainee
          </li>
          <li className="flex items-center gap-2 text-lg sm:text-xl">
            <CircleCheck className="fill-black text-[#FEE600]" />
            Free Platform Access
          </li>
          <li className="flex items-center gap-2 text-lg sm:text-xl">
            <CircleCheck className="fill-black text-[#FEE600]" />
            24 hour Customer Support
          </li>
        </ul>
      </div>

      <div className="space-y-6 rounded-2xl border bg-white p-6 shadow">
        <div className="bg-[#FEE600] text-center px-4 py-2">Most Popular</div>
        <SmallTitle
          title="Professional Plan"
          isCentered={false}
          isBold={false}
        />
        <p className="text-lg leading-loose sm:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus.
        </p>

        <BigTitle
          title="$500 / month"
          isCentered={false}
          isBold={false}
        />

        <ul className="space-y-6">
          <li className="flex items-center gap-2 text-lg sm:text-xl">
            <CircleCheck className="fill-black text-[#FEE600]" />5 Social Media
            Account
          </li>
          <li className="flex items-center gap-2 text-lg sm:text-xl">
            <CircleCheck className="fill-black text-[#FEE600]" />
            Team Trainee
          </li>
          <li className="flex items-center gap-2 text-lg sm:text-xl">
            <CircleCheck className="fill-black text-[#FEE600]" />
            Free Platform Access
          </li>
          <li className="flex items-center gap-2 text-lg sm:text-xl">
            <CircleCheck className="fill-black text-[#FEE600]" />
            24/7 Customer Support
          </li>
          <li className="flex items-center gap-2 text-lg sm:text-xl">
            <CircleCheck className="fill-black text-[#FEE600]" />
            Monthly Target
          </li>
        </ul>
      </div>

      <div className="space-y-6 rounded-2xl border bg-white p-6 shadow">
        <SmallTitle
          title="Enterprise Plan"
          isCentered={false}
          isBold={false}
        />
        <p className="text-lg leading-loose sm:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus.
        </p>

        <BigTitle
          title="$800 / month"
          isCentered={false}
          isBold={false}
        />

        <ul className="space-y-6">
          <li className="flex items-center gap-2 text-lg sm:text-xl">
            <CircleCheck className="fill-black text-[#FEE600]" />
            10 Social Media Account
          </li>
          <li className="flex items-center gap-2 text-lg sm:text-xl">
            <CircleCheck className="fill-black text-[#FEE600]" />
            Team Trainee
          </li>
          <li className="flex items-center gap-2 text-lg sm:text-xl">
            <CircleCheck className="fill-black text-[#FEE600]" />
            Free Platform Access
          </li>
          <li className="flex items-center gap-2 text-lg sm:text-xl">
            <CircleCheck className="fill-black text-[#FEE600]" />
            24 hour Customer Support
          </li>
        </ul>
      </div>
    </div>
  );
};
