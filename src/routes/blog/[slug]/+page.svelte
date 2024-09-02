<script>
import ArrowLeft from "svelte-remixicon/RiArrowLeftFill.svelte"
import { pretty_date } from "$lib/date.js"

export let data;

</script>

<svelte:head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.6.1/github-markdown.min.css" integrity="sha512-heNHQxAqmr9b5CZSB7/7NSC96qtb9HCeOKomgLFv9VLkH+B3xLgUtP73i1rM8Gpmfaxb7262LFLJaH/hKXyxyA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<style>

    body {
        background-color: var(--bg-0-soft);
        font-size: 20px;
    }

	.markdown-body{
        font-family: "Courier New", sans-serif !important;
		box-sizing: border-box;
		min-width: 200px;
		max-width: 980px;
		margin: 0 auto;
		padding: 45px;
        /* font-family: "Iosevka Web"; */
        background-color: var(--bg-0);
        color: var(--fg-0);
        font-size: 24px;
	}

	.container {
		box-sizing: border-box;
		min-width: 200px;
		max-width: 980px;
		margin: 0 auto;
        padding-left: 45px;
        padding-right: 45px;
        padding-top: 20px;
        padding-bottom: 20px;
        font-family: "Iosevka Web";
        background-color: var(--bg-0);
        color: var(--fg-0);
        font-size: 24px;
	}

    .container > a {
        color: var(--green-1) !important;
        display: flex;
        justif-content: center;
        align-items: center;
    }

    .container > a:hover {
        color: var(--blue-1);
    }

     a {
        color: var(--green-1) !important;
        cursor: pointer;
    }

    blockquote {
        background-color: var(--bg-1);
        color: var(--fg-2) !important;
        padding: 10px !important;
        border-left: 4px solid var(--aqua-1) !important;
    }

    samp {
        color: var(--fg-3);
    }

	@media (max-width: 767px) {
		.container, .markdown-body {
			padding: 15px;
            font-size: 18px;
		}
	}

    h1 {
        font-size: 40px;
    }

    .tags {
        display: flex;
        align-items: center;
    }

    .tag {
        color: var(--bg-1);
        background-color: var(--fg-0);
        padding: 3px;
        margin: 5px;
        cursor: pointer;
    }

    #description {
        color: var(--fg-3);
        margin: 5px;
    }

    #date {
        color: var(--fg-4);
        margin: 5px;
    }

    #author {
        color: var(--green-0);
        text-decoration: underline;
        cursor: pointer;
    }

    h1::before,
    h2::before,
    h3::before,
    h4::before,
    h5::before,
    h6::before {
    content: "# ";
    }
</style>
</svelte:head>


<div class="container">
<a href="/blog"><ArrowLeft/>Geri Dön</a>
<h1>{data.meta.title}</h1>
<p>yazar: <span id="author">{data.meta.author}</span></p>
<p id="description">{data.meta.description}</p>
<p id="date">{pretty_date(data.meta.date)}</p>
<div class="tags">
{#each data.meta.tags as tag}
    <p class="tag">#{tag}</p>
{/each}
</div>
<hr>
</div>
<article class="markdown-body">
    <svelte:component this={data.content}/>
</article>
