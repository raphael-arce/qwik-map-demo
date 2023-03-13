import { component$ } from "@builder.io/qwik";
import { QwikMap } from "../../../../qwik-map/src/components/QwikMap";

export default component$(() => {
  return (
    <>
      <h1>Server-Side Rendered Map</h1>
      <div>
        <QwikMap
          width="720px"
          height="500px"
          zoom={15}
          lat={52.5250701}
          lng={13.3977592}
        />
      </div>
    </>
  );
});
