import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import ProjectInfoSite from '~/components/project_info_site/project-info-site';

export default component$(() => {
  let imagePaths = []

  for (let i = 1; i < 6; i++) {
    imagePaths.push(`/assets/images/hikers-app/ha-${i}.png`)
  }

  return (
    <div>
      <ProjectInfoSite 
        logoPath='/assets/images/hikers-app/logo.png' 
        title="Hiker's App" 
        collaborators={['@Yamatomichi', '@ITU']}
        imagePaths={imagePaths} 
        keywords={['Flutter', 'Firebase', 'Large Teams', 'Remote Collaboration', 'Agile development', 'SCRUM']}
      >
        <p>During our second year project <a href='https://www.itu.dk'>@ITU</a> we collaborated with the Japanese hiking clothes company <a href='https://www.yamatomichi.com/en/'>@Yamatomichi</a> in developing a mobile app in Flutter</p>

        <p>The app was a mismatch of Facebook Groups and Facebook Events. A user could create an hike even and send invitation out to other hikers on the app, or create an event everyone could sign up for. Several ways of filtering events was provided to the users, as well as a "create a pack list" to show people what they needed to bring</p>
      </ProjectInfoSite>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'LVOL',
};
