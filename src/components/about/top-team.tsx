import { teamMembers } from "@/constants";
import { BigTitle } from "../big-title";
import { PersonCard } from "./person-card";

export const TopTeam = () => {
  return (
    <section className="mx-auto flex max-w-4xl flex-col gap-8 px-4 py-8 sm:py-16">
      <BigTitle title="Top team" />

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {teamMembers.map((item, index) => (
          <PersonCard
            key={index}
            image={item.image}
            name={item.name}
            role={item.role}
          />
        ))}
      </div>
    </section>
  );
};
