<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
  <title>members</title>
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
{#if data.members}
  {#each data.members as user}
    <h1>members: {user.name}</h1>
  {/each}
{:else}
  <p>Aucun membre trouvé.</p>
{/if}


<p>dd</p>