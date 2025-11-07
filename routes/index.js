const express = require('express');
const router = express.Router();

// Local helper with site-wide locals
const siteInfo = {
  name: "Josée Jones",
  title: "Josée Jones — Web Developer & Designer",
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" }
  ]
};

router.get('/', function(req, res, next) {
  res.render('index', { site: siteInfo });
});

router.get('/about', function(req, res, next) {
  res.render('about', { site: siteInfo });
});

router.get('/projects', function(req, res, next) {
  // example placeholder projects
  const projects = [
    { title: "Project 1: Simple Online Store", summary: "Last year I got the chance to make a fake virtual store using python code from my intro to programming class. In this project we created a group of items that could be purchased, had credit card verification and an order tracking sheet.", image: "/images/project1.png" },
    { title: "Project 2: Grades as a Determinant of Success Debate Project ", summary: "In my Writing and Critical Thinking class, we had a project to research the pros and cons of having grades being the determinant factor of students' grades. Through my research I realized that I am for having grades as an accurate depiction of students' success in the classroom.", image: "/images/project2.jpg" },
    { title: "Project 3: Video on Buisness SDG's (Sustainable Development Goals)", summary: "For this project I grouped up with some other students and we picked an Indigenous business that was actively making an impact on the Canadian economy. Through this project we were able to pick some SDG's and explain how they are targeting/close to achieving these goals.", image: "/images/project3.png" }
  ];
  res.render('projects', { site: siteInfo, projects });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { site: siteInfo });
});

module.exports = router;
