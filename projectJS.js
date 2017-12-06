//show pitt info
function showCrosby() {
    'use strict';
    //show image
    document.getElementById('crosby').className ='classname';
    document.getElementById('crosby').style.display='block';
                
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
    document.getElementById('kessel').style.display='block';
                
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
    document.getElementById('malkin').style.display='block';
                
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
    var inputEmail = document.getElementById("email").value;
    localStorage.setItem("email", inputEmail);
    
    var storedEmail = localStorage.getItem("email");
    document.getElementById("showEmail").innerHTML = "Your email is: " + storedEmail;
}