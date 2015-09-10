

var arr=[{id:1,name:"first",image:"http://s.hswstatic.com/gif/whiskers-sam.jpg"},{id:2,name:"second",image:"http://dreamatico.com/data_images/cat/cat-7.jpg"},{id:3,name:"third",image:"http://wac.450f.edgecastcdn.net/80450F/hudsonvalleycountry.com/files/2015/01/cat4.jpg"},{id:4,name:"fourth",image:"https://pbs.twimg.com/profile_images/447460759329460224/mt2UmwGG_400x400.jpeg"},{id:5,name:"fifth",image:"http://s.hswstatic.com/gif/whiskers-sam.jpg"},{id:6,name:"sixth",image:"http://images.forwallpaper.com/files/thumbs/preview/8/87470__beautiful-cat_p.jpg"}];

function changecount(elem,but)
{
	//var e=elem.getElementsByTagName("button")[0];
	but.innerText=parseInt(but.innerText)+1;
}



function attach(tempimg,butcon){
			//console.log("enterd the handler");
			//console.log("print butcon value"+butcon.innerText);
			var temp=tempimg;
			var but=butcon;
			
			return function(tempimg,butcon){
				changecount(temp,but);
			};
		}
function display()
{
	var i=0;
	var delem=document.getElementById(0);
	for(;i<arr.length;i++)
	{
		var e1=document.createElement("div");//creating div
		var tempimg=document.createElement("img");
		e1.appendChild(tempimg);// appending image
		tempimg.src=arr[i].image;
		var butcon=document.createElement("button");
		butcon.innerText="0";
		console.log(butcon.innerText);
		butcon.type="button";
		butcon.value="0";
		
		e1.appendChild(butcon);
		delem.appendChild(e1); //appending to document
		tempimg.onclick=attach(tempimg,butcon);


	}
}
display();
