import type { LayoutLoad } from './$types';
export const load: LayoutLoad = async ({ parent }) => {
	const a: any = await parent().then((value) => value);
	return { b: a + 1 };
};
