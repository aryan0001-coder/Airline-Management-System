#Airline Management System
A frontend-only web application built with HTML, CSS, and JavaScript to manage airline passenger activities, including login, registration, profile management, and trip viewing.


#Table of Contents

##Overview
Features
Project Structure
Setup Instructions
Usage
Technologies Used
Known Issues
Contributing

Overview
The Airline Management System is a client-side web application designed for passengers to log in, register, view/edit their profile, and check their trips (upcoming, cancelled, and completed). It includes form validations, responsive styling, and a navigation system, all implemented without a backend.
Features

#Login Page:
User ID (numeric, max 5 digits) and Password (6-30 characters) fields.
Validates against static user credentials.
Error messages for invalid ID, password, or both.
Link to registration page for new users.


#Registration Page:
Fields: First Name, Last Name, DOB, Email, Address, Contact Number.
Validations: Mandatory fields, DOB > 1/1/1924, 10-digit contact, valid email format.
Generates random Passenger ID and password (first 4 letters of First Name + "@123").
Reset button with confirmation prompt.


#Home Page:
Navigation bar with Home, My Profile, My Trips, and Logout.
Search form for flights (Origin, Destination, Departure Date, No. of Travellers, Class).
Welcome message with passenger name.


#Profile Page:
Displays passenger details with an option to edit and save changes.


#Trips Page:
Displays static tables for Upcoming, Cancelled, and Completed trips with flight details.



#Project Structure
Airline-Management-System/
├── index.html          # Login page
├── login.css           # CSS for login page
├── register.html       # Registration page
├── register.js         # JavaScript for registration page
├── home.html           # Home page with search form
├── profile.html        # Profile view/edit page
├── trips.html          # Trips page with static trip data
├── styles.css          # Shared CSS for home, profile, and trips pages
├── README.md           # Project documentation

#Setup Instructions

Clone the Repository:
git clone https://github.com/aryan0001-coder/Airline-Management-System.git
cd Airline-Management-System


Open in VS Code:

Launch Visual Studio Code.
Go to File > Open Folder and select the Airline-Management-System folder.


Install Live Server Extension:

In VS Code, go to Extensions (Ctrl+Shift+X or Cmd+Shift+X).
Search for "Live Server" by Ritwick Dey and install it.


Run the Project:

Open index.html in VS Code.
Right-click and select "Open with Live Server" or click "Go Live" in the bottom-right corner.
The login page will open in your default browser at http://127.0.0.1:5500/index.html.


Fix Known Issues (if any):

In register.html, ensure the <script> tag references register.js correctly:<script src="register.js"></script>


Update the address field maxlength to 100:<textarea id="address" maxlength="100"></textarea>





Usage

Login:
Use static credentials (e.g., User ID: 12345, Password: pass123).
Invalid credentials display error messages.
Click "Register Yourself" to navigate to the registration page.


Registration:
Fill all fields (all mandatory).
On successful registration, a success message shows the generated Passenger ID and password.
Use the Reset button to clear fields (with confirmation).


Home Page:
Access via successful login.
Use the search form to simulate flight searches (static, no backend).
Navigate to Profile, Trips, or Logout.


Profile Page:
View passenger details.
Click "Edit" to modify fields, then "Save" to update.


Trips Page:
View static tables for Upcoming, Cancelled, and Completed trips.
Click links to jump to respective sections.



Technologies Used

HTML5: Structure of web pages.
CSS3: Styling, including Boxicons for icons (via CDN).
JavaScript: Client-side validation and interactivity.
VS Code: Development environment with Live Server extension.
Git: Version control, hosted on GitHub.

Known Issues

No backend; all data (users, trips) is static.
Profile data is hardcoded in profile.html and not persisted.
Search form on the home page is non-functional (frontend-only).
Navigation bar padding in home.html was fixed to padding: 10px 20px.

Contributing

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make changes and commit (git commit -m "Add your feature").
Push to the branch (git push origin feature/your-feature).
Create a Pull Request on GitHub.
