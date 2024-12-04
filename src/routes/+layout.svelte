<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from "mode-watcher";
	import Sun from "svelte-radix/Sun.svelte";
  	import Moon from "svelte-radix/Moon.svelte";
  	import { toggleMode } from "mode-watcher";
  	import { Button } from "$lib/components/ui/button/index.js";

	let { children } = $props();
</script>

<main class="mx-8">
	<!-- Monitors dark / light mode change -->
	<ModeWatcher/>
	
	<Button variant="outline" on:click={toggleMode} size="icon">
		<Sun color="black" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
  		<Moon color="white" class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
  		<span class="sr-only">Toggle theme</span>
	</Button>

	{@render children()}
</main>

	
