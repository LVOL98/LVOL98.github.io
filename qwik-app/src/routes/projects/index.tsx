import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import ProjectList from "~/components/cards/projects/project-list";

export default component$(() => {
  return <ProjectList />;
});

export const head: DocumentHead = {
  title: "Projects",
};
