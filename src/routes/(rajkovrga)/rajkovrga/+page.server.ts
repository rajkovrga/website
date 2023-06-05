import type { Actions } from './$types';

export const actions = {
    send: async ({request}) => {
        const data = request.formData();
    }
} satisfies Actions;