// Put experience in the correct order, starting with the most recent experience.
var experience_json = {
   "work":[
      {
         "role":"IT Associate [Placement]",
         "company":"PwC",
         "href":"http://www.pwc.com/",
         "icon":"img/experience/pwc.jpeg",
         "dates":"09/2017 - 08/2018",
         "skills":[
            "Python",
            "HTML5",
            "CSS3",
            "Bootstrap",
            "JavaScript",
            "JSON",
            "Chrome Extensions",
            "APIs",
            "Postman",
            "Reverse Engineering",
            "Google Analytics",
            "Alteryx",
            "NLP",
            "Internet of Things",
            "Microsoft Azure",
            "Teaching",
            "Parallel Programming",
            "Firebase",
            "Electronics",
            "Agile"
         ],
         "detail":[
            [
               "Data Intelligence",
               [
                  "Refined the manual processing of feedback from clients, by developing a Natural Language Processing tool.",
                  "Increased productivity by identifying and automating reports with Alteryx and Python, that were otherwise manually created.",
                  "Assisted various teams in making better informed decisions by creating dashboards in Tableau.",
                  "Centralised information for clients, by envisaging and developing a chat bot and separate landing page, with knowledge on web design [Bootstrap], Python and APIs [reverse engineered]."
               ]
            ],
            [
               "Innovation",
               [
                  "Developed and maintained a Chrome Extension landing page using HTML, CSS, JavaScript, APIs, Google Analytics and Microsoft Azure for centralising information in the firm.",
                  "Deployed the Chrome Extension successfully to 200 people, latterly receiving partner-backing to release it to 4,000 more.",
                  "Created a Smart Bucket for collecting charities Gift Aid, using Python, Azure, Raspberry Pi and other electronic hardware."
               ]
            ],
            [
               "Outside of normal duties",
               [
                  "Upskilled my colleagues by teaching Python skills and solving problems in hackathons and private programming lessons.",
                  "Travelled to Belfast to teach secondary school teachers how to operate Raspberry Pi and Sense HAT in the classroom."
               ]
            ]
         ]
      },
      {
         "role":"Freelance Technology Support",
         "company":"",
         "href":"",
         "icon":"img/experience/freelance.png",
         "dates":"06/2016 - 08/2018",
         "skills":[
            "Python",
            "JSON",
            "Microsoft Excel"
         ],
         "detail":[
            [
               "",
               [
                  "Provided in-person and remote technology support to small local businesses.",
                  "Supported and guided employers through software, device installation/ migration and general IT support."
               ]
            ]
         ]
      },
      {
         "role":"Camp Counsellor",
         "company":"AmeriCamp",
         "href":"https://www.americamp.co.uk",
         "icon":"img/experience/americamp.png",
         "dates":"06/2017 - 08/2017",
         "skills":[

         ],
         "detail":[
            [
               "",
               [
                  "Planned, managed and executed sailing and waterfront classes, whilst ensuring campers had fun and remained safe.",
                  "Provided safe supervision of campers within their living area.",
                  "Gained American lifeguarding and sailing qualifications."
               ]
            ]
         ]
      },
      {
         "role":"Technical Assistant",
         "company":"NTSU",
         "href":"https://www.trentstudents.org",
         "icon":"img/experience/ntsu.jpg",
         "dates":"05/2016 - 06/2017",
         "skills":[
            "Electronics"
         ],
         "detail":[
            [
               "",
               [
                  "Managed the setup, lighting, sound and Twitter feed.",
                  "Worked unsociable hours as part of a focused team.",
                  "Communicated with event hosts in order to tailor events.",
                  "Solved problems that arise during the events."
               ]
            ]
         ]
      },
      {
         "role":"Recruitment Intern",
         "company":"Driver Hire",
         "href":"https://www.driverhire.co.uk/office/grimsby-scunthorpe/",
         "icon":"img/experience/driverhire.png",
         "dates":"07/2016 - 08/2016",
         "skills":[
            "HTML5",
            "CSS3",
            "Teaching",
            "Microsoft Excel",
            "Visual Basic"
         ],
         "detail":[
            [
               "",
               [
                  "Communicated and recruited drivers over the phone.",
                  "Developed innovative solutions to inefficient and time-consuming office operations, using Visual Basic.",
                  "Managed newsletter, website and social media.",
                  "Solved numerous IT-related problems within a small team."
               ]
            ]
         ]
      }
   ],
   "achievements":[
      {
         "role":"Student Member",
         "company":"Institute of Directors",
         "href":"https://www.iod.com",
         "icon":"img/experience/iod.jpg",
         "dates":"11/2015 - 06/2016",
         "skills":[

         ],
         "detail":[
            [
               "",
               [
                  "Led a team to complete a \u00a310 business challenge and successfully raised \u00a3122.50 for a cancer charity.",
                  "Attended a variety of networking and employability events."
               ]
            ]
         ]
      },
      {
         "role":"National Award Winner",
         "company":"Career Ready",
         "href":"https://www.careerready.org.uk",
         "icon":"img/experience/careerready.png",
         "dates":"01/2014 - 06/2015",
         "skills":[

         ],
         "detail":[
            [
               "",
               [
                  "Competed against 2,700 students nationally to receive the National Sir Winfried Bischoff Award, recognising hard-work and dedication during internship and volunteering.",
                  "Travelled to New York on an all-expenses-paid business trip.",
                  "Visited many major businesses, shadowed staff at Moody\u2019s Financial and developed an extensive international network.",
                  "Communicated a speech to 500+ students and since have spoken across the country; from Scotland to London."
               ]
            ]
         ]
      }
   ]
}


