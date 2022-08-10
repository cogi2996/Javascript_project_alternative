var courseApi = 'http://localhost:3000/courses';
function renderCourses(courses) {
    var htmls = courses.map(function (course) {
        return `  <li class = 'lists-item-id-${course.id}'>
        <h4>${course.name}</h4>
        <p>${course.description}</p>
        <button onclick ="handlesDeleteCourse(${course.id})">delete</button>
    </li>`;
    })
    var listCourses = document.querySelector('#list-courses');
    listCourses.innerHTML = htmls.join('');
}
function getcourse(callback) {
    fetch(courseApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback)
}

function createCourse(data,callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(courseApi,options)
        .then(function (response) {
            response.json();
        })
        .then(callback)
}

function handlesCreateCourse() {
    var input = document.querySelector('.submit');
    input.onclick = function () {
        var nameInput = document.querySelector('input[name="name"]').value;
        var descriptionInput = document.querySelector('input[name="description"]').value;
        var objectData = {
            name: nameInput,
            description: descriptionInput
        };
        createCourse(objectData,renderCourses);
    }
}

function handlesDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    fetch(courseApi+'/'+id,options)
        .then(function (response) {
            response.json();
        })
   
}


function start() {
    getcourse(renderCourses);
    handlesCreateCourse();
}
start();