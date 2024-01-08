import { injectSpeedInsights } from "@vercel/speed-insights";

injectSpeedInsights();

function toggleMenu() {
  var menu = document.querySelector('.menu');
  var menuToggle = document.querySelector('.menu-toggle');
  
  menu.classList.toggle('active');
  menuToggle.classList.toggle('active');

}