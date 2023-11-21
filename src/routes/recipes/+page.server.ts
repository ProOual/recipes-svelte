import type { Actions, PageServerLoad } from './$types';

import { recipes } from '$lib/db';

export const load: PageServerLoad = () => {
	return { recipes };
};
