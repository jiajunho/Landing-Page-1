function dropdowntoggle(){
	if(document.getElementById("dropdown-menu").style.display=="block"){
		document.getElementById("dropdown-menu").style.display="none";
		document.getElementById("nav-dropdown").className="dropdown";
	}
	else {
		document.getElementById("dropdown-menu").style.display="block";
		document.getElementById("nav-dropdown").className+=" active";
		document.getElementById("dropdown-menu").getElementsByTagName("li").style.display="list-item";
	}

};