function add_exp(field) {
    for (var i = 0; i < experience_json[field].length; i++) {
        var obj = experience_json[field][i]; 

        // DOM: Container
        var domCont = document.createElement("div");
        domCont.className = "row mb-5";

        // DOM: Left
        var domLeft = document.createElement("div");
        domLeft.className = "col-2";

        // DOM: Left A
        var domLeftA = document.createElement("a");
        if (obj["href"] != "") {
            domLeftA.href = obj["href"];
        }

        // DOM: Left A Img
        var domLeftAImg = document.createElement("img");
        domLeftAImg.src = obj["icon"];
        domLeftAImg.className = "img-fluid rounded-circle experience-business-icon";

        // Append all Lefts
        domLeftA.appendChild(domLeftAImg);
        domLeft.appendChild(domLeftA)
        domCont.appendChild(domLeft);

        // DOM: Right
        var domRight = document.createElement("div");
        domRight.className = "col-10";

        // DOM: Right Titles
        var domRightTitles = document.createElement("div");
        domRightTitles.className = "row";

        // DOM: Right Titles Role
        var domRightTitlesRole = document.createElement("div");
        domRightTitlesRole.className = "col-sm-7 font-weight-bold";
        domRightTitlesRole.innerHTML = obj["role"] + "<br>" + obj["company"];
        domRightTitles.appendChild(domRightTitlesRole);

        // DOM: Right Titles Date
        var domRightTitlesDate = document.createElement("div");
        domRightTitlesDate.className = "col-sm-5 text-sm-right font-italic";
        domRightTitlesDate.innerHTML = obj["dates"];
        domRightTitles.appendChild(domRightTitlesDate);

        // Append Right Titles
        domRight.appendChild(domRightTitles);

        // DOM: Right Info
        var domRightInfo = document.createElement("div");
        domRightInfo.className = "row";

        // DOM: Right Info Div
        var domRightInfoDiv = document.createElement("div");
        domRightInfoDiv.className = "col pt-3 pb-3";

        // Loop around each sub title
        for (x = 0; x < obj["detail"].length; x++) {
            var obj2 = obj["detail"][x];
            
            if (obj2[0] != "") {
                // DOM: Right Info Div Title
                var domRightInfoDivTitle = document.createElement("div");
                domRightInfoDivTitle.className = "text-muted";
                domRightInfoDivTitle.innerHTML = obj2[0]; 
                domRightInfoDiv.appendChild(domRightInfoDivTitle);
            }

            // DOM: Right Info Div Experience
            var domRightInfoDivExp = document.createElement("ul");
            domRightInfoDivExp.className = "experience-list";

            // Loop around each bullet point
            for (y = 0; y < obj2[1].length; y++) {
                var obj3 = obj2[1][y];
                // DOM: Right Info Div Experience Li (each bullet point)
                var domRightInfoDivExpLi = document.createElement("li");
                domRightInfoDivExpLi.innerHTML = obj3; 
                domRightInfoDivExp.appendChild(domRightInfoDivExpLi);
            }

            domRightInfoDiv.appendChild(domRightInfoDivExp);
        }

        domRightInfo.appendChild(domRightInfoDiv);
        domRight.appendChild(domRightInfo);

        // DOM: Right Skills
        var domRightSkills = document.createElement("div");
        domRightSkills.className = "row";

        // DOM: Right Skills Col
        var domRightSkillsCol = document.createElement("div");
        domRightSkillsCol.className = "col experience-skill-cont";

        // Loop arond each skill
        for (z = 0; z < obj["skills"].length; z++) {
            var obj4 = obj["skills"][z];
            // DOM: Right Skills Col Skill (each skill)
            var domRightSkillsColSkill = document.createElement("span");
            domRightSkillsColSkill.className = "experience-skill";
            domRightSkillsColSkill.innerHTML = obj4;
            domRightSkillsCol.appendChild(domRightSkillsColSkill);
        }

        domRightSkills.append(domRightSkillsCol);
        domRight.append(domRightSkills);

        // Append Right
        domCont.appendChild(domRight);

        document.getElementById("exp-" + field).appendChild(domCont);

    }
}

add_exp("work");
add_exp("achievements");