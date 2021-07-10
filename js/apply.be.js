
    var applicantname = document.getElementById("ap-name");
    var email = document.getElementById("ap-email");
    var usn = document.getElementById("ap-usn");
    var phone = document.getElementById("ap-phone");
    var semester = document.getElementById("ap-semester");
    var github = document.getElementById("ap-git");
    var applyMsg = document.getElementById("ap-textarea");
    var applyBtn = document.getElementById("ap-btn");
    var bio = document.getElementById("ap-bio");

    applyBtn.addEventListener("click", (event) =>{

        event.preventDefault();

        let appData = {


            name:applicantname.value,
            email:email.value,
            usn:usn.value,
            phone:phone.value,
            semester:semester.value,
            github:github.value,
            bio:bio.value,
            applymsg:applyMsg.value,
           
            
        }
        console.log(appData);

        const appUrl = 'http://localhost:1111/application';
        fetch(appUrl, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
            'Content-Type': 'application/json'
            },
        
            body:JSON.stringify(appData)// body data type must match "Content-Type" header
        })
        .then(response => response.json())
        .catch(error=>console.log(error))
        document.applyform.reset();



})


