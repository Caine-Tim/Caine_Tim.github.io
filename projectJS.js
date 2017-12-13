//show pitt info
function showCrosby() {
    'use strict';
    //show image
    document.getElementById('crosby').className ='classname';
                
    //show json
    var info = new XMLHttpRequest();
                
    info.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            var name = JSON.parse(this.response);
            var name = "Team: " + name.team + "<br>" + "Player: " + name.player + "<br>" + "Points: " + name.points + "<br>" + "Goals: " + name.goals + "<br>" + "Assists: " + name.assists;
                        
            document.getElementById("crosbyInfo").innerHTML = name;
        }
    }
                
    info.open("Get", "crosby.txt", true);
    info.send();
}
            
//show kessel info
function showKessel() {
    'use strict';
    //show image
    document.getElementById('kessel').className ='classname';
                
    //show json
    var info = new XMLHttpRequest();
                
    info.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            var name = JSON.parse(this.response);
            var name = "Team: " + name.team + "<br>" + "Player: " + name.player + "<br>" + "Points: " + name.points + "<br>" + "Goals: " + name.goals + "<br>" + "Assists: " + name.assists;
                        
            document.getElementById("kesselInfo").innerHTML = name;
        }
    }
                
    info.open("Get", "kessel.txt", true);
    info.send();
}

//show malkin info
function showMalkin() {
    'use strict';
    //show image
    document.getElementById('malkin').className ='classname';
                
    //show json
    var info = new XMLHttpRequest();
                
    info.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            var name = JSON.parse(this.response);
            var name = "Team: " + name.team + "<br>" + "Player: " + name.player + "<br>" + "Points: " + name.points + "<br>" + "Goals: " + name.goals + "<br>" + "Assists: " + name.assists;
                        
            document.getElementById("malkinInfo").innerHTML = name;
        }
    }
                
    info.open("Get", "malkin.txt", true);
    info.send();
}

//store email
function store() {
    'use strict';
    var inputEmail = document.getElementById('email').value;
    localStorage.setItem('email', inputEmail);
    
    var fName = document.getElementById('fname').value;
    localStorage.setItem('fName', fName);
    
    var lName = document.getElementById('lname').value;
    localStorage.setItem('lName', lName);
    
    var storedEmail = localStorage.email;
    alert("You have successfully subscribed!\nYour name is: " + fName + " " + lName + "\nYour email is: " + inputEmail)
}

//load localstorage
function load() {
    'use strict';
    var loadEmail = localStorage.email;
    if(loadEmail) {
        document.getElementById("showEmail").innerHTML = "<p1>" + "*You have already submitted your information." + "</p1>";
    }
}