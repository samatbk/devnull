<script>
 import { page } from "$app/stores"
 import { pretty_date_with_time } from "$lib/date.js"

 import Logo from "$lib/components/Logo.svelte"
 import Sidebar from "$lib/components/Sidebar.svelte"

 import MoonIcon from "svelte-remixicon/RiMoonFill.svelte"
 import SunIcon from "svelte-remixicon/RiSunFill.svelte"

 import MenuIcon from "svelte-remixicon/RiMenuFill.svelte"

 import { links, theme, show_sidebar} from "$lib/store.js"
 import { commit_id, commit_date } from "$lib/commit-info.js"

 import { onMount, beforeUpdate } from "svelte"
 function change_theme() {
     theme.update(current_theme => current_theme === "dark" ? "light" : "dark");
     localStorage.setItem("theme", $theme);
 }

 function toggle_sidebar() {
     show_sidebar.update((state) => !state);
 }

 beforeUpdate(() => {
     theme.update(() => localStorage.getItem("theme") || "dark");
 });

 $: url = $page.route.id;
 $: is_blog_post = url && url != "/blog" && url.includes("blog");


</script>

<!-- <p>{url != "/blog" && url.includes("blog")}</p> -->

<button on:click={change_theme} id="theme-selector">
{#if $theme == "dark"}
    <SunIcon/>
{:else}
    <MoonIcon/>
{/if}
</button>

<button id="sidebar-button" class={$show_sidebar ? "hide" : ""} on:click={toggle_sidebar}>
    <MenuIcon/>
</button>

{#if is_blog_post}
    <slot/>
{:else}
<Logo/>

<Sidebar/>

<nav>
    <a href="/">mutfak</a>
    <a href="/weekly">haftalik_bulten</a>
    <a href="/blog">blog</a>
    <a href="/events">etkinlikler</a>
    <a href="/book-club">kitap_kulubu</a>
    <a href="/about">hakkinda</a>
</nav>

<slot></slot>

<p id="commit">Son commit: <a href="{links.github}/commit/{commit_id}">{commit_id.slice(0, 8)}</a></p>
<p id="last-updated">Son guncelleme tarihi: {pretty_date_with_time(commit_date)}</p>
{/if}

<svelte:head>
    {#if !is_blog_post}
    <link rel="stylesheet" href="/css/index.css">
    {/if}

    <link rel="stylesheet" href="/css/{$theme}-theme.css">
</svelte:head>

<style>

 a {
     color: var(--green-1);
     margin: 10px;
     font-size: 24px;
 }

 .hide {
     display: none !important;
 }

 a:hover {
    color: var(--yellow-1);
 }

 #commit {
     display: flex;
     justify-content: center;
     align-items: center;
 }

 #commit, #last-updated {
     color: var(--bg-4);
     margin: 0px;
 }

 #theme-selector {
    background-color: var(--fg-0);
    color: var(--bg-0);
    position: fixed;
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

 #sidebar-button {
    background-color: var(--fg-0);
    color: var(--bg-0);
    position: fixed;
    z-index: 99;
    top: 15px;
    left: 15px;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
 }

 #sidebar-button:hover {
     color: var(--bg-1);
 }

 @media (max-width: 768px) {
    nav {
        display: none;
    }
 }

 @media (min-width: 769px) {
    #sidebar-button {
        display: none;
    }
 }
</style>
