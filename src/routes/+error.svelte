<script>
	import { page } from '$app/stores';
	console.log($page);
</script>

<p>La page que vous recherché n'existe pas</p>
<h1>{$page.status}: {$page.error?.message}</h1>
