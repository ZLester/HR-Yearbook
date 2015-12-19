## HR Yearbook

### Setup
* Use `npm install` to grab all the required node modules
* `npm start` and `npm run dev` are simple wrappers for `node server/server.js` and `nodemon server/server.js`, respectively

### Basic Requirements
* Populate your Students collection with the `.fetch` method by hitting our mini-student data API at https://hr-yearbook.herokuapp.com/api/
* Use the included router to create a `'cohort/:cohortNumber'` route that will populate the view with the correct cohort members
* Display the each cohort's students in a visually appealing way

### Advanced Requirements
* Create a loading image that is removed when your collections finish updating
* Animate the HR logo with pure CSS or JS
* Create an information window or additional subviews that do or displays something useful (or silly!) when a user clicks on or mouses over a student

### Nightmare Mode
* Create a 'profile wall' subview for each student that allows users to leave comments
* Persist those comments via the provided mongodb

### API Endpoints

#### Base URL: https://hr-yearbook.herokuapp.com/api/

#### Students
* URL: '/api/students'
* Accepts (optional) query parameters for students' name, cohort, image, and id
* Query Params: name=Strig, cohort=Number, image=String, id=Number

#### Students by ID
* URL: '/api/students/:id'
* URL Params: id=Number

#### All of a cohort's students by cohort number
* URL: '/api/cohort/:cohort'
* URL Params: cohort=Number