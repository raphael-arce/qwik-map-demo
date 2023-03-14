import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const { url } = useLocation();

  return (
    <header class="flex flex-row items-baseline p-4">
      <div class="navbar bg-base-100">
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl">Qwik Map</a>
        </div>
        <div class="flex-none">
          <div class="tabs">
            <a
              class={`tab tab-bordered ${
                url.pathname === "/" ? "tab-active" : null
              }`}
              href="/"
            >
              SSR'd Map
            </a>
            <a
              class={`tab tab-bordered ${
                url.pathname === "/csr/" ? "tab-active" : null
              }`}
              href="/csr/"
            >
              CSR'd Map
            </a>
          </div>
        </div>
      </div>
    </header>
  );
});
