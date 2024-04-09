import tplLrc from"../template/lrc.art";class Lrc{constructor(t){this.container=t.container,this.async=t.async,this.player=t.player,this.parsed=[],this.index=0,this.current=[]}show(){this.player.events.trigger("lrcshow"),this.player.template.lrcWrap.classList.remove("aplayer-lrc-hide")}hide(){this.player.events.trigger("lrchide"),this.player.template.lrcWrap.classList.add("aplayer-lrc-hide")}toggle(){this.player.template.lrcWrap.classList.contains("aplayer-lrc-hide")?this.show():this.hide()}update(t=this.player.audio.currentTime){if(this.index>this.current.length-1||t<this.current[this.index][0]||!this.current[this.index+1]||t>=this.current[this.index+1][0])for(let e=0;e<this.current.length;e++)t>=this.current[e][0]&&(!this.current[e+1]||t<this.current[e+1][0])&&(this.index=e,this.container.style.transform=`translateY(${16*-this.index}px)`,this.container.style.webkitTransform=`translateY(${16*-this.index}px)`,this.container.getElementsByClassName("aplayer-lrc-current")[0].classList.remove("aplayer-lrc-current"),this.container.getElementsByTagName("p")[e].classList.add("aplayer-lrc-current"))}switch(t){if(!this.parsed[t])if(this.async){this.parsed[t]=[["00:00","Loading"]];const e=new XMLHttpRequest;e.onreadystatechange=()=>{t===this.player.list.index&&4===e.readyState&&(e.status>=200&&e.status<300||304===e.status?this.parsed[t]=this.parse(e.responseText):(this.player.notice(`LRC file request fails: status ${e.status}`),this.parsed[t]=[["00:00","Not available"]]),this.container.innerHTML=tplLrc({lyrics:this.parsed[t]}),this.update(0),this.current=this.parsed[t])};const s=this.player.list.audios[t].lrc;e.open("get",s,!0),e.send(null)}else this.player.list.audios[t].lrc?this.parsed[t]=this.parse(this.player.list.audios[t].lrc):this.parsed[t]=[["00:00","Not available"]];this.container.innerHTML=tplLrc({lyrics:this.parsed[t]}),this.current=this.parsed[t],this.update(0)}
/**
     * Parse lrc, suppose multiple time tag
     *
     * @param {String} lrc_s - Format:
     * [mm:ss]lyric
     * [mm:ss.xx]lyric
     * [mm:ss.xxx]lyric
     * [mm:ss.xx][mm:ss.xx][mm:ss.xx]lyric
     * [mm:ss.xx]<mm:ss.xx>lyric
     *
     * @return {String} [[time, text], [time, text], [time, text], ...]
     */parse(t){if(t){const e=(t=t.replace(/([^\]^\n])\[/g,((t,e)=>e+"\n["))).split("\n");let s=[];const r=e.length;for(let t=0;t<r;t++){
// match lrc time
const r=e[t].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g),i=e[t].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g,"").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g,"").replace(/^\s+|\s+$/g,"");
// match lrc text
if(r){
// handle multiple time tag
const t=r.length;for(let e=0;e<t;e++){const t=/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(r[e]),a=60*t[1]+parseInt(t[2])+(t[4]?parseInt(t[4])/(2===(t[4]+"").length?100:1e3):0);s.push([a,i])}}}
// sort by time
return s=s.filter((t=>t[1])),s.sort(((t,e)=>t[0]-e[0])),s}return[]}remove(t){this.parsed.splice(t,1)}clear(){this.parsed=[],this.container.innerHTML=""}}export default Lrc;