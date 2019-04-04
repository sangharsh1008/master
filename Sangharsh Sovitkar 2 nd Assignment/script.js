function loaddefault()
{
var j=[{bigh:600,bigw:600,smallh:70,smallw:60},
 		{bigh:650,bigw:500,smallh:40,smallw:50},
 		{bigh:600,bigw:400,smallh:50,smallw:45},
 		{bigh:550,bigw:300,smallh:55,smallw:40},
 		{bigh:500,bigw:350,smallh:60,smallw:35},
 		{bigh:450,bigw:400,smallh:50,smallw:30},
 		{bigh:400,bigw:400,smallh:40,smallw:35},
 		{bigh:350,bigw:400,smallh:45,smallw:30},
 		{bigh:300,bigw:400,smallh:65,smallw:30},
 		{bigh:250,bigw:400,smallh:50,smallw:30}];
var abcd=document.getElementById("no").value;
abcd=Number(abcd);

for(var i=0;i<abcd;i++)
{
obj=new initclass(j[i].bigh,j[i].bigw,j[i].smallh,j[i].smallw);
}
}


function loadmanually()
{
var abcd=document.getElementById("no").value;
abcd=Number(abcd);

for(var i=0;i<abcd;i++)
{
obj=new initclass(500,500,50,50);
}


}


function initclass(bigwidt,bighight,smallwidt,smallhight)
{
this.bighigh;
this.elem;
this.id;
this.top1=0;
this.left=0;
this.l=1;
this.r=1;
this.inc=0;
this.bigtop;
this.bigwid;
this.width;
this.a=0;
this.b=0;
this.i=0;
this.j=0;
this.cd=[];
this.ab=[];
this.smallhigh;
this.smallwid;
this.play;
this.pause;
this.load;
this.playa;

this.bigwid=parseInt(bigwidt);

this.bighigh=parseInt(bighight);

this.smallwid =parseInt(smallwidt);

this.smallhigh=parseInt(smallhight);
	console.log(bigwidt);
	console.log(this.bigwid);

this.a=parseInt(this.smallhigh);
this.b=parseInt(this.smallwid);

this.box=document.createElement("div");	
this.elem=document.createElement("div");

this.box.style.width=this.bigwid+"px";
this.box.style.height=this.bighigh+"px";
this.elem.style.width=this.smallwid+"px";
this.elem.style.height=this.smallhigh+"px";
this.elem.style.position="absolute";
this.box.style.position="relative";
this.elem.style.background="red";
this.box.style.background="grey";
this.elem.style.left=(this.bigwid-this.smallwid)+"px";
this.elem.style.top=(this.bighigh-this.smallhigh)+"px";
document.body.appendChild(this.box);
this.box.appendChild(this.elem);
this.play = document.createElement("button");
// this.play.innerHTML="play";
this.play.style.backgroundImage="url('images.jpg')";
this.play.style.backgroundSize="cover";
this.play.style.width="50px";
this.play.style.height="50px";
this.play.style.position="relative";
this.pause = document.createElement("button");
// this.pause.innerHTML="Pause";
this.pause.style.backgroundImage="url('download.jpg')";
this.pause.style.backgroundSize="cover";
this.pause.style.width="50px";
this.pause.style.height="50px";
this.play.style.margin="10px";
this.pause.style.margin="10px";
document.body.appendChild(this.play);
document.body.appendChild(this.pause);
this.load = document.createElement("button");
this.load.style.width="20px";
this.load.style.height="20px";
var objj=this;
this.play.addEventListener("click",function(){objj.playa.call(objj)});
this.pause.addEventListener("click",function(){objj.pausee.call(objj)});
}

initclass.prototype.playa=function(){ 
this.pause.disabled=false;
this.play.disabled=true;
console.log(this);
this.top1 =this.elem.offsetTop;
this.left=this.elem.offsetLeft;
this.bigtopw=this.bigwid;
this.bigtoph=this.bighigh;
this.bigtopw-=this.b;
this.bigtoph-=this.a;
var obj=this;
this.id = setInterval(function(){
	console.log(obj);
	frame.call(obj);
}, 1);


function frame() {
 if(this.l==1 && this.r==1 && this.left>=this.inc)
 {
 	this.left--; 
 	this.elem.style.left=this.left+"px";
 	if(this.left==this.inc){
	console.log(this);
	this.l=0; }
 }
 
 else if(this.l==0 && this.r==1 && this.top1>=this.inc)
 {
 	this.top1--;
 	this.elem.style.top=this.top1+"px";
 	if(this.top1==this.inc){ this.r=0;}
 }
 else if(this.l==0 && this.r==0 && this.left<=this.bigtopw-this.inc)
 {
 	this.left++;
 	this.elem.style.left=this.left+"px";
 	if(this.left==this.bigtopw-this.inc){this.l=1;this.inc=this.inc+this.a;}
 }
 else if(this.l==1 && this.r==0 && this.top1<=this.bigtoph-this.inc)
 {
 	this.top1++;
 	this.elem.style.top=this.top1+"px";
	if(this.top1==this.bigtoph-this.inc){this.r=1;}
 }
else
{
	clearInterval(this.id);
}

}
}

initclass.prototype.pausee=function()
{
this.pause.disabled=true;
this.play.disabled=false;
clearInterval(this.id);
}  

