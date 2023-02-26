import { component$ } from "@builder.io/qwik";
import { DocumentHead, Link } from "@builder.io/qwik-city";
import ProjectInfoSite from "~/components/project_info_site/project-info-site";
import { Paths } from "~/shared/paths";

export default component$(() => {
  return (
    <section>
      <ProjectInfoSite
        logoPath="/images/qwik/qwik-logo.png"
        title="A Personal Website, With Qwik"
        imagePaths={[""]}
        keywords={["Qwik", "NodeJS", "Github Pages", "Github Actions"]}
      >
        <p>
          Creating my personal website was an opportunity to explore new
          technologies in a framework that I hadn't used before. While I was
          familiar with frameworks like{" "}
          <Link href="https://dotnet.microsoft.com/en-us/">.NET</Link> and{" "}
          <Link href="https://flutter.dev/">Flutter</Link>, I wanted to see what
          else was out there.
        </p>
        <p>
          After some research, I discovered{" "}
          <Link href="https://qwik.builder.io/">Qwik</Link>, an "HTML first
          framework" that offers a fast time to interactivity. As someone who
          had never used a React-like framework before, I was intrigued by what{" "}
          <Link href="https://qwik.builder.io/">Qwik</Link> had to offer.{" "}
          <Link href="https://qwik.builder.io/">Qwik</Link> also allowed me to
          dive deeper into website performance optimization, which will help me
          in the future.
        </p>
        <p>
          Feel free to take a look around my website, and if you have any
          feedback or would like to get in touch, you can find my{" "}
          <Link href={Paths.Contact}>contact information</Link> on the{" "}
          <Link href={Paths.Contact}>contact page</Link>.
        </p>
      </ProjectInfoSite>
    </section>
  );
});

export const head: DocumentHead = {
  title: "Site - Qwik",
};
