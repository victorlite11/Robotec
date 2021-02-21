const vid = document.getElementsByClassName("video")[0];
const LoginBtn = document.getElementsByClassName("login100-form-btn")[0];

//add click event listener to loginBtn to display
// video when loginBtn is clicked
LoginBtn.addEventListener("click",() => {
	//whenever loginBtn is clicked remove hide class from the video tag
	vid.classlist.remove("hide");//that all
})