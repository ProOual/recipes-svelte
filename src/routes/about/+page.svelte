<script> 

import InputText from "$lib/components/forms/input-text/+input-text.svelte";
export let imagePath = '/assets/header.jpg';
  export let altText = 'salade grecque';

</script>
<style>
     @import './style.scss';
</style>
<svelte:head>
  <title>About</title>
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

<div class="container-content">
  <p>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
