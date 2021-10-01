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
    let regExpNameSurname = /^[A-ZŠĐŽČĆ][a-zšđžčć]{2,12}$/;
    let regExpMail = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
    let regExpPw = /[\wŠĐČĆŽšđčćž\#\!\$\%\^\&\*\_\ ]{3,30}/;

    function checkForm()
    {
        let obj = [
            {
                val: firstName,
                regularExpression: regExpNameSurname,
                errorMsg: errorFirst,
                msg1: "First name cannot be empty",
                msg2: "Name is not in a good format"
            },
            {
                val: lastName,
                regularExpression: regExpNameSurname,
                errorMsg: errorLast,
                msg1: "Last name cannot be empty",
                msg2: "Last name is not in a good format"
            },
            {
                val: mail,
                regularExpression: regExpMail,
                errorMsg: errorMail,
                msg1: "Mail cannot be empty",
                msg2: "Looks like this is not an email"
            },
            {
                val: password,
                regularExpression: regExpPw,
                errorMsg: errorPassword,
                msg1: "Password cannot be empty",
                msg2: "The Password is not in a good format"
            }
        ]
        console.log(obj);
        for (let index in obj)
        {
            let input = obj[index].val;
            let regEx = obj[index].regularExpression;
            let errMsg = obj[index].errorMsg;

            if(input.value === "")
            {
                input.classList.add("error-img");
                errMsg.textContent = obj[index].msg1;
            }
            else
            {
                if(!regEx.test(input.value))
                {
                    input.classList.add("error-img");
                    errMsg.textContent = obj[index].msg2;
                }
                else
                {
                    input.classList.remove("error-img");
                    errMsg.textContent = "";
                }
            }
        }
    }
});