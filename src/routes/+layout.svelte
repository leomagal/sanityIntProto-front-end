<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<main class="mx-8">
	{@render children()}
</main>

