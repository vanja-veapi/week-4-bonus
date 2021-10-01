window.addEventListener("load", function(){
    let btn = this.document.querySelector("#btn");

    btn.addEventListener("click", checkForm);

    //Form - Initialize input and error field
    let firstName = this.document.querySelector("#first-name");
    let errorFirst = this.document.querySelector("#error-first");

    let lastName = this.document.querySelector("#last-name");
    let errorLast = this.document.querySelector("#error-last");

    let mail = this.document.querySelector("#e-mail");
    let errorMail = this.document.querySelector("#error-email");

    let password = this.document.querySelector("#password");
    let errorPassword = this.document.querySelector("#error-password");

    //RegularExpression
    let regExpMail = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

    function checkForm()
    {
        if(mail.value === "")
        {
            mail.classList.add("error-img");
            errorMail.textContent = "Mail cannot be empty";
        }
        else
        {
            if(!regExpMail.test(mail.value))
            {
                mail.classList.add("error-img");
                errorMail.textContent = "Looks like this is not an email";
            }
            else
            {
                mail.classList.remove("error-img");
                errorMail.textContent = "";
            }
        }

        let list = [
            {
                val: firstName,
                errorMsg: errorFirst,
                msg1: "First name cannot be empty"
            },
            {
                val: lastName,
                errorMsg: errorLast,
                msg1: "Last name cannot be empty"
            },
            {
                val: password,
                errorMsg: errorPassword,
                msg1: "Password cannot be empty"
            }
        ]

        for (let index in list)
        {
            let input = list[index].val;
            let errMsg = list[index].errorMsg;
            
            if(input.value === "")
            {
                input.classList.add("error-img");
                errMsg.textContent = list[index].msg1;
            }
            else
            {
                input.classList.remove("error-img");
                errMsg.textContent = "";
            }
        }
    }
});