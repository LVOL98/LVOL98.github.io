import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import MasonryGallery from "../masonry_gallery/masonry_gallery";
import styles from "./project-info-site.css?inline";

interface Collaborator {
  name: string;
  link?: string;
}

interface ProjectInfoSiteProps {
  logoPath: string;
  title: string;
  collaborators?: Array<Collaborator>;
  imagePaths: Array<string>;
  keywords: Array<string>;
}

export default component$((props: ProjectInfoSiteProps) => {
  useStylesScoped$(styles);

  return (
    <div>
      <img src={props.logoPath} />
      <h1>{props.title}</h1>
      <h2>
        {props?.collaborators?.map((collaborator, index) => (
          <>
            {collaborator.link ? (
              <Link href={collaborator.link}>{collaborator.name}</Link>
            ) : (
              collaborator.name
            )}
            {index < (props.collaborators?.length ?? 0) - 1 ? " & " : ""}
          </>
        ))}
      </h2>
      <Slot />
      <div class="keyword-container">
        {props.keywords.map((keyword) => (
          <div class="keyword">{keyword}</div>
        ))}
      </div>
      {/* <p>{props.description}</p> */}
      <MasonryGallery imagePaths={props.imagePaths} />
    </div>
  );
});
