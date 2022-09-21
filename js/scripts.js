function showDescription(descript){
    $("#description").html("Description: " + descript);
}
function hideDescription(){
    $("#description").html("")
}
function validate(){
    var txt_dob = $("#txtDate").val();
    var dob = new Date(txt_dob);
    if(dob >= new Date()){
        alert("Date of birth is not valid. Date has to be before today");
        return false;
    }
    var phone = $("#phone").val();
    if(phone.length != 10 || isNaN(phone)){
        alert("Phone number is not valid or not in a valid format");
        return false;
    }
}