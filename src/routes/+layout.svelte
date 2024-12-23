<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from "mode-watcher";
	import Sun from "svelte-radix/Sun.svelte";
  	import Moon from "svelte-radix/Moon.svelte";
	import ArrowRight from "svelte-radix/ArrowRight.svelte";
  	import { toggleMode } from "mode-watcher";
  	import { Button } from "$lib/components/ui/button/index.js";

	import { onMount } from 'svelte';
    import { postsStore, fetchPosts } from '../stores/postsStore';

    onMount(() => {
        fetchPosts();
    });


	let { children } = $props();
</script>

<!-- Monitors dark / light mode change -->
<ModeWatcher/>

<!-- top nav bar -->
<nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
	<!-- Logo left -->
	<div class="flex items-center flex-shrink-0 text-white mr-6">
	  <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
	  <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
	</div>

	<!-- Links in the middle -->
	<div class="font-bold lg:flex lg:justify-center lg:flex-grow space-x-4">
		<a href="/" class="text-teal-200 hover:text-white">HOME</a>
		<a href="/blog" class="text-teal-200 hover:text-white">BLOG</a>
		<a href="/q_and_a" class="text-teal-200 hover:text-white">Q&A</a>
	</div>

	<!-- Comunitade right -->
	<div class="ml-auto">
		<a href="#responsive-header" class="text-teal-200 hover:text-white inline-flex items-center">
			Comunitade&nbsp;
			<ArrowRight/>
		</a>
	</div>
</nav>
	

	<Button variant="outline" on:click={toggleMode} size="icon">
		<Sun  class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
		  <Moon  class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
		  <span class="sr-only">Toggle theme</span>
	</Button>


<!-- page content -->
<main class="mx-8">
	{@render children()}
</main>

<!-- bottom nav bar -->
<nav class="fixed bottom-0 left-0 w-full flex items-center justify-between flex-wrap bg-teal-500 p-6">
	<!-- Logo left -->
	<div class="flex items-center flex-shrink-0 text-white mr-6">
		<svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
			<path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
	  	</svg>
	  	<span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
		<div class="text-sm pl-[3em]">
			Desenvolvido e mantido pela <br>comunidade brasileira da Radix DLT.
		</div>
	  	
	</div>

	<!-- Links right -->
	<div class="font-bold flex space-x-4 ml-auto pr-[3em]">
		<a href="/" class="text-teal-200 hover:text-white">HOME</a>
		<a href="/blog" class="text-teal-200 hover:text-white">BLOG</a>
		<a href="/q_and_a" class="text-teal-200 hover:text-white">Q&A</a>
	</div>
</nav>