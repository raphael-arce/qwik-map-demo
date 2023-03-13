import { component$ } from "@builder.io/qwik";
import { QwikMap } from "../../../../qwik-map/src/components/QwikMap";

export default component$(() => {
  return (
    <>
      <h1>Client-Side Rendered Map</h1>
      <QwikMap
        width="50vw"
        height="50vh"
        zoom={15}
        lat={52.5250701}
        lng={13.3977592}
      />
    </>
  );
});
