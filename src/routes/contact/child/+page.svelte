<script lang="ts">
	import type { PageData } from './$types';
	let increment: number = 0
	let total: number = 0

	export let data: PageData;
    console.log(data)
    //let total = 0
	function handleclick() {
       increment++
    }
    $: {
		total = increment + 1;
		//console.log(total);
	}

	import { afterUpdate, getContext, onDestroy, onMount } from 'svelte';
	
	// Retrieve user store from context
	const user = getContext('user');

	// Code exécuté côté client
	onMount(() => {
    console.log('Le composant est monté dans le DOM');
  });

  afterUpdate(() => {
    console.log('Le composant a été mis à jour');
  });

  onDestroy(() => {
    console.log('Le composant va être détruit');
  });
  import Component from 'svelte';
  const datac = {
  message: "Bonjour, Svelte !",
};

const methods = {
  changeMessage() {
    datac.message = "Salut, Svelte !";
  },
};
const template = `
  <main>
    <h1>{message}</h1>
    <button on:click={changeMessage}>Changer le message</button>
  </main>
`;
// Créez le composant avec les options


  
</script>




<button on:click={()=>{handleclick()}} value="incrementez" />
    {increment}
    {total}

<!-- renders `1 + 2 = 3` 
<p>{data.a} + {data.b} = {data.c}</p>
-->