<script lang="ts">
	import type { ActionData, PageData } from './$types';
	import { applyAction, deserialize, enhance } from '$app/forms';
	import type { ActionResult } from '@sveltejs/kit';
	import { invalidateAll } from '$app/navigation';
	export let data: PageData;
  export let form: ActionData;
 console.log(data.post[0].name);


 let error: any;
	
	async function handleSubmit(event: { currentTarget: EventTarget & HTMLFormElement }) {
		const data = new FormData(event.currentTarget);
	  console.log("tt")
		const response = await fetch(event.currentTarget.action, {
			method: 'POST',
			body: data,
		});
	
		const result: ActionResult = deserialize(await response.text());
	
		if (result.type === 'success') {
			// rerun all `load` functions, following the successful update
			await invalidateAll();
		}
	
		applyAction(result);
	}



</script>


<h1>Blog</h1>
<svelte:head>
  <title>blog</title>
  <meta name="description" content="Description concise de votre page">
  <meta name="keywords" content="mot-clé1, mot-clé2, mot-clé3">
  <meta name="author" content="Nom de l'auteur">
  <meta name="robots" content="index, follow">
   <meta property="og:title" content="Titre Open Graph">
  <meta property="og:description" content="Description Open Graph">
 <!-- <meta property="og:image" content="URL_de_l_image">
  <meta property="og:url" content="URL_de_la_page">
  <meta property="og:type" content="website">-->
</svelte:head>


<div class="card-posts">
{#each data.post as onepost}

  <h1>Posts: {onepost.name}</h1>
{/each}
</div>
{#if form?.name}<p class="error">name field is required</p>{/if}
	{#if form?.description}<p class="error">description field is required</p>{/if}

<!--"action="?/register" "-->
<!--<form method="POST" use:enhance>
	<label>
		name
		<input name="name" type="text" value={form?.name ?? ''}>
	</label>
	<label>
		description
		<input name="description" type="text" value={form?.description ?? ''}>
	</label>
	<button>Add</button>
  <button formaction="?/register">Register</button>
</form>
-->


<form method="POST"  on:submit|preventDefault={handleSubmit}>
	<label>
		name
		<input name="name" type="text" value={form?.name ?? ''}>
	</label>
	<label>
		description
		<input name="description" type="text" value={form?.description ?? ''}>
	</label>
	<button>Add</button>
</form>