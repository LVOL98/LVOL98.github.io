import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './go-to-top-button.css?inline';

export default component$(() => {
  useStylesScoped$(styles);
  let buttonId = 'go-to-top-button';

  return (
    <button id={buttonId} class='hidden'
      window:onScroll$={(e) => {
        // @ts-ignore - target is the document 
        const button = e.target?.getElementById(buttonId)
        if (window.scrollY == 0) {
          button.classList.add('hidden')
        } else {
          button.classList.remove('hidden')
        }
      }}
      onClick$={() => { window.scrollTo({top: 0, behavior: 'smooth'}); }}
      >
        <img src='/svg/arrow-up-solid.svg' />
    </button>
  );
});
