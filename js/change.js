 document.body.classList.add(localStorage.getItem("color")||"gold");
var el=document.querySelectorAll("ul li"),
    MyDiv=document.getElementById("containeer");
var colorList=[];
for(var i=0; i<=el.length;i++)
{
    colorList.push(el[i]?.getAttribute("class"));
    el[i]?.addEventListener("click",function(){
        document.body.classList.remove(...colorList,"gold");
        document.body.classList.add(this.getAttribute("class"));
        localStorage.setItem("color",this.getAttribute("class"));
    

    })
}


