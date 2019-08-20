var inputs = document.querySelectorAll("input");
console.log(inputs[0]);
var forms = document.getElementById("form");
var contentofdemo = document.getElementsByClassName("contenting")[0];
var signup = document.getElementById("signupbtn");
function checkmail()
{
    var gmail = inputs[0].value;
    //var text1 = document.getElementById("p-email");
    if(gmail === "pikarrypham2610@gmail.com")
    {
        inputs[0].style.border = "2px solid green";
    }
    else{
        inputs[0].style.border = "2px solid #D11454";
    }
}
function checkpass()
{
    var password = inputs[1].value;
    //var text2 = document.getElementById("p-pass");
    if(password === "26102000")
    {
        //text2.innerHTML = "";
        inputs[1].style.border = "2px solid green";
    }
    else{
        //text2.innerHTML = "Wrong Password. Please enter again";
        //text2.style.color = "red";
        //text2.style.fontSize = "15px";
        inputs[1].style.border = "2px solid #D11454";
    }
}
inputs[0].onchange = checkmail;
inputs[1].onchange = checkpass;

signup.onclick = function()
{
    if(inputs[0].value == "pikarrypham2610@gmail.com" && inputs[1].value == "26102000")
    {
        forms.style.display = "none";
        contentofdemo.style.opacity = "1";
    }
    else{
        console.log("Can't not login");
    }
}

