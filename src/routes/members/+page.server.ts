import type { Actions, PageServerLoad } from './$types';

import { members } from '$lib/db';

export const load: PageServerLoad = () => {
	return { members };
};
