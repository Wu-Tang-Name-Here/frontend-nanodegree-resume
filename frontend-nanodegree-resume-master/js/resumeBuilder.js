/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name":"Einar Sevilla",
    "role":"Aspiring Web Developer",
    "contacts": [
    {
        "mobile":"415.948.6686",
        "email":"einarsevilla@gmail.com",
        "github":"Wu-Tang-Name-Here",
        "twitter":"@einarsevilla",
        "location":"San Francisco"
    }
    ],
    "welcomeMessage":"Hello everyone, and welcome to my online resume!",
    "skills":[
        "HTML","CSS","Office 365", "Web Design","Project Management",
    ],
    "biopic":"images/einar.jpg"
}

var education = {
    "schools": [
        {
            "name":"California State Univerity Long Beach",
            "city":"Long Beach, CA",
            "degree":"B.A of Journalism, with Minor in Political Science",
            "major":"Journalism",
            "minor":"Political Science",
            "dates":"2012-2014",
            "url": "https://www.csulb.edu/",
        }],
    "onlineCourses": [
        {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "dates": "2016-Present",
            "url": "https://www.udacity.com/",
        }
    ]
}

var work = {
    "jobs": [
        {
            "employer":"ZAG Technical Services",
            "title":"Content Administrator",
            "dates":"Aug. 2015 - Present",
            "location": "San Jose",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosq."
        },
        {
            "employer":"Purple Star MD",
            "title":"Bud Tender",
            "dates":"Aug. 2014 - Dec. 2015",
            "location":"San Francisco",
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
            "images":"images/manifsteel.jpg"
        }
    ]
};

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
var formattedHeader = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedHeader);

for (contact = 0; contact < bio.contacts.length; contact++) {

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[contact].mobile);
$("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts[contact].email);
$("#topContacts").append(formattedEmail);

var formattedTwitter= HTMLtwitter.replace("%data%", bio.contacts[contact].twitter);
$("#topContacts").append(formattedTwitter);

var formattedGit = HTMLgithub.replace("%data%", bio.contacts[contact].github);
$("#topContacts").append(formattedGit);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts[contact].location);
$("#topContacts").append(formattedLocation);
}



var formattedPhoto = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedPhoto);
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedMessage);

if(bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);

    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);

    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
};

//function displayWork(){
    for(job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description)
        $(".work-entry:last").append(formattedDescription);
}


projects.display = function () {
    for(project = 0; project < projects.projects.length; project++) {
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

    for(ed = 0; ed < education.schools.length; ed++) {
        $("#education").append(HTMLschoolStart);

        var formattedSchool = HTMLschoolName.replace("%data%", education.schools[ed].name);
        $(".education-entry:last").append(formattedSchool);

        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[ed].degree);
        $(".education-entry:last").append(formattedDegree);

        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[ed].dates);
        $(".education-entry:last").append(formattedSchoolDates);

        var formattedCity = HTMLschoolLocation.replace("%data%", education.schools[ed].city);
        $(".education-entry:last").append(formattedCity);

        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[ed].major);
        $(".education-entry:last").append(formattedMajor);
    };

    for (online = 0; online < education.onlineCourses.length; online++){
        $("#education").append(HTMLonlineClasses);

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onine].title);
        $("#education").append(formattedOnlineTitle);

        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onelineCourses[online].school);
        $("#education").append(formattedOnlineSchool);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onelineCourses[online].dates);
        $("#education").append(formattedOnlineDates);

        var formattedUrl = HTMLonlineURL .replace("%data%", education.onlineCourses[online].url);
        $("#education").append(formattedUrl);

        }


$("#mapDiv").append(googleMap);

/*function inName(name) {
    name = name.trim().split(" ");
    console.log (name);
    name[1] = name[1].toUppercase();
    name[0] = name[0].slice(0,1).toUppercase() + name[0].slice(1).toLowerCase();

    return name[0] +" "+name[1];
}

$("#main").append(internationalizeButton);
*/