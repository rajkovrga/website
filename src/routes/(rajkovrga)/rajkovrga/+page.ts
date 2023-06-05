import type { PageLoad } from './$types';

export const load = (async () => {
	return {
		title: 'Rajko Vrga - Vrga DEV'
	};
}) satisfies PageLoad;
