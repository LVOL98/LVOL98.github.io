import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './footer.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <footer>
      <p>Lukas Vinther Offenberg</p>
      <ul>
        <li>
          <a href='https://github.com/LVOL98'>
            <img src='../assets/svg/github.svg' />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/lukas-vinther-offenberg-7818a3125/'>
            <img src='../assets/svg/linkedin.svg' />
          </a>
        </li>
        <li>
          <a href='https://twitter.com/LVOL_'>
            <img src='../assets/svg/twitter.svg' />
          </a>
        </li>
      </ul>
    </footer>
  );
});
