<script>
import { onMount } from "svelte"
import { goto } from "$app/navigation"

export let data;

onMount(() => {
    console.log(data)
})

function go_to_post(slug) {
     goto(`/blog/${slug}`);
}

</script>


<div class="blog">
{#each data.posts as post}
    <div class="blog-page" on:click={() => go_to_post(post.slug)}>
    <h2>{post.title}</h2>
    <p>{post.description}</p>
    <p id="date">{post.date}</p>
    <p>{post.tags}</p>
</div>
{/each}
</div>
<style>
 .blog {
     margin: 20px;
 }

 .blog-page > h2 {

     margin: 3px;
     font-size: 24px;
 }

 .blog-page {
     padding: 10px;
     text-align: left;
     background-color: var(--bg-1);
     box-sizing: border-box;
     border: 1px solid var(--yellow-0);
     cursor: pointer;
 }

 .blog-page:hover {
     background-color: var(--fg-1);
     color: var(--bg-1);
 }
 .blog-page > #date {
     color: var(--gray-0);
 }

 .blog-page > p {
     padding: 0;
     margin: 0;
 }
</style>
