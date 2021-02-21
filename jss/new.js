
const emailInput = document.getElementsByClassName("email-input")[0];
const companyNameInput = document.getElementsByClassName("company-name-input")[0];
const loginBtn = document.getElementsByClassName("login-btn")[0];



//add click event listener to loginBtn to display
loginBtn.addEventListener("click",(ev) => {
    
    ev.preventDefault()
console.log("here")
    // check if emailInput and companyNameInput are provided
    if(emailInput.value.length < 1 || companyNameInput.value.length < 1) {
        return; // there own validation script will handle displaying the error message, we'll just return to avoid navigation 
    }

    // check if emailInput is correct (this is a lazy validation)
    if(!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
        return;
    }
    


	// save the email and company values in sessionStorage
    let userData = {
        email: emailInput.value,
        companyName: companyNameInput.value
    }
    sessionStorage.setItem("user-data", JSON.stringify(userData))

    // navigate to the video page
    location.href = "Login/index.html";
    locationbar.visible = true;
})