import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import ProjectCard from '~/components/cards/project-card';
import StandardCard from '~/components/cards/standard-card';
import TitleCatcher from '~/components/title-catcher/title-catcher';

export default component$(() => {
  return (
    <div class='center-column'>
      <TitleCatcher />
      <h1>Hi and welcome</h1>
      <p>This is my personal, CV, website where I showcase what I've done throughout the years. Please, have a look around :D</p>
      <StandardCard title='Quick Info' >
        <ul style='text-align:left;'>
          <li>
            Age: {
              Math.abs(
                new Date(
                  new Date().getTime() - new Date('1998-02-27').getTime()
                ).getUTCFullYear() - 1970)
            }
          </li>
          <li>
            Current Position: Developer <a style=' color: var(--lvol-colour-1);' href='https://www.intrashare.dk'>@CybCon</a>
          </li>
          <li>
            Interest: Programming, Crypto, Martial Arts
          </li>
          <li>
            Currently Reading: How to Win Friends and Influence People - Dale Carnegie
          </li>
          <li>
            Education: Bachelor in software from <a style=' color: var(--lvol-colour-1);' href='https://www.itu.dk'>@ITU</a>
          </li>
        </ul>
      </StandardCard>
      <h1>Projects</h1>
      <div class='standard-flex-row'>
        <ProjectCard title='This Website' description='Exploring New Javascript Framework: @Qwik' imagePath='../public/test.png' navTo='site' />
        <ProjectCard title='Hikers App' description='Second year project @ITU' imagePath='../public/test.png' navTo='hikers_app' />
        <ProjectCard title="CRM System n' Scanner App" description='CRM develop for @CybCon' imagePath='../public/test.png' />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'LVOL',
};
