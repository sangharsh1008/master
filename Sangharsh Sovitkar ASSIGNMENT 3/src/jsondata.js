export class Activity
{
	ActivityMethod(bigwidt,bighight,smallwidt,smallhight) {
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

		this.play.style.backgroundImage="url('./images.jpg')";
		this.play.style.backgroundSize="cover";
		this.play.style.width="50px";
		this.play.style.height="50px";
		this.play.style.position="relative";
		this.pause = document.createElement("button");

		this.pause.style.backgroundImage="url('../src/download.jpg')";
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
		this.play.addEventListener("click",()=>{objj.playa(objj);});
		this.pause.addEventListener("click",()=>{objj.pausee(objj);});
		}


		playa() { 
			this.pause.disabled=false;
			this.play.disabled=true;
			console.log(this);
			this.top1 =this.elem.offsetTop;
			this.left=this.elem.offsetLeft;
			this.bigtopw=this.bigwid;
			this.bigtoph=this.bighigh;
			this.bigtopw-=this.b;
			this.bigtoph-=this.a;
			let obj=this;
			this.id = setInterval(()=>{obj.frame();}, 1);
		}
		frame() {
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

		pausee()
			{
			this.pause.disabled=true;
			this.play.disabled=false;
			clearInterval(this.id);
			}  
	}


