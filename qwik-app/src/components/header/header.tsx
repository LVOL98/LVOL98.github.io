import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { Paths } from '~/shared/paths';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <ul>
        <li>
          <a href={Paths.Home} class='welp' >
            Home
          </a>
          <a href={Paths.Projects} class='welp' >
            Projects
          </a>
        </li>
      </ul>
    </header>
  );
});
