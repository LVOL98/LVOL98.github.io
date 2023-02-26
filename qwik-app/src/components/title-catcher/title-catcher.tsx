import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./title-catcher.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <section>
      <img src="/me.jpg" />
      <h1>Lukas Vinther Offenberg</h1>
      <h3>@LVOL / @LVOL_ / @LVOL98</h3>
    </section>
  );
});
