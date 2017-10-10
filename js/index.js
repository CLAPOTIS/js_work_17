var btn_next=document.getElementsByClassName("btn_next")[0];
var btn_prev=document.getElementsByClassName("btn_prev")[0];
var move=document.getElementById("move");
document.getElementById("move").style.top="0px";
btn_next.onmousedown=function(){
	showNext();
} 
btn_next.onmouseup=function(){
	clearTimeout(moveNext);
} 
btn_prev.onmousedown=function(){
	showPrev();
} 
btn_prev.onmouseup=function(){
	clearTimeout(movePrev);
} 
function showNext(){
	var ypos=parseInt(move.style.top);
	if(ypos==-1100){
		alert("到底啦~");
		return true;
	}
	if(ypos>-1100){
		ypos--;		
	}
	move.style.top=ypos+"px";
	moveNext=setTimeout("showNext()",5);
}
function showPrev(){
	var ypos=parseInt(move.style.top);
	if(ypos==0){
		alert("到顶啦~");
		return true;
	}
	if(ypos<0){
		ypos++;
	}
	move.style.top=ypos+"px";
	movePrev=setTimeout("showPrev()",5);
}
	