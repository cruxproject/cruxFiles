function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += " w3-theme-d1";
    } else { 
        x.className = x.className.replace("w3-show", "");
        x.previousElementSibling.className = 
        x.previousElementSibling.className.replace(" w3-theme-d1", "");
    }
}
    function closeNotif() {
    var x = document.getElementById("notifications");
    if (x.className.indexOf("w3-dropdown-hover") != -1) {
    x.className -= ' w3-dropdown-hover';
    }
    }

    var c2 = document.getElementById("c2");
    var c1 = document.getElementById("c1");

    function  changec1()
    {
      c1.className += 'change-color-border ';
      c2.className -= 'change-color-border ';
    }
    function  changec2()
    {
      c1.className -= 'change-color-border ';
      c2.className += 'change-color-border ';
    }


    function openNotif() {
    var x = document.getElementById("notifications");
    if (x.className.indexOf("navDemo") == -1) {
    x.className += ' w3-dropdown-hover';
    }
}

// Used to toggle the menu on smaller screens when clicking on the menu button
function openNav() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}