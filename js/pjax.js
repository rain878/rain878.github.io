/* global NexT, CONFIG, Pjax */
const pjax=new Pjax({selectors:["head title",'meta[property="og:title"]','script[type="application/json"]',
// Precede .main-inner to prevent placeholder TOC changes asap
".post-toc-wrap",".main-inner",".languages",".pjax"],switches:{".post-toc-wrap":function(e,t){if(t.querySelector(".post-toc"))Pjax.switches.outerHTML.call(this,e,t);else{const t=e.querySelector(".post-toc");t&&t.classList.add("placeholder-toc"),this.onSwitch()}}},analytics:!1,cacheBust:!1,scrollTo:!CONFIG.bookmark.enable});document.addEventListener("pjax:success",(()=>{if(pjax.executeScripts(document.querySelectorAll("script[data-pjax]")),NexT.boot.refresh(),
// Define Motion Sequence & Bootstrap Motion.
CONFIG.motion.enable&&NexT.motion.integrator.init().add(NexT.motion.middleWares.subMenu).add(NexT.motion.middleWares.postList).add(NexT.motion.middleWares.sidebar).bootstrap(),"remove"!==CONFIG.sidebar.display){const e=document.querySelector(".post-toc:not(.placeholder-toc)");document.querySelector(".sidebar-inner").classList.toggle("sidebar-nav-active",e),NexT.utils.activateSidebarPanel(e?0:1),NexT.utils.updateSidebarPosition()}}));