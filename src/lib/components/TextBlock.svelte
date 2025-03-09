<script lang="ts">
    // import type { ProcessedTextContent } from './types'; // Adjust the import path as needed
  
    interface TextBlockProps {
        block: ProcessedTextContent;
    }

    let { block }: TextBlockProps = $props();
  
    function getTagFromStyle(style: string): string {
      switch (style) {
        case 'h1': return 'h1';
        case 'h2': return 'h2';
        case 'h3': return 'h3';
        case 'h4': return 'h4';
        case 'h5': return 'h5';
        case 'h6': return 'h6';
        case 'blockquote': return 'blockquote';
        default: return 'p';
      }
    }
  </script>
  

  <svelte:element this={getTagFromStyle(block.style)}>
    {#each block.textToRender as segment}
      {#if segment.href}
        <a href={segment.href}>{segment.text}</a>
      {:else}
        {segment.text}
      {/if}
    {/each}
  </svelte:element>
