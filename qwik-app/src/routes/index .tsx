import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import StandardCard from '~/components/cards/standard-card';
import TitleCatcher from '~/components/title-catcher/title-catcher';

export default component$(() => {
  return (
    <div class='center-column'>
      <TitleCatcher />
      <StandardCard>
        <h1>Quick Info</h1>
        <ul>
          <li>
            Age: {
              Math.abs(
                new Date(
                  new Date().getTime() - new Date('1998-02-27').getTime()
                ).getUTCFullYear() - 1970)
            }
          </li>
          <li>
            Current Position: Developer @CybCon
          </li>
          <li>
            Interest: Programming, Crypto, Martial Arts
          </li>
          <li>
            Currently Reading: How to Win Friends and Influence People - Dale Carnegie
          </li>
        </ul>
      </StandardCard>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'LVOL',
};
