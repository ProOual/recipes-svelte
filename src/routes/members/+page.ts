import type { PageLoad } from './$types';
import { members } from '$lib/db';

export const load: PageLoad  = () => {

		return {members};
	
};
