import { component$ } from "@builder.io/qwik";
import { QwikMap } from "../../../../qwik-map/src/components/QwikMap";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1 class="text-lg">Client-Side Rendered Map</h1>
      <p class="mb-2">
        This map was rendered in your browser with a dynamic size of 40vw and
        40vh.
      </p>
      <QwikMap
        width="40vw"
        height="40vh"
        zoom={15}
        lat={52.5250701}
        lng={13.3977592}
      />
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik Map CSR Demo",
};
