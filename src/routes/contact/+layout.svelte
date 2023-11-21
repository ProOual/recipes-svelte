<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	import type { LayoutData } from './$types';

	export let data: LayoutData;

	// Create a store and update it when necessary...
	const user = writable();
	$: user.set('dd-test');

	// ...and add it to the context for child components to access
	setContext('user', user);
</script>

	<slot />
