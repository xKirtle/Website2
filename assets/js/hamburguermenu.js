function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        //x.className += " responsive";
      x.className += " collapse navbar-collapse";
      
    } else {
        x.className = "topnav";
    }
}