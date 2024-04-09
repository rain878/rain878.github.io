class Bar{constructor(e){this.elements={},this.elements.volume=e.volume,this.elements.played=e.played,this.elements.loaded=e.loaded}
/**
     * Update progress
     *
     * @param {String} type - Point out which bar it is
     * @param {Number} percentage
     * @param {String} direction - Point out the direction of this bar, Should be height or width
     */set(e,t,s){t=Math.max(t,0),t=Math.min(t,1),this.elements[e].style[s]=100*t+"%"}get(e,t){return parseFloat(this.elements[e].style[t])/100}}export default Bar;