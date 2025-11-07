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
    { title: "Project One", summary: "A short description of project one.", image: "/images/placeholder-1.svg" },
    { title: "Project Two", summary: "A short description of project two.", image: "/images/placeholder-2.svg" },
    { title: "Project Three", summary: "A short description of project three.", image: "/images/placeholder-3.svg" }
  ];
  res.render('projects', { site: siteInfo, projects });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { site: siteInfo });
});

module.exports = router;
