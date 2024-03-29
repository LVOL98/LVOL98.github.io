import { component$ } from "@builder.io/qwik";
import {
  QwikCity,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import Header from "./components/header/header";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";
import GoToTopButton from "./components/go_to_top_button/go-to-top-button";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCity> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  return (
    <QwikCity>
      <head>
        <meta charSet="utf-8" />
        <RouterHead />
      </head>
      <body lang="en">
        <Header />
        <RouterOutlet />
        <ServiceWorkerRegister />
        <GoToTopButton />
      </body>
    </QwikCity>
  );
});
