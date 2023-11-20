<script lang="ts">
	function handleMenu() {
        const ulMenu = document.getElementById('ul-menu-vertical');
        ulMenu?.classList.toggle('show');
	}
    function handleKeyDown(event : any) {
    if (event.key === 'Enter' || event.key === ' ') {
      handleMenu();
    }


   
  }
</script>
<style>
    @import 'style.scss';
</style>

<nav class="container">
    <ul class="ul-menu-pc">
        <li class="li-menu-pc"> 
            <a href="/">Home</a>
        </li>
        <li class="li-menu-pc">
            <a href="/recipes">All Recipes</a>
        </li>
        <li class="li-menu-pc">
            <a href="/members">Members</a>
        </li>
        <li class="li-menu-pc">
            <a href="/blog">Blog</a>
        </li>
        <li class="li-menu-pc">
            <a href="/contact">Contact</a>
        </li>
        <li class="li-menu-pc">
            <a href="/about">About</a>
        </li>
        <li class="li-menu-pc">
            <a href="/login">Log in</a>
        </li>
        <li class="li-menu-pc">
            <a href="/register">Register</a>
        </li>
    </ul>
    <div class="menu-small-screen">
            <span on:click={() => handleMenu()} on:keydown={(event) => handleKeyDown(event)} tabindex="0" role="button" class="material-symbols-outlined" aria-label="Menu">
                menu
            </span>
    </div>
    <ul id="ul-menu-vertical" class="ul-menu-vertical">
        <div class="show">
        <li class="li-menu-vertical">
            <a href="/">Home</a>
        </li>
        <li class="li-menu-vertical">
            <a href="/recipes">Recipes</a>
        </li>
        <li class="li-menu-vertical">
            <a href="/members">Members</a>
        </li>
        <li class="li-menu-vertical">
            <a href="/blog">Blog</a>
        </li>
        <li class="li-menu-vertical"> 
            <a href="/contact">Contact</a>
        </li>
        <li class="li-menu-vertical">
            <a href="/about">About</a>
        </li>
        <li class="li-menu-vertical">
            <a href="/login">Log in</a>
        </li>
        <li class="li-menu-vertical">
            <a href="/register">Register</a>
        </li>
        </div>
    </ul>
</nav>