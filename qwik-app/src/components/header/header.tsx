import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
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
