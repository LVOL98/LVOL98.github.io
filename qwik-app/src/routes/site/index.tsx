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
          Due to other work-related tasks I had to learn a react-like JavaScript framework. So, I thought why not update my personal website with the most interesting framework I find?
        </p>
        <p>
          Here we are with Qwik, a html first framework focused providing fast time to interactive load time. This is achieved by 
        </p>
      </ProjectInfoSite>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'LVOL',
};
