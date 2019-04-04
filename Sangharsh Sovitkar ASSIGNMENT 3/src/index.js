import {Activity} from './jsondata';


class MainClass
{
constructor(){
	this.j=[{bigh:600,bigw:600,smallh:70,smallw:60},
	 		{bigh:650,bigw:500,smallh:40,smallw:50},
	 		{bigh:600,bigw:400,smallh:50,smallw:45},
	 		{bigh:550,bigw:300,smallh:55,smallw:40},
	 		{bigh:500,bigw:350,smallh:60,smallw:35},
	 		{bigh:450,bigw:400,smallh:50,smallw:30},
	 		{bigh:400,bigw:400,smallh:40,smallw:35},
	 		{bigh:350,bigw:400,smallh:45,smallw:30},
	 		{bigh:300,bigw:400,smallh:65,smallw:30},
	 		{bigh:250,bigw:400,smallh:50,smallw:30}];
	this.load;	
	this.load= document.createElement("button");
	document.body.appendChild(this.load);
	this.obj=[];

	}
loadButton() {
	this.load.style.height="30px";
	this.load.style.width="50px";
	this.load.innerHTML="Load ";
	this.load.addEventListener("click",()=>{this.loadBox();});
	}
loadBox() {
	this.abcd=document.getElementById("no").value;
	this.abcd=Number(this.abcd);
		for(let i=0;i<this.abcd;i++)
		{
		obj[i]= new Activity();
		obj[i].ActivityMethod(this.j[i].bigh,this.j[i].bigw,this.j[i].smallh,this.j[i].smallw);
		}
	}
}
let obj=new MainClass();
obj.loadButton();
