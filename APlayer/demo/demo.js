const ap1=new APlayer({element:document.getElementById("player1"),mini:!1,autoplay:!1,lrcType:!1,mutex:!0,preload:"metadata",audio:[{name:"光るなら",artist:"Goose house",url:"https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.mp3",cover:"https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.jpg",theme:"#ebd0c2"}]});ap1.on("play",(function(){console.log("play")})),ap1.on("play",(function(){console.log("play play")})),ap1.on("pause",(function(){console.log("pause")})),ap1.on("canplay",(function(){console.log("canplay")})),ap1.on("playing",(function(){console.log("playing")})),ap1.on("ended",(function(){console.log("ended")})),ap1.on("error",(function(){console.log("error")}));const ap2=new APlayer({element:document.getElementById("player2"),mini:!0,autoplay:!1,lrcType:!1,mutex:!0,audio:[{name:"光るなら",artist:"Goose house",url:"https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.mp3",cover:"https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.jpg",lrc:"https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.lrc",theme:"#ebd0c2"}]}),ap3=new APlayer({element:document.getElementById("player3"),mini:!1,autoplay:!1,lrcType:3,mutex:!0,audio:[{name:"光るなら",artist:"Goose house",url:"https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.mp3",cover:"https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.jpg",lrc:"https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.lrc",theme:"#ebd0c2"}]}),ap4=new APlayer({element:document.getElementById("player4"),mini:!1,autoplay:!1,lrcType:!1,mutex:!0,theme:"#ad7a86",order:"random",audio:[{name:"光るなら",artist:"Goose house",url:"https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.mp3",cover:"https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.jpg",lrc:"https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.lrc",theme:"#ebd0c2"},{name:"トリカゴ",artist:"XX:me",url:"https://cn-south-17-aplayer-46154810.oss.dogecdn.com/darling.mp3",cover:"https://cn-south-17-aplayer-46154810.oss.dogecdn.com/darling.jpg",lrc:"https://cn-south-17-aplayer-46154810.oss.dogecdn.com/darling.lrc",theme:"#46718b"},{name:"前前前世",artist:"RADWIMPS",url:"https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.mp3",cover:"https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.jpg",lrc:"https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.lrc",theme:"#505d6b"},{name:"光るなら(HLS)",artist:"Goose house",url:"https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hls/hikarunara.m3u8",cover:"https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.jpg",theme:"#ebd0c2",type:"hls"}]}),ap5=new APlayer({element:document.getElementById("player5"),mini:!1,autoplay:!1,lrcType:3,mutex:!0,theme:"#e9e9e9",listFolded:!1,listMaxHeight:80,audio:[{name:"光るなら",artist:"Goose house",url:"https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.mp3",cover:"https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.jpg",lrc:"https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.lrc"},{name:"トリカゴ",artist:"XX:me",url:"https://cn-south-17-aplayer-46154810.oss.dogecdn.com/darling.mp3",cover:"https://cn-south-17-aplayer-46154810.oss.dogecdn.com/darling.jpg",lrc:"https://cn-south-17-aplayer-46154810.oss.dogecdn.com/darling.lrc"},{name:"前前前世",artist:"RADWIMPS",url:"https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.mp3",cover:"https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.jpg",lrc:"https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.lrc"}]}),colorThief=new ColorThief,image=new Image,xhr=new XMLHttpRequest,setTheme=e=>{ap5.list.audios[e].theme||(xhr.onload=function(){let o=URL.createObjectURL(this.response);image.onload=function(){let a=colorThief.getColor(image);ap5.theme(`rgb(${a[0]}, ${a[1]}, ${a[2]})`,e),URL.revokeObjectURL(o)},image.src=o},xhr.open("GET",ap5.list.audios[e].cover,!0),xhr.responseType="blob",xhr.send())};setTheme(ap5.list.index),ap5.on("listswitch",(e=>{setTheme(e.index)}));const ap6=new APlayer({element:document.getElementById("player6"),mutex:!0,audio:[{name:"光るなら(HLS)",artist:"Goose house",url:"https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hls/hikarunara.m3u8",cover:"https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.jpg",theme:"#ebd0c2",type:"hls"}]}),ap7=new APlayer({element:document.getElementById("player7"),mutex:!0,audio:[{name:"光るなら(HLS)",artist:"Goose house",url:"https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hls/hikarunara.m3u8",cover:"https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.jpg",theme:"#ebd0c2",type:"customHls"}],customAudioType:{customHls:function(e,o,a){if(Hls.isSupported()){const a=new Hls;a.loadSource(o.url),a.attachMedia(e)}else e.canPlayType("application/x-mpegURL")||e.canPlayType("application/vnd.apple.mpegURL")?e.src=o.url:a.notice("Error: HLS is not supported.")}}}),ap8=new APlayer({element:document.getElementById("player8"),mutex:!0,theme:"#ad7a86",order:"random",lrcType:3,fixed:!0});$.ajax({url:"https://api.i-meto.com/meting/api?server=netease&type=playlist&id=35798529",success:function(e){ap8.list.add(JSON.parse(e))}});