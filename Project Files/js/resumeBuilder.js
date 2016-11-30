/////////////////////BIO INFO & HEADER SECTION//////////////////////////
var bio = {
    'name': 'Einar Sevilla',
    'role': 'Aspiring Web Developer',
    'contacts': {
        "mobile": '415.948.6686',
        "email": "einarsevilla@gmail.com",
        "github": "Wu-Tang-Name-Here",
        "twitter": "@einarsevilla",
        "location": "San Francisco, CA"
    },
    'welcomeMessage': 'Hello everyone, and welcome to my online resume!',
    "skills": [
        'HTML', 'CSS', 'Office 365', 'Web Design', 'Project Management',
    ],
    'biopic': 'images/ron.jpg',
    'display': function() {
for (contact = 0; contact < bio.contacts.length; contact++) {
    var formattedRole = HTMLheaderRole.replace('%data%', bio.contacts[contact].role);
    $('#header').prepend(formattedRole);

    var formattedHeader = HTMLheaderName.replace('%data%', bio.contacts[contact].name);
    $('#header').prepend(formattedHeader);

    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts[contact].mobile);
    $('#topContacts').append(formattedMobile);

    var formattedEmail = HTMLemail.replace('%data%', bio.contacts[contact].email);
    $('#topContacts').append(formattedEmail);

    var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts[contact].twitter);
    $('#topContacts').append(formattedTwitter);

    var formattedGit = HTMLgithub.replace('%data%', bio.contacts[contact].github);
    $('#topContacts').append(formattedGit);

    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts[contact].location);
    $('#topContacts').append(formattedLocation);

    var formattedPhoto = HTMLbioPic.replace('%data%', bio.contacts[contact].biopic);
    $('#header').append(formattedPhoto);

    var formattedMessage = HTMLwelcomeMsg.replace('%data%', bio.contacts[contact].welcomeMessage);
    $('#header').append(formattedMessage);

    $('#header').append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace('%data%', bio.contacts[contacts].skills[0]);
    $('#skills').append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.contacts[contact].skills[1]);
    $('#skills').append(formattedSkill);

    formattedSkill = HTMLskills.replace('%data%', bio.contacts[contact].skills[2]);
    $('#skills').append(formattedSkill);

    formattedSkill = HTMLskills.replace('%data%', bio.contacts[contact].skills[3]);
    $('#skills').append(formattedSkill);
 }
}
};

/////////////////////EDUCATION INFO & SECTION///////////////////////////
var education = {
    'schools': [{
        'name': 'California State Univerity Long Beach',
        'location': 'Long Beach, CA',
        'degree': 'B.A of Journalism, with Minor in Political Science',
        'majors': 'Journalism',
        'minor': 'Political Science',
        'dates': '2012-2014',
        'url': 'https://www.csulb.edu/',
    }],
    'onlineCourses': [{
        'title': 'Intro to HTML and CSS',
        'courseLink': 'https://www.udacity.com/course/intro-to-html-and-css--ud304',
        'school': 'Udacity',
        'dates': '2016-Present',
        'url': 'https://www.udacity.com/',
    }],
    'display': function() {
    for (ed = 0; ed < education.schools.length; ed++) {
        $('#education').append(HTMLschoolStart);

        var formattedSchool = HTMLschoolName.replace('%data%', education.schools[ed].name).replace("#", education.schools[ed].url);
        $('.education-entry:last').append(formattedSchool);

        var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[ed].degree);
        $('.education-entry:last').append(formattedDegree);

        var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[ed].dates);
        $('.education-entry:last').append(formattedSchoolDates);

        var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[ed].location);
        $('.education-entry:last').append(formattedLocation);

        var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[ed].majors);
        $('.education-entry:last').append(formattedMajor);

        //Online Courses

        $('.education-entry').append(HTMLonlineClasses);

        var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[ed].title).replace("#", education.onlineCourses[ed].courseLink);
        $('.education-entry').append(formattedOnlineTitle);

        var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[ed].school);
        $('.education-entry').append(formattedOnlineSchool);

        var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[ed].dates);
        $('.education-entry').append(formattedOnlineDates);

        var formattedUrl = HTMLonlineURL.replace('%data%', education.onlineCourses[ed].url).replace('#', education.onlineCourses[ed].url);
        $('.education-entry').append(formattedUrl);
    }
}
};

///////////////////////WORK INFO & SECTION////////////////////////////////
var work = {
    'jobs': [{
        'employer': 'ZAG Technical Services',
        'employerLink': 'https://www.zagtech.com/',
        'title': 'Content Administrator',
        'dates': 'Aug. 2015 - Present',
        'location': 'San Jose, CA',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosq.'
    }, {
        'employer': 'urple Star MD',
        'employerLink': 'https://www.purplestarmd.com/',
        'title': 'Bud Tender',
        'dates': "Aug. 2014 - Dec. 2015",
        'location': "San Francisco, CA",
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosq.',
    }],
    'display': function() {
    for (job = 0; job < work.jobs.length; job++) {
        $('#workExperience').append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer).replace('#', work.jobs[job].employerLink);
        var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $('.work-entry:last').append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
        $('.work-entry:last').append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
        $('.work-entry:last').append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
        $('.work-entry:last').append(formattedDescription);
    }
}
};

/////////////////////////PROJECTS INFO & SECTION///////////////////////////////

var projects = {
    'project': [{
        'title': 'Project One',
        'dates': '2016',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosq.',
        'images': [
            'images/manifsteel.jpg',
        ],
    }],
    'display': function() {
    for (project = 0; project < projects.projects.length; project++) {
        $('#projects').append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
        $('.project-entry:last').append(formattedProjectTitle);

        var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
        $('.project-entry:last').append(formattedProjectDates);

        var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
        $('.project-entry:last').append(formattedProjectDescription);

        var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.projects[project].images);
        $('.project-entry:last').append(formattedProjectImage);
    }
}
};

//////////////////////////GOOGLE MAP SECTION//////////////////////////////

$("#mapDiv").append(googleMap);

/////////////////////////////FOOTER CONTACTS SECTION///////////////////////

for (footerContact = 0; footerContact < bio.contacts.length; footerContact++) {

    var footerMobile = HTMLmobile.replace("%data%", bio.contacts[footerContact].mobile);
    $("#footerContacts").append(formattedMobile);

    var footerEmail = HTMLemail.replace("%data%", bio.contacts[footerContact].email);
    $("#footerContacts").append(formattedEmail);

    var footerTwitter = HTMLtwitter.replace("%data%", bio.contacts[footerContact].twitter);
    $("#footerContacts").append(formattedTwitter);

    var footerGit = HTMLgithub.replace("%data%", bio.contacts[footerContact].github);
    $("#footerContacts").append(formattedGit);

    var footerLocation = HTMLlocation.replace("%data%", bio.contacts[footerContact].location);
    $("#footerContacts").append(formattedLocation);
}

/*function inName(name) {
    name = name.trim().split(" ");
    console.log (name);
    name[1] = name[1].toUppercase();
    name[0] = name[0].slice(0,1).toUppercase() + name[0].slice(1).toLowerCase();

    return name[0] +" "+name[1];
}

$("#main").append(internationalizeButton);
*/