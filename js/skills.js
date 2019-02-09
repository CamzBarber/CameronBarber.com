// Put skills in the correct order, starting with the top skills.
var skills_json = {
    "skills":[
        {"skill":"Python", "icon":"fab fa-python", "rating":5}, 
        {"skill":"HTML5", "icon":"fab fa-html5", "rating":5}, 
        {"skill":"CSS3", "icon":"fab fa-css3-alt", "rating":5}, 
        {"skill":"Internet of Things", "icon":"fas fa-globe", "rating":5},
        {"skill":"YAML", "icon":"fas fa-marker", "rating":5},
        {"skill":"Raspberry Pi", "icon":"fas fa-chart-pie", "rating":5},
        {"skill":"Chrome Extensions", "icon":"fab fa-chrome", "rating":5},
        {"skill":"Google Analytics", "icon":"fab fa-google", "rating":5},
        {"skill":"Alteryx", "icon":"fas fa-chart-area", "rating":5},
        {"skill":"APIs", "icon":"fas fa-plug", "rating":4},
        {"skill":"Reverse Engineering", "icon":"fas fa-wrench", "rating":4},
        {"skill":"Postman", "icon":"fas fa-envelope", "rating":4},
        {"skill":"JavaScript", "icon":"fab fa-js-square", "rating":4},
        {"skill":"Python Libraries", "icon":"fas fa-book", "rating":4},
        {"skill":"Bootstrap", "icon":"fas fa-bold", "rating":4},
        {"skill":"MQTT", "icon":"fas fa-comments", "rating":4},
        {"skill":"JSON", "icon":"far fa-circle", "rating":4},
        {"skill":"Teaching", "icon":"fas fa-chalkboard-teacher", "rating":4},
        {"skill":"Microsoft Excel", "icon":"fas fa-file-excel", "rating":4},
        {"skill":"XML", "icon":"far fa-file-code", "rating":3},
        {"skill":"Microsoft Azure", "icon":"fab fa-microsoft", "rating":3},
        {"skill":"Visual Basic", "icon":"fas fa-infinity", "rating":3},
        {"skill":"Parallel Programming", "icon":"fas fa-code", "rating":3},
        {"skill":"Firebase", "icon":"fas fa-fire", "rating":3},
        {"skill":"Electronics", "icon":"fas fa-bolt", "rating":3},
        {"skill":"NLP", "icon":"fas fa-language", "rating":3},
        {"skill":"Agile", "icon":"fas fa-undo", "rating":3},
        {"skill":"Lua", "icon":"fas fa-moon", "rating":2},
        {"skill":"Java", "icon":"fab fa-java", "rating":1}
    ]
}

var half = Math.ceil((skills_json.skills.length) / 2)
var doc_l = document.getElementById("skill-col-left");
var doc_r = document.getElementById("skill-col-right");

for (var i = 0; i < skills_json.skills.length; i++) {
    var obj = skills_json.skills[i];

    // DOM: Container
    var domCont = document.createElement("div");
    domCont.className = "row mb-2 skill-skill my-auto";

    // DOM: Icon
    var domIcon = document.createElement("div");
    domIcon.className = "col-1 my-auto";

    var domFab = document.createElement("i");
    domFab.className = obj["icon"];
    domIcon.appendChild(domFab);
    domCont.appendChild(domIcon);

    // DOM: Skill Name
    var domSkill = document.createElement("div");
    domSkill.className = "col my-auto ml-1";
    domSkill.style = "white-space: nowrap; overflow: hidden; text-overflow: ellipsis;";
    domSkill.innerHTML = obj["skill"];
    domCont.appendChild(domSkill);

    // DOM: Stars
    var domStars = document.createElement("div");
    domStars.className = "col text-right skill-star align-middle my-auto";

    for (x = 1; x < 6; x++) {
        var domRate = document.createElement("span");
        if (obj["rating"] >= x) {
            domRate.className = "fa fa-star text-light-blue";
        } else {
            domRate.className = "fa fa-star";
        }
        domStars.appendChild(domRate);
    }

    domCont.appendChild(domStars);
    
    if ((i + 1) <= half) { // first half of skills on the left side
        doc_l.appendChild(domCont);
    } else {
        doc_r.appendChild(domCont);
    }

}
