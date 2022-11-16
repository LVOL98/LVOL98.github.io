import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { QwikLogo } from '~/components/icons/qwik';
import ProjectInfoSite from '~/components/project_info_site/project-info-site';

export default component$(() => {
  let keywords = ['Qwik', 'NodeJS', 'Github Pages', 'Github Actions']

  return (
    <section>
      <ProjectInfoSite 
        logoPath='/public/images/qwik/qwik-logo.png'
        title='A Personal Website, With Qwik'
        imagePaths={['']}
        keywords={keywords}
      >
        <p>
          When deciding to make my personal website, I wanted to use a technology that was new and in a "framework family" I never had used before!
        </p>
        <p>
          Having never used a React-like framework, I decided to see if that "framework family" had any interesting thing to offer, where I found Qwik a "HTML first framework" offering fast time to interactivity
        </p>
      </ProjectInfoSite>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'LVOL',
};
