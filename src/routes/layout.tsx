import { component$, Slot } from "@builder.io/qwik";

import Header from "../components/header/header";

export default component$(() => {
  return (
    <div class="flex flex-col items-center">
      <div class="w-[760px]">
        <main>
          <Header />
          <section class="flex flex-col items-center gap-4">
            <Slot />
          </section>
        </main>
        <footer class="flex justify-center mt-3">
          <a
            href="https://github.com/raphael-arce/qwik-map"
            target="_blank"
            rel="noopener"
            class="underline hover:no-underline"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
});
