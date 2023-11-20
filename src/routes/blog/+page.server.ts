import { getPost } from '$lib/db'
import * as db from '$lib/db';
import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';
export const load: PageServerLoad = async ({ params }) => {
	return {
		post: await db.getPost()
	};
};

export const actions = {

	//pas ensemble default et et les autres
	default: async ({ cookies, request }) => {
		// TODO log the user in
		

		const data = await request.formData()
		
		const name = data.get('name');
		const description = data.get('description');

		if (!name ) {
			console.log("error")
			return fail(400, { name, incorrect: true });
		}

		if (!description) {
			return fail(400, { description, incorrect: true });
		}
		await db.createPost(name as string,description as string)

	},
/*	login: async (event) => {
		// TODO log the user in
	},
	register: async (event) => {
		// TODO register the user
	}*/
} satisfies Actions;


//export const ssr = false;
//export const csr = false;
