const isMobile=/mobile/i.test(window.navigator.userAgent),utils={
/**
     * Parse second to time string
     *
     * @param {Number} second
     * @return {String} 00:00 or 00:00:00
     */
secondToTime:o=>{const t=Math.floor(o/3600),e=Math.floor((o-3600*t)/60),r=Math.floor(o-3600*t-60*e);return(t>0?[t,e,r]:[e,r]).map((o=>o<10?"0"+o:""+o)).join(":")},isMobile:isMobile,storage:{set:(o,t)=>{localStorage.setItem(o,t)},get:o=>localStorage.getItem(o)},nameMap:{dragStart:isMobile?"touchstart":"mousedown",dragMove:isMobile?"touchmove":"mousemove",dragEnd:isMobile?"touchend":"mouseup"},
/**
     * get random order, using Fisher–Yates shuffle
     */
randomOrder:o=>function(o){for(let t=o.length-1;t>=0;t--){const e=Math.floor(Math.random()*(t+1)),r=o[e];o[e]=o[t],o[t]=r}return o}([...Array(o)].map((function(o,t){return t})))};export default utils;