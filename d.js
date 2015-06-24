/*
 * Additional Custom JS By Den Ezra Segunial
 */
// NOTE: DO NOT USE EXPERIMENTAL
// Get element class attribute
function getClass(element) {return document.getElementsByClassName(element);}
// Get element id attribute
function getElem(element){return document.getElementById(element);}
// Embed image to element
function getEmbedImage(element, path, width, height, size) {
	getElem(element).style.background 		= "url('"+path+"')";
	getElem(element).style.backgroundSize	= size;
	getElem(element).style.height 		 	= height;
	getElem(element).style.width 			= width;
}
// Add class to element
function addClass(element, class_name){element.className += ' ' + class_name;}
// Remove class to element
function removeClass(element, class_name){
	element.className = element.className.replace( new RegExp('(?:^|\\s)'+class_name+'(?!\\S)') ,'');
}
// Preload 
function startPreload(){
	var ctr = 0, images_arr = new Array(), 
	preArgumentsLength = startPreload.arguments.length-1, 
	preArguments = startPreload.arguments; 
	for (i = 0; i < preArgumentsLength; i++) {
		images_arr[i] 		= new Image()
		images_arr[i].src 	= startPreload.arguments[i]
		addEvent(images_arr[i], 'load', imageLoaded)
	}
	function imageLoaded(){if(ctr === (preArgumentsLength - 1)){preArguments[preArgumentsLength]();}else{ctr++;}} 
}
// Mobile Checker 
function mobileChecker(){var isMobile = false;if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) { isMobile = true;}return isMobile;}
// Create Element
// TODO: Create attribute for all the HTML tags
function createObject(parent, object, class_name, id_name){
	var obj = document.createElement(object);
    parent.appendChild(obj);
    if(class_name){obj.className = class_name;}
    if(id_name){obj.id = id_name;}
};
// Transform Style
function transform(element, value) {
    element.style.webkitTransform = value;
    element.style.MozTransform = value;
    element.style.msTransform = value;
    element.style.OTransform = value;
    element.style['transform'] = value;
}
// 
function roundOff(num,place) {
	num.toFixed(place)
}
// Function like to console
function trace(argument){console.log(argument);}
// TEMPORARY FUNCTION 
function getOffset(element) {
	var offSetX, offSetY;
	offSetX = element.offsetLeft;
	offSetY = element.offsetTop;
	return {offSetX:offSetX, offSetY:offSetY};
}
function getStyle(element,value) {
	return getComputedStyle(element).getPropertyValue(value);
}
// Get the position of element that relative to its parent. 
// NOTE: IF THE ELEMENT HAS A BORDER AND MARGIN THE RESULT MAY CHANGE
// TODO: CREATE A FAIL SAFE IF THE BROWSER DOESN'T SUPPORT THIS. 
//       ALSO, A CODE THAT WILL NOT LET THE POSITION CHANGE IF IT HAS A BORDER OR MARGIN 
function getPos(element) {
	var  x, y, w, h;
	if(element.getBoundingClientRect){
		var rect = element.getBoundingClientRect();
		x = rect.left, y = rect.top, w = rect.right - rect.left, h = rect.bottom - rect.top;
		return {x:x, y:y, w:w, h:h};
	} else {
		console.log('FAIL SAFE IS UNDERCONSTRUCTION'); 
	}
}
/*
 * Additional Custom JS Created by other people
 */
 //  By Peter-Paul Koch
 function addEvent(obj, evt, fn) {
 	if(obj.addEventListener) {obj.addEventListener(evt, fn, false);}else if(obj.attachEvent) {obj.attachEvent('on' + evt, fn)}
 }
 function removeEvent(obj, evt, fn) {
 	if(obj.addEventListener) {obj.removeEventListener(evt, fn, false);}else if(obj.attachEvent) {obj.detachEvent('on' + evt, fn)}
 }