<script>
	import Header from "$lib/components/partials/header/+header.svelte";
	import Footer from "$lib/components/partials/footer/+footer.svelte";

	export let imagePath = '/assets/header.jpg';
    export let altText = 'salade grecque';

</script>
<style>
	.carousel-header {
    height: 25%;
    width: 100%;
    position: relative;
  }

  .textonHeader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff; /* ajustez la couleur du texte en fonction de votre image */
    text-align: center;
  }

  .resized-image {
    width: 100%; /* Set the desired width */
    height: auto; /* Maintain aspect ratio */
  }
</style>
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
<slot></slot>

<Footer />
