var bio = {
	"name": "Alexey Drozdov",
	"role": "Product Owner",
	"contacts": {
		"mobile": "+1-my-phone",
		"email": "my@e.mail",
		"github": "mygithub",
		"twitter": "mytwitter",
		"location": "Moscow"
	},
	"welcome": "Hi guys! Welcome to the brief story of my life!",
	"biopic": "images/foto.jpg",
	"skills": ["Product Management", "Project Manageent", "Requirement Management", "Requirement Analysis", "DO-178B/C", "Agile Methodologies", "Configuration Management", "Testing", "Black Box Testing"],
	display: function () {
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome);

		displayHeader();
		displayContacts("topContacts");
		$("#header").append(formattedBioPic);
		$("#header").append(formattedwelcomeMsg);
		displaySkills();
	}
};

var education = {
	"schools": [
	{
		"name": "MEPHI",
		"location": "Moscow",
		"degree": "Specialist",
		"dates": "1999-2005",
		"major": ["Applied Maths", "System Programming"],
		"url": "https://mephi.ru/"
	},
	{
		"name": "Liceum of Troitsk",
		"location": "Troitsk, Moscow region",
		"degree": "Elementary School",
		"dates": "1989-1999",
		"major": ["Math class"],
		"url": "http://www.trolyceum.ru/"
	}
	],
	"onlineCourses": [
	{
		"title": "Front-End Nanodegree",
		"school": "Udacity",
		"date": "2015",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	},
	{
		"title": "Data Science Specialization",
		"school": "Johns Hopkins University - Coursera",
		"date": "2014",
		"url": "https://www.coursera.org/specialization/jhudatascience/1"
	},
	{
		"title": "Fundamentals of Computing Specialization",
		"school": "Rice University - Coursera",
		"date": "2014",
		"url": "https://www.coursera.org/specialization/fundamentalscomputing2/37"
	}
	],
	display: function () {

		for (var school = 0; school < education.schools.length; school++) {
			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(formattedName + formattedDegree);
			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append(formattedLocation);
			for (var maj=0; maj < education.schools[school].major.length; maj++) {
				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major[maj]);
				$(".education-entry:last").append(formattedMajor);
			}
		}

		$("#education").append(HTMLonlineClasses);

		for (var course = 0; course < education.onlineCourses.length; course++) {
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);

			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(formattedTitle + formattedSchool);
			$(".education-entry:last").append(formattedDate);
			$(".education-entry:last").append('<br>');
			//$(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[course].url));

		}

	}
};

var work = {
	"jobs": [
	{
		"employer": "DC BARS",
		"title": "Product Owner",
		"location": "Moscow",
		"dates": "2010-2015",
		"description": "Product ownership on Research and Development projects. Product & Project management on Training Course (Workshop) Development project."
	},
	{
		"employer": "DC BARS",
		"title": "Project Manager",
		"location": "Moscow",
		"dates": "2006-2010",
		"description": "Managing different software verification projects in accordance with DO-178B."
	},
	{
		"employer": "DC BARS",
		"title": "Software Engineer",
		"location": "Moscow",
		"dates": "2004-2006",
		"description": "Verification of the avionics software in accordance with DO178B."
	}
	],
	display: function () {
		for (var job = 0; job < work.jobs.length; job++) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};

var projects = {
	"projects": [
	{
		"title": "Certivision",
		"dates": "2014-2015",
		"description": "Development of DC BARS product line CERTIVISION Lifecycle Process Management Framework for avionics development",
		"images": ["images/dev.jpg", "images/dev2.png"]
	},
	{
		"title": "DO-178B Workshop",
		"dates": "2011-2012",
		"description": "Workshop on software development according to DO-178B",
		"images": ["images/backend.jpg", "images/frontend.jpg"]
	}
	],
	display: function () {

		for (var project = 0; project < projects.projects.length; project++) {
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(formattedTitle);
			$(".project-entry:last").append(formattedDates);
			$(".project-entry:last").append(formattedDescription);

			var i = 0;
			while (i < projects.projects[project].images.length) {
				var formattedImg = HTMLprojectImage.replace("%data%", projects.projects[project].images[i]);
				$(".project-entry:last").append(formattedImg);
				i += 1;
			}
		}
	}
};


// some helper functions for bio
function displayHeader() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
}


function displayContacts(id) {
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);

	$("#" + id).prepend(formattedGithub);
	$("#" + id).prepend(formattedTwitter);
	$("#" + id).prepend(formattedMobile);
	$("#" + id).prepend(formattedEmail);
}

function displaySkills() {
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		var i = 0;
		while (i < bio.skills.length){
			var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkills);
			i += 1;
		}
	}
}
/*
function displayBio() {
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome);

	displayHeader();
	displayContacts("topContacts");
	$("#header").append(formattedBioPic);
	$("#header").append(formattedwelcomeMsg);
	displaySkills();
}

function displayWork() {

	for (job in work.jobs) {
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	}

}


function displayProjects() {

	for (project in projects.projects) {
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images));
		}
	}

}

function displayEducation() {

	for (school in education.schools) {
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(formattedName + formattedDegree);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedLocation);
		for (maj in education.schools[school].major) {
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major[maj]);
			$(".education-entry:last").append(formattedMajor);
		}
	}

	$("#education").append(HTMLonlineClasses);

	for (course in education.onlineCourses) {
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);

		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(formattedTitle + formattedSchool);
		$(".education-entry:last").append(formattedDate);
		$(".education-entry:last").append('<br>');
		//$(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[course].url));

	}

}
*/

// some other helper functions
function displayMap() {
	$("#mapDiv").append(googleMap);
}

function displayInternationalization() {
	$("#letsConnect").append(internationalizeButton);
}

// perform internationalization of name
function inName() {
	var name = bio.name.trim().split(" ");
	name[0] = name[0][0].toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();
	return name.join(" ");
}

/*
displayBio();
displayWork();
displayProjects();
displayEducation();
*/

bio.display();
work.display();
projects.display();
education.display();
displayMap();
displayInternationalization();
displayContacts("footerContacts");