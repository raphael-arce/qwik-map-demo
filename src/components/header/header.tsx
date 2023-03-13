import { component$, useStylesScoped$ } from "@builder.io/qwik";

import styles from "./header.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="logo">
        <a
          href="https://github.com/raphael-arce/qwik-map"
          target="_blank"
          rel="noopener"
        >
          Qwik Map
        </a>
      </div>
      <ul>
        <li>
          <a href="/ssr">SSR'd Map (fixed size)</a>
        </li>
        <li>
          <a href="/csr">CSR'd Map (dynamic sizes)</a>
        </li>
      </ul>
    </header>
  );
});
