// Put projects in the correct order, starting with the most recent projects.


var projects_json = {
    "projects":[
        {"name":"ChromeHome",
         "desc":"A new tab dashboard designed to centralise information and make your day more productive. It uses a Chrome Extension to replace your New Tab page on Chrome, whilst connecting to various APIs such as Google Calendar, Yahoo Weather and more. I was one of two lead developers for this project.",
         "img":"img/projects/chromehome.png",
         "skills":["HTML5", "JavaScript", "CSS3", "Chrome Extensions", "Google Analytics", "APIs", "Reverse Engineering", "JSON", "Microsoft Azure"],
         "url":""},
        {"name":"Smart Bucket",
         "desc":"A bucket that counts the amount of coins entered, assigns it to a persons unique staff number and automatically fills out a form for collecting the 25% Gift Aid from the government. The aim of this project was to reduce the amount of time spent filling out a Gift Aid form, meaning that more people were likely to claim it. I built this using a Raspberry Pi, LCD, Keyboard and Coin Acceptor using Python.",
         "img":"img/projects/smartbucket.png",
         "skills":["Python", "Internet of Things", "Raspberry Pi", "Alteryx", "Microsoft Azure", "Parallel Programming", "Electronics"],
         "url":""},
        {"name":"Teacher Training Materials",
         "desc":"Travelled to Belfast to teach secondary school teachers how to operate Raspberry Pi and Sense HAT in the classroom, providing them with teaching resources and helping with any problems they encountered.",
         "img":"img/projects/belfast.jpg",
         "skills":["Python", "Internet of Things", "Raspberry Pi", "Teaching", "Electronics"],
         "url":""},
        {"name":"Home Automation",
         "desc":"Working on an open source home automation platform using Python 3 and YAML. I run a server on my Raspberry Pi which controls lights, hoovers, motion sensors, door sensors, temperature, buttons, TV's and various other smart home devices. The main aim of this project is not only to connect devices in my home to the internet, but to automate the triggering of the devices with certain locations, times of the day or other conditions.",
         "img":"img/projects/home.png",
         "skills":["Python", "Internet of Things", "Raspberry Pi", "Electronics", "YAML", "APIs", "Reverse Engineering", "MQTT"],
         "url":""},
        {"name":"Personal Website",
         "desc":"A website to help demonstrate my skills and projects I have worked on, that are not appropriate for other platforms like GitHub due to the sensitivity of the projects.",
         "img":"img/projects/site.png",
         "skills":["HTML5", "CSS3", "JavaScript", "Bootstrap", "JSON", "Google Analytics"],
         "url":"https://github.com/CamzBarber/CameronBarber.com"},
        {"name":"Pyteryx",
         "desc":"A reverse engineered RESTful Alteryx Server API for Python. This offers additional functionality over what Alteryx's public API does. This project was worked on with a friend.",
         "img":"img/projects/pyteryx.png",
         "skills":["Python", "Reverse Engineering", "Python Libraries", "Alteryx", "APIs"],
         "url":"https://github.com/CamzBarber/pyteryx"},
        {"name":"Sky Moodslider",
         "desc":"A project developed for Sky which suggests films and tv shows to watch, based on the users mood.",
         "img":"img/projects/sky.png",
         "skills":["HTML5", "CSS3", "JavaScript", "XML"],
         "url":"https://github.com/CamzBarber/sky-moodslider"}
    ]
}


function get_skill(skill) {
    for (var y = 0; y < skills_json.skills.length; y++) {
        var obj = skills_json.skills[y];
        if (obj["skill"] == skill) {
            return obj["icon"];
        }
    }
    console.error('Skill was not matched, please change the following: ' + skill)
    return "fas fa-exclamation-triangle";
}

function get_all_skills(obj) {
    var all_skills = []
    for (var x = 0; x < obj["skills"].length; x++) {
        var single_skill = []
        var skill_icon = get_skill(obj["skills"][x]);
        single_skill.push(obj["skills"][x]);
        single_skill.push(skill_icon);
        
        all_skills.push(single_skill);
    }
    return all_skills;
}

