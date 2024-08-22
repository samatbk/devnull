<script>

import { onMount } from "svelte";
import { spring } from 'svelte/motion';

let current_color = 0
let colors = ["#ebdbb2", "#8ec07c", "#b8bb26", "#83a598"]

function change_color() {
    current_color = (current_color + 1) % colors.length;
}

onMount(() => {
    const interval = setInterval(() => {
    change_color();
    }, 1200);

    return () => clearInterval(interval);
})

</script>

<svg viewBox="0 0 400 100" id="logo" xmlns="http://www.w3.org/2000/svg">
      <style>
       #logo>text {
           transition: fill 1s ease-in-out;
           -webkit-user-select: none;
           -moz-user-select: none;
           -ms-user-select: none;
           user-select: none;
       }
       #logo>rect {
           transition: fill 1s ease-in-out, stroke 1s ease-in-out;
       }

       #logo>rect:hover {
           fill: #000;
       }

       #logo {
           max-width: 400px;
           max-height: 100px;
           transform: scale(1.2);
           display: block;
           margin: 20px auto;
           margin-bottom: 30px;
           transition: filter 0.5s ease;
       }

       svg:hover {
           filter: invert(1);
       }

       @media (max-width: 768px) {
           #logo {
               width: 250px;
           }
       }
      </style>
      <rect width="100%" height="100%" fill="#1d2021"  stroke-width="2"/>
      <rect width="100" height="100%" fill={colors[current_color]} />
      <circle cx="50" cy="50" r="40" fill="#000" />
  <text x="50" y="45" font-size="30px" font-weight="bolder" text-anchor="middle" fill={colors[current_color]}>/dev/</text>
  <text x="50" y="68" style="font-size: 28px;" font-weight="bolder" text-anchor="middle" fill={colors[current_color]}>null</text>
  <text x="200" y="50" dx="50" fill={colors[current_color]} text-anchor="middle" font-weight="bolder" style="font-size: 31px;" dominant-baseline="middle">Yazılım Kulübü</text>
</svg>
