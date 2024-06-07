document.getElementById('fom').addEventListener('submit' , function (event) {
    event.preventDefault();
    var email = document.getElementById('email').value.trim();
    function sub(){
        if (email==='') {
            alert("Enter A Valid Email");
        }else{
            alert("Your Email "+ email +" Has Been Submitted Sucessfully:")
        };
    }
    sub()
});