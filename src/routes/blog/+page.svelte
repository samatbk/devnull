<script>
import { onMount } from "svelte"
import { goto } from "$app/navigation"
import { pretty_date } from "$lib/date.js"

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
        <p>yazar: <span style="color: var(--green-0)">{post.author}</span></p>
        <p>{post.description}</p>
        <p id="date">{pretty_date(post.date)}</p>
        <div class="tags">
        {#each post.tags as tag}
            <p class="tag">#{tag}</p>
        {/each}
        </div>
    </div>
{/each}
</div>
<style>
 .tags {
     display: flex;
     align-items: center;
 }

 .tag {
     color: var(--bg-1);
     background-color: var(--fg-2);
     padding: 3px;
     margin: 5px;
 }

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
     margin: 10px;
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
