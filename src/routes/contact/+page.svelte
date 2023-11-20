<script>
	import InputText from "$lib/components/forms/input-text/+input-text.svelte";
    let a = 0;
	let b = 0;
	let total = 0;
	
	async function add() {
		const response = await fetch('/api/test', {
			method: 'POST',
			body: JSON.stringify({ a, b }),
			headers: {
				'content-type': 'application/json',
			},
		});
	
		total = await response.json();
	}


</script>

<form>
    <InputText message="Name"/>
</form>

<input type="number" bind:value={a}> +
<input type="number" bind:value={b}> =
{total}

<button on:click={add}>Calculate</button>