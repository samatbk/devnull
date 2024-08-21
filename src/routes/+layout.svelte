<script>
 import Logo from "$lib/components/Logo.svelte"

 import MoonIcon from "svelte-remixicon/RiMoonFill.svelte"
 import SunIcon from "svelte-remixicon/RiSunFill.svelte"

 import { links, theme } from "$lib/store.js"
 import { commit_id, commit_date } from "$lib/commit-info.js"

 function change_theme() {
     theme.update(current_theme => current_theme === "dark" ? "light" : "dark");
 }

</script>

<button on:click={change_theme} id="theme-selector">
{#if $theme == "dark"}
    <SunIcon/>
{:else}
    <MoonIcon/>
{/if}
</button>

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
    <link rel="stylesheet" href="/css/{$theme}-theme.css">
</svelte:head>

<style>

 a {
     color: var(--green-1);
     margin: 10px;
     font-size: 24px;
 }

 a:hover {
    color: var(--yellow-1);
 }

 #commit, #last-updated {
     color: var(--bg-4);
 }

 #commit > a {
     font-size: 20px;
 }

 #theme-selector {
    background-color: var(--fg-0);
    color: var(--bg-0);
    position: absolute;
    z-index: 99;
    top: 15px;
    right: 15px;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
 }

 #theme-selector:hover {
   color: var(--bg-2);
 }
</style>
