import { component$ } from "@builder.io/qwik";
import { DocumentHead, Link } from "@builder.io/qwik-city";
import ProjectInfoSite from "~/components/project_info_site/project-info-site";

export default component$(() => {
  const imagePaths = [];

  for (let i = 1; i < 8; i++) {
    imagePaths.push(`/images/IntraShare/is-${i}.png`);
  }

  return (
    <div>
      <ProjectInfoSite
        logoPath="/images/IntraShare/IntraShare Logo with Text Standard.svg"
        title="IntraShare"
        collaborators={[{ name: "@CybCon", link: "https://www.cybcon.dk/" }]}
        imagePaths={imagePaths}
        keywords={[
          ".Net",
          "Windows Services",
          "ASP.NET",
          "JQuery",
          "BootStrap",
          "Onboarding",
          "Live Product",
          "Customer Support",
        ]}
      >
        <p>
          Our team <Link href="https://www.cybcon.dk/">@CybCon</Link> has
          developed a comprehensive e-learning and CRM system that simplifies
          customer relationship management for smaller businesses. The system
          includes an associated scanner app that allows users to perform CRM
          actions using their smartphones. By scanning a bar or QR code placed
          on an object, users can quickly access important customer information
          and perform common tasks.
        </p>
        <p>
          The CRM module of our system enables businesses to streamline their
          customer management processes and improve customer satisfaction. This
          is achieved with a variety of features, including complex querying of
          data, dynamic generation of Excel-like tables, modules that allow for
          price differentiation on the same product, subscription-based
          products, and more. Additionally, our do-it-yourself report generator
          helps businesses generate custom reports to meet their specific needs.
        </p>
        <p>
          In association with this project, I also tried releasing a product,
          onborading of customers and continued collaboration, development and
          support with our customers.
        </p>
      </ProjectInfoSite>
    </div>
  );
});

export const head: DocumentHead = {
  title: "IntraShare",
};
