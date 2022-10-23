import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './title-catcher.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <section>
        <img src='../assets/me.jpg' />
        <h1>
            Lukas Vinther Offenberg
        </h1>
        <h2>
            Programming - Martial Arts
        </h2>
    </section>
  );
});
