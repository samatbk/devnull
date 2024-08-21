<script>
 import Logo from "$lib/components/Logo.svelte"

 import { links } from "$lib/store.js"
 import { commit_id, commit_date } from "$lib/commit-info.js"

</script>

<Logo/>

<nav>
    <a href="/">mutfak</a>
    <a href="/weekly">haftalik_bulten</a>
    <a href="/blog">blog</a>
    <a href="/events">etkinlikler</a>
    <a href="/book-club">kitap_kulubu</a>
    <a href="/about">hakkinda</a>
    <a href="/projects">projeler</a>
</nav>

<slot></slot>

<p id="commit">Latest commit: <a href="{links.github}/commit/{commit_id}">{commit_id.slice(0, 8)}</a></p>
<p id="last-updated">Last updated: {commit_date}</p>

<svelte:head>
    <link rel="stylesheet" href="/css/index.css">
</svelte:head>

<style>

 a {
    color: #b8bb26;
     margin: 10px;
     font-size: 24px;
 }

 a:hover {
    color: #fabd2f;
 }

 #commit, #last-updated {
     color: #7c6f64;
 }

 #commit > a {
     font-size: 20px;
 }
</style>
