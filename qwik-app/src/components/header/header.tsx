import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { Paths } from '~/shared/paths';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);
  const headerId = 'lvol-header'

  return (
    <header id={headerId} 
    window:onLoad$={(event, element) => { 
      let selectedPage = document.getElementById(window.location.pathname)

      selectedPage?.classList.add('selected-header')
     }}
    window:onScroll$={(e) => {
      const currentScrollValue = window.scrollY;
      // @ts-ignore - target is the document 
      const header = e.target?.getElementById(headerId)
      if (currentScrollValue !== 0) {
        header.classList.add('hidden')
      } else {
        header.classList.remove('hidden')
      }
    }}>
      <ul>
        <li>
          <a id={Paths.Home} href={Paths.Home} >
            Home
          </a>
          <a id={Paths.Projects} href={Paths.Projects} >
            Projects
          </a>
          <a id={Paths.Contact} href={Paths.Contact} >
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
});
