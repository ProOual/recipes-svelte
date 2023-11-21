<script>
	import Header from '$lib/components/partials/header/+header.svelte';
	import Footer from '$lib/components/partials/footer/+footer.svelte';
	
	export let imagePath = '/assets/header.jpg';
	export let altText = 'salade grecque';
</script>

<Header />
<!--<div class="carousel-header">
	<picture>
	  <source type="image/jpeg" srcset={imagePath}>
	  <img class="resized-image" src={imagePath} alt={altText} loading="lazy">
	  <div class="textonHeader">
		<p>Bonjour</p>
	  </div>
	</picture>
  </div>-->
<slot />

<Footer />
