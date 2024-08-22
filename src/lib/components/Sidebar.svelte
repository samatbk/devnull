<script>
import { show_sidebar } from "$lib/store.js"
import CloseIcon from "svelte-remixicon/RiCloseFill.svelte"

function toggle_sidebar() {
     show_sidebar.update((state) => !state);
}

</script>

{#if $show_sidebar}
<div class="sidebar">
    <div class="sidebar-header">
    <button id="close-button" on:click={toggle_sidebar}><CloseIcon/></button>
    <p id="cool-text">Yazilim kulubu</p>
    </div>
    <hr>
    <a href="/" class="sidebar-link" on:click={toggle_sidebar}>mutfak</a>
    <a href="/weekly" class="sidebar-link" on:click={toggle_sidebar}>haftalik_bulten</a>
    <a href="/blog" class="sidebar-link" on:click={toggle_sidebar}>blog</a>
    <a href="/events" class="sidebar-link" on:click={toggle_sidebar}>etkinlikler</a>
    <a href="/book-club" class="sidebar-link" on:click={toggle_sidebar}>kitap-kulubu</a>
    <a href="/about" class="sidebar-link" on:click={toggle_sidebar}>hakkinda</a>

</div>
{/if}

<style>
    .sidebar {
        width: 70%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: var(--bg-0-soft);
        height: 100vh !important;
        text-align: left;
        padding: 20px;
    }

 .sidebar-header {
     display: flex;
     /* justify-content: center; */
     align-items: center;
 }

 #close-button {
     background: var(--bg-1);
     color: var(--fg-0);
     border: 0;
     width: 40px;
     height: 40px;
 }

 #close-button:hover {
     background: var(--fg-0);
     color: var(--bg-0);
 }

 #cool-text {
     margin: 10px;
     font-weight: bolder;
 }

 .sidebar-link {
     color: var(--fg-0);
     background-color: var(--bg-2);
     display: block;
     padding: 10px;
     box-sizing: border-box;
     width: 100%;
     margin-bottom: 10px;
 }

 .sidebar-link:hover {
     color: var(--bg-0);
     background-color: var(--fg-2);
 }
</style>
