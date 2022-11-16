import { component$, Slot, useStylesScoped$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { QwikLogo } from '~/components/icons/qwik';
import Gallery from '../gallery/gallery';
import styles from './project-info-site.css?inline';

interface ProjectInfoSiteProps {
  logoPath: string,
  title: string,
  collaborators?: Array<string>,
  imagePaths: Array<string>,
  keywords: Array<string>,
}

export default component$((props: ProjectInfoSiteProps) => {
  useStylesScoped$(styles);

  return (
    <div>
      <img src={props.logoPath} />
      <h1>{props.title}</h1>
      <h2>{props.collaborators
        ? props.collaborators.reduce((previous, current) => previous += ` & ${current}`)
        : ''}
      </h2>
      <Slot />
      <div class='keyword-container'>
        {props.keywords.map((keyword) =>
          <div class='keyword'>{keyword}</div>
        )}
      </div>
      {/* <p>{props.description}</p> */}
      <Gallery imagePaths={props.imagePaths} />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'LVOL',
};
