import { TEAM_MEMBERS } from "@/constants";
import { PersonCard } from "./person-card";

export const TeamMembers = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 md:grid-cols-3">
      {TEAM_MEMBERS.map((item, index) => (
        <PersonCard
          key={index}
          image={item.image}
          name={item.name}
          role={item.role}
        />
      ))}
    </div>
  );
};
