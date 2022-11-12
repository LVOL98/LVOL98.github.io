import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { QwikLogo } from '~/components/icons/qwik';

export default component$(() => {
  return (
    <div class='center-column'>
      <a href='https://qwik.builder.io/'>
        <QwikLogo />
      </a>
      <h1>The HTML first framework</h1>
      <p>
        Due to other work-related tasks I had to learn a react-like JavaScript framework. So, I thought why not update my personal website with the most interesting framework I find?

        Here we are with Qwik, a html first framework focused providing fast time to interactive load time. This is achieved by 
      </p>
      <p>Hosted with <a href='https://pages.github.com/'>Github Pages</a></p>
      <h1>Links</h1>
      <h2>Gallery</h2>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'LVOL',
};
