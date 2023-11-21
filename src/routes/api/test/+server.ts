import { error, text } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
export const GET: RequestHandler = ({ url }) => {
	const min = Number(url.searchParams.get('min') ?? '0');
	const max = Number(url.searchParams.get('max') ?? '1');
	const d = max - min;
	if (isNaN(d) || d < 0) {
		throw error(400, 'min and max must be numbers, and min must be less than max');
	}
	const random = min + Math.random() * d;
	return new Response(String(random));
};

import { json } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	console.log('par la');
	const { a, b } = await request.json();
	return json(a + b);
};

export const fallback: RequestHandler = async ({ request }) => {
	return text(`I caught your ${request.method} request!`);
};
