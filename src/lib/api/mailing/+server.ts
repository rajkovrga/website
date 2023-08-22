import type { RequestHandler } from './$types';

export const POST = (() => {
    console.log("AAA")
}) satisfies RequestHandler;