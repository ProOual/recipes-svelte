<script>
	export let message = '';
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label>{message}</label>
<!-- svelte-ignore a11y-autofocus -->
<input type="text" autofocus placeholder={message} />

<slot />

<style>
	@import '../styles.scss';
</style>
