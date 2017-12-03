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
            var name = "Team: " + name.team + "<br>" + "Player: " + name.player + "<br>" + "Points: " + name.points + "<br>" + "Goals: " + name.goals + "<br>" + "Assits: " + name.assists;
                        
            document.getElementById("pittInfo").innerHTML = name;
        }
    }
                
    info.open("Get", "crosby.txt", true);
    info.send();
}
            
//show chicago info
function showChicago() {
    'use strict';
    //show image
    document.getElementById('toews').className ='classname';
    document.getElementById('toews').style.display='block';
                
    //show json
    var info = new XMLHttpRequest();
                
    info.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            var name = JSON.parse(this.response);
            var name = "Team: " + name.team + "<br>" + "Player: " + name.player + "<br>" + "Points: " + name.points + "<br>" + "Goals: " + name.goals + "<br>" + "Assits: " + name.assists;
                        
            document.getElementById("chicagoInfo").innerHTML = name;
        }
    }
                
    info.open("Get", "chicago.txt", true);
    info.send();
}