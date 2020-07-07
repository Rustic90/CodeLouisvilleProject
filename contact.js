function validate() 

{
    var name = document.getElementById("name");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");
    var comments = document.getElementById("comments");
    var nameIsValid;
    var phoneIsValid;
    var emailIsValid;
    var commentsIsValid;

    if (name.value==="")
    {
        document.getElementById("name").style.border = "3px solid red";
        nameIsValid = false;
    }

    if (phone.value==="")
    {
        document.getElementById("phone").style.border = "3px solid red";
        phoneIsValid = false;
    }
    if (email.value==="")
    {
        document.getElementById("email").style.border = "3px solid red";
        emailIsValid = false;
    }
    if (comments.value==="")
    {
        document.getElementById("comments").style.border = "3px solid red";
        commentsIsValid = false;
    }
    if (nameIsValid == false || phoneIsValid == false || emailIsValid == false || commentsIsValid == false)
    {
        return false;
    }
    else 
    {
        alert("Form submitted successfully");
        return true;
        
    }
}

function correctedInput(category)
{
    document.getElementById(category).style.border="none";
    document.getElementById(category).style.borderBottom="1px dotted black";
}