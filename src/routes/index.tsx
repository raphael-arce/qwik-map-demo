import { component$ } from "@builder.io/qwik";
import { QwikMap } from "../../../qwik-map/src/components/QwikMap";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1 class="text-lg">Server-Side Rendered Map</h1>
      <p class="mb-2">
        This map was rendered in your browser with a fixed size of 720px width
        and 400px height.
      </p>
      <div>
        <QwikMap
          width="720px"
          height="400px"
          zoom={15}
          lat={52.5250701}
          lng={13.3977592}
        />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik Map SSR Demo",
};
