import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import StandardCard from '~/components/cards/standard-card';
import TitleCatcher from '~/components/title-catcher/title-catcher';

// export const experience = [
//   {headline: 'Test1', body: 'test'},
//   {headline: 'Test2', body: 'test'},
//   {headline: 'Test3', body: 'test'},
// ]

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
      <StandardCard>
        <h1>
          Projects
        </h1>
      </StandardCard>
      {/* <Timeline items={experience} /> */}
    </div>
  );
});

export const head: DocumentHead = {
  title: 'LVOL',
};
