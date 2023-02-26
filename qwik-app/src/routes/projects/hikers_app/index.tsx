import { component$ } from '@builder.io/qwik';
import { DocumentHead, Link } from '@builder.io/qwik-city';
import ProjectInfoSite from '~/components/project_info_site/project-info-site';

export default component$(() => {
  let imagePaths = []

  for (let i = 1; i < 6; i++) {
    imagePaths.push(`/images/hikers-app/ha-${i}.png`)
  }

  return (
    <div>
      <ProjectInfoSite
        logoPath='/images/hikers-app/logo.png'
        title="Hiker's App"
        collaborators={[
          { name: '@Yamatomichi', link: 'https://www.yamatomichi.com/en/' }, 
          { name: '@ITU', link: 'https://www.itu.dk/' },
        ]}
        imagePaths={imagePaths}
        keywords={['Flutter', 'Firebase', 'Large Teams', 'Remote Collaboration', 'Agile development', 'SCRUM']}
      >
        <p>
          During our second-year project at <Link href='www.ITU.dk'>@ITU</Link>, we had the exciting opportunity to collaborate with the Japanese hiking clothes company, <Link href='https://www.yamatomichi.com/en/'>@Yamatomichi</Link>. Our objective was to develop a mobile app in Flutter that would enhance the hiking experience for users.
        </p>
        <p>
          Our team conceptualized an app that combined the best features of Facebook Groups and Facebook Events. The app allowed users to create and organize hiking events, and invite other hikers to join. Additionally, users could create public events where anyone could sign up to participate.
        </p>
        <p>
          To make the app more user-friendly, we incorporated various filters that enabled users to search for events based on their location, difficulty level, and other criteria. Furthermore, we added a unique feature that allowed users to create a pack list of necessary items for the hike, making it easier for hikers to prepare for their adventure.
        </p>
        <p>
          Overall, our collaboration with <Link href='https://www.yamatomichi.com/en/'>@Yamatomichi</Link> was a success, resulting in a user-friendly mobile app.
        </p>
      </ProjectInfoSite>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Hiker's App",
};
