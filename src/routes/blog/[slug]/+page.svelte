<script>
import ArrowLeft from "svelte-remixicon/RiArrowLeftFill.svelte"

export let data;

</script>

<svelte:head>
    <!-- <link href="http://a-dma.github.io/gruvbox-css/gruvbox-dark-medium.min.css" rel="stylesheet"/> -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.6.1/github-markdown.min.css" integrity="sha512-heNHQxAqmr9b5CZSB7/7NSC96qtb9HCeOKomgLFv9VLkH+B3xLgUtP73i1rM8Gpmfaxb7262LFLJaH/hKXyxyA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<style>


    body {
        background-color: var(--bg-0-soft);
        font-size: 20px;
    }

	.markdown-body{
		box-sizing: border-box;
		min-width: 200px;
		max-width: 980px;
		margin: 0 auto;
		padding: 45px;
        font-family: "Iosevka Web";
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
        color: var(--green-1);
        display: flex;
        justif-content: center;
        align-items: center;
    }

    .container > a:hover {
        color: var(--blue-1);
    }

    .markdown-body > a {
        color: var(--green-1) !important;

    }

	@media (max-width: 767px) {
		.container, .markdown-body {
			padding: 15px;
            font-size: 18px;
		}
	}

    h1 {
        font-size: 50px;
    }

</style>
</svelte:head>


<div class="container">
<a href="/blog"><ArrowLeft/>Geri Don</a>
<h1>{data.meta.title}</h1>
<p>{data.meta.description}</p>
<p>{data.meta.date}</p>
<p>{data.meta.tags}</p>
<hr>
</div>
<article class="markdown-body">
    <svelte:component this={data.content}/>
</article>
