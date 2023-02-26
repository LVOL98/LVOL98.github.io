import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './index.css?inline';
import { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <section>
      <p>
        Looking to get in touch?
      </p>
      <p>
        Whether you're looking for a developer for a job or freelance opportunity, or just want to have a chat, don't hesitate to reach out!
      </p>
      <p>
        If you have my email, feel free to drop me a message there. If not, you can also connect with me on any of my social media platforms.
      </p>
      <div class='standard-flex-row'>
        <a href='https://github.com/LVOL98'>
          <img src='/svg/github.svg' />
        </a>

        <a href='https://www.linkedin.com/in/lukas-vinther-offenberg-7818a3125/'>
          <img src='/svg/linkedin.svg' />
        </a>

        <a href='https://twitter.com/LVOL_'>
          <img src='/svg/twitter.svg' />
        </a>
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Contact',
};
