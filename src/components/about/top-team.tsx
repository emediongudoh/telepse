import { Title } from "../title";
import { TeamMembers } from "./team-members";

export const TopTeam = () => {
  return (
    <section className="section tiny--wrapper">
      <Title
        align="center"
        size="lg"
        weight="normal"
      >
        Top team
      </Title>

      <TeamMembers />
    </section>
  );
};
