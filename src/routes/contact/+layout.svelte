<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	
	import type { LayoutData } from './$types';
	
	export let data: LayoutData;
	
	// Create a store and update it when necessary...
	const user = writable();
	$: user.set("dd-test");
	
	// ...and add it to the context for child components to access
	setContext('user', user);
</script>
<main>

</main>

<aside>
    <slot />

	<h2>More posts</h2>
		<!-- +page.svelte is rendered in this <slot> -->
</aside>

<div data-sveltekit-preload-data>
	<!-- these links will be preloaded -->
	<a href="/a">a</a>
	<a href="/b">b</a>
	<a href="/c">c</a>

	<div data-sveltekit-preload-data="false">
		<!-- these links will NOT be preloaded -->
		<a href="/d">d</a>
		<a href="/e">e</a>
		<a href="/f">f</a>
	</div>
</div>