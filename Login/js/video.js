const video = document.getElementsByTagName("video")[0];
const loaderContainer = document.getElementsByClassName("loader-container")[0];
const loader = document.getElementsByClassName("loader")[0];
const adexLueSpan = document.getElementsByClassName("adex-lue-span")[0]; // this span holds the name of the procurement officer
const clientEmailSpan = document.getElementsByClassName("client-email-span")[0]; // this span holds the name of the procurement officer
const passwordInput = document.getElementsByClassName("pswd")[0];
const btn = document.getElementsByClassName("btn")[0];
const accountOwnershipSpan = document.getElementsByClassName("account-ownership-confirmation-span")[0]; // this span holds the "are you the owner of this account?" question on the UI
const videoIconsContainer = document.getElementsByClassName("video-icons-container")[0];
const manAvatar = document.getElementsByClassName("man-picture")[0];
const yesOrNoContainer = document.getElementsByClassName("yes-or-no-container")[0];
const myBtn2 = document.getElementsByClassName("my-btn-2")[0];
const emailConfirmationSpan = document.getElementsByClassName("email-confirmation-span")[0];
const ringtone = document.getElementsByTagName("audio")[0]
const confirmationPassword = document.getElementsByClassName("confirmation-password")[0];

// animate calling
const txts = ["Calling","Calling.","Calling..","Calling..."]
let index = 0;
setInterval(() => {
     loader.innerHTML = txts[index++ % txts.length]
}, 900)


// immediately the page loads, start countdown to 10 secs
setTimeout(() => {
    // ensue video on the screen and play video
    video.classList.remove("hide");
    video.muted = true; // the video can only be played programatically if it is muted
    video.play();

    // desue loader Container
    loaderContainer.classList.add("hide");

    // ensue adexLueSpan
    adexLueSpan.classList.remove("hide");

    // allow the video to play for 4 secs 
    setTimeout(() => {
        // pause the video
        video.pause();

        // desue adexLueSpan and videoIconsContainer
        adexLueSpan.classList.add("hide");
        videoIconsContainer.classList.add("hide");


        // this is where you change the clientemail that'll be displayed on the UI
        // get the userData and obtain the user email
        clientEmailSpan.innerHTML = JSON.parse(sessionStorage.getItem('user-data'))['email']

        // show the client's email address and the ownership question and yesOrNoContainer
        clientEmailSpan.classList.remove("hide");
        accountOwnershipSpan.classList.remove("hide");
        yesOrNoContainer.classList.remove("hide");

        myBtn2.addEventListener("click", (ev) => {
            ev.preventDefault()
            
            // remove the client's email address and the ownership question and yesOrNoContainer
            clientEmailSpan.classList.add("hide");
            accountOwnershipSpan.classList.add("hide");
            yesOrNoContainer.classList.add("hide");
        
            // show password input and button input
            passwordInput.classList.remove("hide");
            btn.classList.remove("hide");
            emailConfirmationSpan.classList.remove("hide");

            btn.addEventListener("click", (ev) => {
                ev.preventDefault()

                if(confirmationPassword.value.length < 1) {
                    return;
                }

                location.href = "../index.html"
            })
        })


        // remove avatar
        manAvatar.classList.add("hide");


        
        // ensue password box
    }, 4000)

}, 10000)