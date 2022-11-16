import { component$, useStylesScoped$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import ProjectCard from '~/components/cards/project-card';
import StandardCard from '~/components/cards/standard-card';
import TitleCatcher from '~/components/title-catcher/title-catcher';
import styles from './index.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class='center-column'>
      <TitleCatcher />
      <h1>Hi and welcome</h1>
      <p>This is my personal, CV, website where I showcase what I've done throughout the years. Please, have a look around :D</p>
      <StandardCard title='Quick Info' >
        <table>
          <tbody>
            <tr>
              <td>🎂 Age</td>
              <td>
                {
                  Math.abs(
                    new Date(
                      new Date().getTime() - new Date('1998-02-27').getTime()
                    ).getUTCFullYear() - 1970)
                }
              </td>
            </tr>
            <tr>
              <td>💼 Current Position</td>
              <td>
                Developer <a href='https://www.intrashare.dk'>@CybCon</a>
              </td>
            </tr>
            <tr>
              <td>👀 Interests</td>
              <td>Programming, Crypto, Martial Arts</td>
            </tr>
            <tr>
              <td>📚 Currently Reading</td>
              <td>How to Win Friends and Influence People - Dale Carnegie</td>
            </tr>
            <tr>
              <td>🎓 Education</td>
              <td>Bachelor in software from <a href='https://www.itu.dk'>@ITU</a></td>
            </tr>
          </tbody>
        </table>
      </StandardCard>
      <h1>Projects</h1>
      <div class='standard-flex-row'>
        <ProjectCard 
          title='This Website' 
          description='Exploring New Javascript Framework: @Qwik' 
          textColor='black' 
          imagePath='../public/images/qwik/qwik-logo.png' 
          imgObjectFitOverride='contain'
          navTo='site' 
        />
        <ProjectCard 
          title='Hikers App' 
          description='Second year project @ITU' 
          imagePath='../public/images/hikers-app/logo.png' 
          imgObjectFitOverride='contain'
          navTo='hikers_app' 
          />
        <ProjectCard 
          title="CRM System n' Scanner App" 
          description='CRM develop for @CybCon' 
          textColor='black' 
          imgObjectFitOverride='contain'
          imagePath='/public/images/intrashare/intrashare-logo.png' 
        />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'LVOL',
};
