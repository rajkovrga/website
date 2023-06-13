<script lang="ts">
  import { clickOutside } from "$lib/events/clickOutside";

  const items: NavItem[] = [
    {
      title: "Home",
      id: "home",
      isActive: true,
    },
    {
      title: "Skills",
      id: "skills",
      isActive: false,
    },
    {
      title: "Experience",
      id: "experience",
      isActive: false,
    },
    {
      title: "Projects",
      id: "projects",
      isActive: false,
    },
    {
      title: "Contact",
      id: "contact",
      isActive: false,
    },
  ];
  
  let isVisiblity: boolean = false;
  const toggleMenu = () => {
    isVisiblity = !isVisiblity;
  };

  const clickNavItem = () => {
    isVisiblity = false;
  };
</script>

<nav
  class="bg-white fixed w-full z-50 top-0 shadow"
  use:clickOutside
  on:click_outside={clickNavItem}
>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 justify-between">
      <div class="flex">
        <div class="flex flex-shrink-0 items-center">
          <img
            class="block h-8 w-auto lg:hidden"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <img
            class="hidden h-8 w-auto lg:block"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
        </div>
      </div>
      <div class="hidden md:ml-6 md:flex md:items-center">
        <div
          id="scrollspy1"
          class="hidden sm:ml-6 md:flex md:space-x-8 [--scrollspy-offset:220] md:[--scrollspy-offset:70]"
        >
          {#each items as item}
            <a
              href="#{item.id}"
              class="inline-flex items-center py-4 px-3 text-sm font-semibold text-gray-600 {item.isActive
                ? 'active'
                : ''}">{item.title}</a
            >
          {/each}
          <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
        </div>
      </div>
      <div class="-mr-2 flex items-center md:hidden">
        <!-- Mobile menu button -->
        <button
          on:click={toggleMenu}
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            /></svg
          >
        </button>
      </div>
    </div>
  </div>

  <div
    class="{isVisiblity ? '' : 'hidden'} w-full md:hidden md:w-auto "
  
  >
    <div class="space-y-1 pb-3 pt-2">
      {#each items as item}
        <a
          href="#{item.id}"
          on:click={clickNavItem}
          class="block border-transparent py-2 pl-3 pr-4 text-base text-center font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 {item.isActive
            ? 'active'
            : ''}">{item.title}</a
        >
      {/each}
    </div>
  </div>
</nav>
