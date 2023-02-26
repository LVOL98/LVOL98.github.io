import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./standard-card.css?inline";

interface StandardCardProps {
  title: string;
}

export default component$((props: StandardCardProps) => {
  useStylesScoped$(styles);

  return (
    <div class="card-wrapper">
      <h1>{props.title}</h1>
      {/* <hr /> */}
      <Slot />
    </div>
  );
});
