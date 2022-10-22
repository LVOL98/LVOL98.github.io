import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="logo">
        {/* <a href="https://qwik.builder.io/" target="_blank">
          <QwikLogo />
        </a> */}
      </div>
      <ul>
        <li>
          <a>
            CV
          </a>
        </li>
        <li>
          <a>
            Programming
          </a>
        </li>
        <li>
          <a>
            Martial Arts
          </a>
        </li>
      </ul>
    </header>
  );
});
