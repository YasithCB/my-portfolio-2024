// Get the URL parameters
const urlParams = new URLSearchParams(window.location.search);

// Access the 'project' parameter
const projectName = urlParams.get('name');
const projectNo = urlParams.get('id');
const projectNature = urlParams.get('nature');
const projectClient = urlParams.get('client');
const projectRole = urlParams.get('role');
// Retrieve data from localStorage
let projectDesc = localStorage.getItem(projectNo);

// Set the image name dynamically
document.getElementById("project-img").style.backgroundImage = `url(images/projects/${projectNo}.jpg)`;

console.log(projectName)
console.log(projectNo)
console.log(projectDesc)

// Display the project name
if (projectName) {
    document.getElementById('project-name').textContent = `${projectName}`;
    document.getElementById('project-nature').textContent = `${projectNature}`;
    document.getElementById('project-role').textContent = `${projectRole}`;
    document.getElementById('project-client').textContent = `${projectClient}`;
    document.getElementById('project-description').textContent = `${projectDesc}`;
} else {
    document.getElementById('project-name').textContent = "No project data provided.";
    document.getElementById('project-description').textContent = "";
}