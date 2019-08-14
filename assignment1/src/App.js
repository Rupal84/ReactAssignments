import React from 'react';
import './App.css';

var featuredCourses = [
  {
    title: "HTML5",
    Author:"Dan Brown",
    Category: "Web development"
  },
  {
    title: "CSS",
    Author:"Robin Cook",
    Category: "Web development"
  },
  {
    title: "Javascript",
    Author:"Dan Brown",
    Category: "Programming"
  }
]

var coursesCatalog = [
  {
    courseName: "PHP",
    category: "server scripting",
    author: "Richard James"
  },
  {
    courseName: "Angular6",
    category: "Web development",
    author: "Kirk Hamett"
  },
  {
    courseName: "Node.js",
    category: "Server side JS",
    author: "Ryan Dahl"
  },
  {
    courseName: "Bootstap",
    category: "UI Development",
    author: "Mark Hill"
  },
  {
    courseName: "Python",
    category: "Programming",
    author: "Guido van Rossum"
  }
]
function App() {
  return (
    <div className='wrapper'>
        <div className='cols6'>
          <h2 className="custom-header">Featured Courses</h2>
          <div className='featured-courses'>
            {getFeaturedCourses()}
          </div>
        </div>
        <div className='cols6 course-catalog'>
          <h2>Course Catalog</h2>
          <table >
            <tbody>
              {getCoursesCatalog()}
          </tbody>
          </table>
      </div>
    </div>
  );
}

function getCoursesCatalog() {
  var courses=[];
  courses.push(
    <tr>
      <th>Course Name</th>
      <th>Category</th>
      <th>Author</th>
    </tr>

  )
   coursesCatalog.map((course, index)=> {
    courses.push(getCoursesInCatalog(course, index));
  })
  return courses;
}

function getCoursesInCatalog(course, index) {
  return (
    <tr key={course.courseName} className={index%2===0?"black":"grey"}>
      <td >{course.courseName}</td>
      <td >{course.category}</td>
      <td >{course.author}</td>
    </tr>
  )
}

function getFeaturedCourses() {
  return featuredCourses.map((course)=>{
    return (
      <div className="featured-course">
        {getCourseKeysAndVals(course)}
        <button type="submit">Summary</button>
      </div>
    )
  })
}
function getCourseKeysAndVals(course){
    var eles = [];
    var key;
    for(key in course) {
      eles.push(key ==='title'?<h3 key={key}>{course[key]}</h3>:<p key={key}>{key+": "+course[key]}</p>)
    }
    return eles;
}
export default App;