function create_card(obj, all_skills) {
    // DOM: Card
    var domCard = document.createElement("div");
    domCard.className = "card";
    
    // DOM: Card Img
    var domCardImg = document.createElement("img");
    domCardImg.className = "card-img-top img-popup";
    domCardImg.src = obj["img"];
    domCardImg.alt = obj["name"];
    domCard.appendChild(domCardImg);
    
    // DOM: Card Div 1
    var domCardDiv1 = document.createElement("div");
    domCardDiv1.className = "card-body";
    
    // DOM: Card Div 1 Title
    var domCardDiv1Title = document.createElement("span");
    domCardDiv1Title.className = "card-title font-weight-bold mr-2";
    domCardDiv1Title.innerHTML = obj["name"];
    domCardDiv1.appendChild(domCardDiv1Title);
    
    // DOM: Card Div 1 Text
    var domCardDiv1Title = document.createElement("span");
    domCardDiv1Title.className = "card-text";
    domCardDiv1Title.innerHTML = obj["desc"];
    domCardDiv1.appendChild(domCardDiv1Title);
    
    // Append Card Div 1
    domCard.appendChild(domCardDiv1);
    
    // DOM: Card UL
    var domCardUL = document.createElement("ul");
    domCardUL.className = "list-group list-group-flush text-center";
    
    // DOM: Card UL LI
    var domCardULLI = document.createElement("li");
    domCardULLI.className = "list-group-item text-secondary";
    
    // DOM: Card UL LI Icon (each skill)
    for (var s = 0; s < all_skills.length; s++) {
        var skill_obj = all_skills[s]
        
        var domCardULLIIcon = document.createElement("i");
        domCardULLIIcon.className = "project-skill " + skill_obj[1];
        domCardULLIIcon.setAttribute("data-toggle", "tooltip");
        domCardULLIIcon.setAttribute("data-placement", "top");
        domCardULLIIcon.setAttribute("title", skill_obj[0]); 
        domCardULLI.appendChild(domCardULLIIcon);
    }
    
    // Append Card UL LI
    domCardUL.appendChild(domCardULLI);
    
    // Append Card UL
    domCard.appendChild(domCardUL);
    
    if (obj["url"] != "") {
        // DOM: Card Div 2
        var domCardDiv2 = document.createElement("div");
        domCardDiv2.className = "card-footer text-center";

        // DOM: Card Div 2 Link
        var domCardDiv2Link = document.createElement("a");
        domCardDiv2Link.className = "btn btn-dark";
        domCardDiv2Link.href = obj["url"];

        // DOM: Card Div 2 Link Icon
        var domCardDiv2LinkIcon = document.createElement("i");
        domCardDiv2LinkIcon.className = "fab fa-github";
        domCardDiv2Link.append(domCardDiv2LinkIcon);

        // Append Card Div 2 Link
        domCardDiv2Link.innerHTML += " GitHub";
        domCardDiv2.appendChild(domCardDiv2Link);

        // Append Card Div 2
        domCard.appendChild(domCardDiv2);
    }
    
    return domCard;
}


// Checking if Projects length is odd or even
var odd_even = 0;
if (projects_json.projects.length % 2 != 0) {
    odd_even = 1;
}

for (var i = 0; i < projects_json.projects.length; i++) {
    var obj = projects_json.projects[i];
    var all_skills = get_all_skills(obj);
    
    // Create card
    domCard = create_card(obj, all_skills);
    
    // If it is even project (starts at 0 though) OR there's an odd number of total projects on the first two enteries, then create container row
    if ((i % 2 == odd_even) || ((odd_even == 1) && ((i == 1 || i == 0)))) { 
        // DOM: Container
        var domCont = document.createElement("div");
        domCont.className = "card-deck mb-sm-4";
    }
    
    domCont.appendChild(domCard);
    
    document.getElementById("projects-input").appendChild(domCont); // potential for errors, appends the Cont twice, once for each project. Works though? Does need to update after new card appended.
}