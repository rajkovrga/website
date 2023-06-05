// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { User } from '$lib/store';

declare global {
	namespace svelte.JSX {
		interface HTMLProps<T> {
			onclick_outside?: (e: CustomEvent) => void;
		}
	}
}

export {};