********NOTE - 
The function setErrorMsg is responsible for displaying error messages in the form when validation fails. Let's go through it step by step:

*****LINK - 
function setErrorMsg(input, errormsg) {
input: The input element (e.g., username, email) that failed validation.
errormsg: The error message to be displayed.
Step-by-Step Explanation
Step 1: Access the Parent 

const formControl = input.parentElement;
This line gets the parent element of the input field. In this case, it's the div with the class form-control.
Step 2: Find the small Element

const small = formControl.querySelector('small');
This line finds the small element within the form-control div. The small element is where the error message will be displayed.
Step 3: Set Class Name for Styling

formControl.className = 'form-control error';
This line changes the class of the form-control div to include the error class. This typically changes the styling of the div to indicate an error (e.g., changing the border color to red).
Step 4: Display the Error Message

small.innerText = errormsg;
This line sets the text of the small element to the error message passed to the function. This is the message that will be displayed to the user.
Summary
The setErrorMsg function does the following:

Accesses the parent div of the input element.
Finds the small element within the parent div.
Adds an error class to the parent div to apply error-specific styling.
Sets the text of the small element to the provided error message, making it visible to the user.
Example
Assume the username input fails validation. Here’s how the function would work:

The username input field's parent div (which has the class form-control) will be accessed.
The small element within this div will be found.
The class of the form-control div will be changed to include error, which might change its appearance.
The error message, such as "Username cannot be blank," will be set in the small element, making the error message visible under the input field.

*********NOTE - 

Loop: The loop iterates through each form-control element.

Class Name Check: It checks if the class name of the current form-control element is "form-control success".

Logging the Index: If the class name matches, it assigns the value of i (the current index) to sRate and logs it to the console.


********NOTE - 
<script>
    Form Fields: Username, Email, Phone, Password, Confirm Password.

Total Fields (count): 5.

Validation Process:

Username is valid: sRate becomes 1.
Email is valid: sRate becomes 2.
Phone is valid: sRate becomes 3.
Password is valid: sRate becomes 4.
Confirm Password is valid: sRate becomes 5.
Check Condition:

if (sRate == count) translates to if (5 == 5), which is true.
The function then executes the success actions: alert, SweetAlert message, and redirect.
Conclusion
count ensures that the form has a specific number of fields to validate.
sRate tracks the number of fields that have been validated successfully.
When sRate equals count, it means all fields are valid, triggering the success actions.



*****NOTE - 
const sendData = (usernameVal, sRate, count) => {
The function sendData takes three parameters:
usernameVal: The value of the username entered by the user.
sRate: A variable that seems to represent the number of successfully validated form controls.
count: The total number of form controls.
if (sRate == count) {
This line checks if sRate (the number of successfully validated form controls) is equal to count (the total number of form controls).
If sRate equals count, it means all form controls have been successfully validated.
Actions on Successful Validation
javascript
Copy code
alert('registration successful');
This line displays a browser alert with the message "registration successful."
javascript
Copy code
swal("Welcome " + usernameVal, "Registration Successful", "success");
This line calls the swal function (from SweetAlert, a popular library for custom alerts) to show a customized alert.
The alert says "Welcome [usernameVal]" and "Registration Successful" with a success icon.
javascript
Copy code
location.href = `demo.html?username=${usernameVal}`;
This line redirects the browser to a new URL (demo.html) and passes the usernameVal as a query parameter.
The query parameter is included in the URL as ?username=[usernameVal].

swal: This function is from the SweetAlert library, which creates custom, attractive alert messages in web applications.

swal: Displays a custom alert message without needing promises because it's not an asynchronous operation.

********NOTE - 
Fetching data from an API is an asynchronous operation.

Libraries for asynchronous operations often use promises or async/await.
****LINK - 
Is Fetching API an Asynchronous Operation?
?????????
Yes, fetching data from an API is an asynchronous operation. This means the request is made in the background, and your code can continue running without waiting for the request to complete. When the request finishes, it will return the data and execute a callback function or resolve a promise.
*******REVIEW - 
Asynchronous Operations
Definition: Operations that allow the program to continue running while waiting for a process to complete.
******NOTE - 
Examples: Fetching data from an API, reading files, setTimeout, setInterval.
*****NOTE - 
Handling Asynchronous Operations: Typically handled using callbacks, promises, or async/await syntax.

