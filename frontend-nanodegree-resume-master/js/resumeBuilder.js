/*
This is empty on purpose! Your code to build the resume will go here.
 */
var WorkObject = {};
WorkObject.employer= "ZAG Technical Services"
WorkObject.position= "Content Administrator";
WorkObject.years= "1.5";
WorkObject.city= "San Jose, CA";

var EducationObject={};
EducationObject["years"]= "2012-2014"
EducationObject["school"]= "Long Beach State Univerity";
EducationObject["city"]= "Long Beach. CA";

//$("#main").append(WorkObject["position"]);
//$("#main").append(EducationObject.school);

var bio = {
    "name":"Einar Sevilla",
    "role":"Aspiring Web Developer",
    "contacts":{
        "mobile":"415.948.6686",
        "email":"einarsevilla@gmail.com",
        "github":"Wu-Tang-Name-Here",
        "twitter":"@einarsevilla",
        "location":"San Francisco"
    },
    "welcomeMessage":"Hello everyone, and welcome to my online resume!",
    "skills":[
        "HTML","CSS","Office 365", "Web Design","Project Management",
    ],
    "biopic":"images/fry.jpg"
}

var education = {
    "schools": [
        {
            "name":"City College of San Francisco",
            "city":"San Francisco, CA",
            "major":"Social and Behavioral Science",
            "graduation":"2012"
        },
        {
            "name":"California State Univerity Long Beach",
            "city":"Long Beach, CA",
            "major":"Journalism",
            "minor":"Political Science",
            "graduation":"2014",
        }
    ]
}

var work = {
    "jobs": [
        {
            "employer":"ZAG Technical Services",
            "title":"Content Administrator",
            "dates":"Aug. 2015 - Present",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosq."
        },
        {
            "employer":"Purple Star MD",
            "title":"Bud Tender",
            "dates":"Aug. 2014 - Dec. 2015",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosq.",
        }
    ]
};

var projects = {
    "projects": [
        {
            "title":"Project One",
            "date":"2016",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosq.",
            "images":"images/ron.jpg"
        },
        {
            "title":"Project Two",
            "date":"2016",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosq.",
            "images":"images/manifsteel.jpg"
        }
    ]
};

/*if(bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);

    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);

    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
};*/

//function displayWork(){
    for(job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description)

        $(".work-entry:last").append(formattedDescription);
}


projects.display = function () {
    for(project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedProjectTitle);

        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].date);
        $(".project-entry:last").append(formattedProjectDates);

        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
        $(".project-entry:last").append(formattedProjectImage);
        }
}
projects.display();

name.display = function () {
    for(name in bio.name) {
        $("#header").append(HTMLcontactGeneric);
    }
}
name.display();
/*function inName(name) {
    name = name.trim().split(" ");
    console.log (name);
    name[1] = name[1].toUppercase();
    name[0] = name[0].slice(0,1).toUppercase() + name[0].slice(1).toLowerCase();

    return name[0] +" "+name[1];
}

$("#main").append(internationalizeButton);
*/

$("#mapDiv").append(googleMap);
