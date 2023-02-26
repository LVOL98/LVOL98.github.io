import { component$ } from "@builder.io/qwik";
import { Paths } from "~/shared/paths";
import ProjectCard from "./project-card";

export default component$(() => {
  return (
    <div>
      <div class="standard-flex-row">
        <ProjectCard
          title="This Website"
          description="Exploring New Javascript Framework: @Qwik"
          textColor="black"
          imagePath="/images/qwik/qwik-logo.png"
          imgObjectFitOverride="contain"
          navTo={Paths.Site}
        />
        <ProjectCard
          title="Hikers App"
          description="Second year project @ITU"
          imagePath="/images/hikers-app/logo.png"
          imgObjectFitOverride="contain"
          navTo={Paths.HikersApp}
        />
        <ProjectCard
          title="CRM System n' Scanner App"
          description="CRM develop for @CybCon"
          imagePath="/images/IntraShare/intrashare-logo.png"
          textColor="black"
          imgObjectFitOverride="contain"
          navTo={Paths.IntraShare}
        />
      </div>
    </div>
  );
});
