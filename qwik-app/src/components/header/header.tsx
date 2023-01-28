import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { Paths } from '~/shared/paths';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);
  const location = useLocation()

  const calculateIfSelectedPage = (page: string) => {
    if (page == Paths.Projects) {
      return location.pathname.includes(page) ? 'selected-header' : ''
    } else if (location.pathname === page) {
      return 'selected-header'
    } else {
      return ''
    }
  }

  return (
    <header
      window:onScroll$={(event, element) => {
        let currentScrollValue = window.scrollY;

        if (currentScrollValue !== 0) {
          element.classList.add('hidden')
        } else {
          element.classList.remove('hidden')
        }
      }}>
      <ul>
        <li>
          <a id={Paths.Home} href={Paths.Home} class={calculateIfSelectedPage(Paths.Home)} >
            Home
          </a>
          <a id={Paths.Projects} href={Paths.Projects} class={calculateIfSelectedPage(Paths.Projects)} >
            Projects
          </a>
          <a id={Paths.Contact} href={Paths.Contact} class={calculateIfSelectedPage(Paths.Contact)} >
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
});
