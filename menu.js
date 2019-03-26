 
	var closedMenu=1;
	function showMenu(){
		
		if(closedMenu==1){
		var x=document.getElementsByClassName("menu");
		var i;
		for (i = 0; i < x.length; i++) {
		x[i].style.display= "block";
		}
		closedMenu=0;
	}
	else {
		var x=document.getElementsByClassName("menu");
		var i;
		for (i = 0; i < x.length; i++) {
		x[i].style.display= "none";
		}
		closedMenu=1;
	}
	

	}

//Set bussiness infos
var closedBussiness=1;
	function showBussiness(){
		
		if(closedBussiness==1){
		var x=document.getElementsByClassName("configureBussiness");
		var i;
		for (i = 0; i < x.length; i++) {
		x[i].style.display= "block";
		}
		closedBussiness=0;
	}
	else {
		var x=document.getElementsByClassName("configureBussiness");
		var i;
		for (i = 0; i < x.length; i++) {
		x[i].style.display= "none";
		}
		 closedBussiness=1;
	}
	

	}


// Change Password


var show=1;
	function showChangePass(){
		
		if(show==1){
		var x=document.getElementsByClassName("changePass");
		var i;
		for (i = 0; i < x.length; i++) {
		x[i].style.display= "block";
		}
		show =0;
	}
	else {
		var x=document.getElementsByClassName("changePass");
		var i;
		for (i = 0; i < x.length; i++) {
		x[i].style.display= "none";
		}
		 show =1;
	}
	

	}

//Contact dev

var showDev=1;
	function showContactDev() {
		
		if(showDev==1){
		var x=document.getElementsByClassName("contactDev");
		var i;
		for (i = 0; i < x.length; i++) {
		x[i].style.display= "block";
		}
		showDev =0;
	}
	else {
		var x=document.getElementsByClassName("contactDev");
		var i;
		for (i = 0; i < x.length; i++) {
		x[i].style.display= "none";
		}
		 showDev =1;
	}
	

	}

// add Element - Inventory
var showAdd=1;
	function showAddElement() {
		
		if(showAdd==1){
		var x=document.getElementsByClassName("addElement");
		var i;
		for (i = 0; i < x.length; i++) {
		x[i].style.display= "block";
		}
		showAdd =0;
	}
	else {
		var x=document.getElementsByClassName("addElement");
		var i;
		for (i = 0; i < x.length; i++) {
		x[i].style.display= "none";
		}
		 showAdd =1;
	}
	

	}

// remove element - Inventory
	var showRemove=1;
	function showRemoveElement() {
		
		if(showRemove==1){
		var x=document.getElementsByClassName("removeElement");
		var i;
		for (i = 0; i < x.length; i++) {
		x[i].style.display= "block";
		}
		showRemove =0;
	}
	else {
		var x=document.getElementsByClassName("removeElement");
		var i;
		for (i = 0; i < x.length; i++) {
		x[i].style.display= "none";
		}
		 showRemove =1;
	}
	

	}

// search element - Inventory

	var showSearch=1;
	function showSearchElement() {
		
		if(showSearch==1){
		var x=document.getElementsByClassName("searchElement");
		var i;
		for (i = 0; i < x.length; i++) {
		x[i].style.display= "block";
		}
		showSearch =0;
	}
	else {
		var x=document.getElementsByClassName("searchElement");
		var i;
		for (i = 0; i < x.length; i++) {
		x[i].style.display= "none";
		}
		showSearch=1;
	}
	

	}

//set date - Notification


var showSet=1;
	function setNotifyDate() {
		
		if(showSet==1){
		var x=document.getElementsByClassName("setNotificationDate");
		var i;
		for (i = 0; i < x.length; i++) {
		x[i].style.display= "block";
		}
		showSet =0;
	}
	else {
		var x=document.getElementsByClassName("setNotificationDate");
		var i;
		for (i = 0; i < x.length; i++) {
		x[i].style.display= "none";
		}
		showSet=1;
	}
	

	}

var showAlert=1;
	function showAlerts() {
		
		if(showAlert==1){
		var x=document.getElementsByClassName("alerts");
		var i;
		for (i = 0; i < x.length; i++) {
		x[i].style.display= "block";
		}
		showAlert =0;
	}
	else {
		var x=document.getElementsByClassName("alerts");
		var i;
		for (i = 0; i < x.length; i++) {
		x[i].style.display= "none";
		}
		showAlert=1;
	}
	

	}


var showInventory=1;
	function showInvent() {
		
		if(showInventory==1){
		var x=document.getElementsByClassName("seeInventory");
		var i;
		for (i = 0; i < x.length; i++) {
		x[i].style.display= "block";
		}
		showInventory =0;
	}
	else {
		var x=document.getElementsByClassName("seeInventory");
		var i;
		for (i = 0; i < x.length; i++) {
		x[i].style.display= "none";
		}
		showInventory=1;
	}
	

	}