import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './index.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <section>
      <p>Want to get in touch?</p>
      <p>Need a developer for a job, freelance gig, a short chat or anything else, then feel free to reach out!</p>
      <p>If you manage to find my email, then feel free to contact me there otherwise you can try any of my social media</p>

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
