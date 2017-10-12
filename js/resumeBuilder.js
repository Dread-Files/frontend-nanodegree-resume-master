/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
  "name": "Asad Ibrahim",
  "role": "Web Developer",
  "contacts": {
    "email": "fahadi1997@gmail.com",
    "mobile": "571-325-8087",
    "github": "Dread-Files",
    "location": "Springfield, VA"
  },
  "welcomeMessage": "Making new things, and learning new skills.",
  "skills": ["Quick learner", "Tech Repair", "Java Programming", "Web Developer"],
  "biopic": "images/mypic-2.jpg"
};

bio.display = function() {
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);

  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts, #footerContacts").append(formattedEmail);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts, #footerContacts").append(formattedMobile);

  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts, #footerContacts").append(formattedLocation);

  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts, #footerContacts").append(formattedGithub);

  var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").append(formattedPic);

  var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedMessage);

  $("#header").append(HTMLskillsStart);

  bio.skills.forEach(function(skill) {
    var formattedSkills = HTMLskills.replace("%data%", skill);
    $("#skills").append(formattedSkills);
  });
};

bio.display();

var education = {
  "schools": [{
    "name": "Lake Braddock Secondary School",
    "location": "Burke, VA",
    "degree": "High School GED",
    "majors": ["NA"],
    "dates": "09/2014 - 06/2015"
  },
  {
    "name": "NOVA",
    "location": "Annandale, VA",
    "degree": "persuing Associates",
    "majors": ["Information Technologies"],
    "dates": "08/2015 - Present"
  }],
  "onlineCourses": [{
    "title": "Front End Web Developer",
    "school": "Udacity",
    "dates": "05/2017 - Present",
    "url": "https://www.udacity.com/"
  }]
};

education.display = function() {
  $("#education").append(HTMLschoolStart);

  education.schools.forEach(function(school) {
    var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
    $(".education-entry:last").append(formattedSchoolName);

    var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
    $(".education-entry:last").append(formattedSchoolDates);

    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
    $(".education-entry:last").append(formattedSchoolDegree);

    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
    $(".education-entry:last").append(formattedSchoolMajor);

    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
    $(".education-entry:last").append(formattedSchoolLocation);
  });

  $("#education").append(HTMLonlineClasses);

  education.onlineCourses.forEach(function(course) {
    var formattedCourseTitle = HTMLonlineTitle.replace("%data%", course.title);
    $("#education").append(formattedCourseTitle);

    var formattedCourseSchool = HTMLonlineSchool.replace("%data%", course.school);
    $("#education").append(formattedCourseSchool);

    var formattedCourseDates = HTMLonlineDates.replace("%data%", course.dates);
    $("#education").append(formattedCourseDates);

    var formattedCourseURL = HTMLonlineURL.replace("%data%", course.url);
    $("#education").append(formattedCourseURL);
  });
};

education.display();

var work = {
  "jobs": [{
    "employer": "Dollar Tree",
    "title": "Cashier",
    "location": "Burke, VA",
    "dates": "06/2015 - 08/2015",
    "description": "I was one of the chashiers who had to quickly help customers find what they need and check them out just as quickly."
  },
  {
    "employer": "Staples",
    "title": "Tech Sales Associate",
    "location": "Burke, VA",
    "dates": "09/2015 - present",
    "description": "As Tech Sales Associate, it was my job to help customers find the right computers, printers, and other technologies that fits their task. I also preformed repairs for computer hardware/software problems, and cell phone screen replacement."
  }]
};

work.display = function() {
  work.jobs.forEach(function(job) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
    $(".work-entry:last").append(formattedWorkDates);

    var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
    $(".work-entry:last").append(formattedWorkDescription);

    var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
    $(".work-entry:last").append(formattedWorkLocation);
  });
};

work.display();

var projects = {
  "projects": [{
    "title": "My Portfolio",
    "dates": "05/25/2017",
    "description": "Created a website as my portfolio with HTML and css.",
    "images": ["images/portfolio.png"]
  },
  {
    "title": "Youtube Channel",
    "dates": "05/2017 - present",
    "description": "Created videos to practice my video editing skill.",
    "images": ["images/youtube-channel.png"]
  }]
};

projects.display = function() {
  projects.projects.forEach(function(item) {
    $("#projects").append(HTMLprojectStart);

    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", item.title);
    $(".project-entry:last").append(formattedProjectTitle);

    var formattedProjectDates = HTMLprojectDates.replace("%data%", item.dates);
    $(".project-entry:last").append(formattedProjectDates);

    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", item.description);
    $(".project-entry:last").append(formattedProjectDescription);
    item.images.forEach(function(img) {
      var formattedProjectImage = HTMLprojectImage.replace("%data%", img);
      $(".project-entry:last").append(formattedProjectImage);
    });
  });
};

projects.display();

var clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  var x = loc.pagex;
  var y = loc.pagey;
  logClicks(x, y);
});

function inName() {
  bio.name = bio.name.trim().split(" ");
  bio.name[1] = bio.name[1].toUpperCase();
  bio.name[0] = bio.name[0].slice(0,1).toUpperCase() + bio.name[0].slice(1).toLowwerCase();
  return bio.name[0] + " " + bio.name[1];
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
