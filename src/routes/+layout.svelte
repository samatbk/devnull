<script>
 import Logo from "$lib/components/Logo.svelte"
</script>

<Logo/>

<nav>
    <a href="/">mutfak</a>
    <a href="/weekly">haftalik_bulten</a>
    <a href="/blog">blog</a>
    <a href="/events">etkinlikler</a>
    <a href="/book-club">kitap_kulubu</a>
    <a href="/about">hakkinda</a>
    <a href="#discord">discord</a>
</nav>

<slot></slot>

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

</style>
