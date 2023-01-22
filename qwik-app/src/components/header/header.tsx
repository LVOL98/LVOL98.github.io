import { component$, useSignal, useStylesScoped$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { Paths } from '~/shared/paths';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);
  const headerId = 'lvol-header'

  return (
    <header id={headerId} 
    window:onScroll$={(e) => {
      const currentScrollValue = window.scrollY;
      // @ts-ignore - target is the document 
      const header = e.target?.getElementById(headerId);
      if (currentScrollValue !== 0) {
        header.classList.add('hidden');
      } else {
        header.classList.remove('hidden');
      }
    }}>
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
