function checkProgress(){
    
    var carreg= localStorage.getItem('reg');
                
        $.post("http://ec2-54-77-234-254.eu-west-1.compute.amazonaws.com/mobile_scripts/mobile_check_trans.php",
               { 
                car_reg: carreg
               },
               function(data){



            

            if (data == '1'){
                window.location.href="meter_progress.html";
            }
    
        });
               
};

/*
*   Called on login, authenticates login details and redirects to the next page
**/

/*$(document).ready(function(){
    
    $('#btnSubmitLog').click(function(){
        
        $.post("http://ec2-54-77-234-254.eu-west-1.compute.amazonaws.com/mobile_scripts/mobile_login.php",
                {
                    uname: $('#username').val(),
                    pword: $('#password').val()
                },
                function(data){
            
                   
                    
                    if (data == "0"){
                        alert('error');
                         $('#responseText').html("Error");
                   }else{
                        
                        var logData = JSON.parse(data);
                        var uname = logData[0].username;
                        var pword = logData[0].password;
                        var car_reg = logData[0].reg;
                        var email = logData[0].email;
                    
                        
                        
                         window.localStorage.setItem("username", uname );
                         window.localStorage.setItem("password", pword);
                         window.localStorage.setItem("reg", car_reg );
                         window.localStorage.setItem("email", email );
                        
                         window.location.href="login.html";
                }
    
            });
                
    });
                                   
});*/

/*
*   Called on signup, inserts details and redirects to menu_page.html 
**/

$(document).ready(function(){
    
    $('#btnSubmitSign').click(function(){
        
        $.post("http://ec2-54-77-234-254.eu-west-1.compute.amazonaws.com/mobile_scripts/mobile_signup.php",
                {
                    fname: $('#fname').val(),
                    lname: $('#lname').val(),
                    uname: $('#uname').val(),
                    pword: $('#pword').val(),
                    email: $('#email').val(),
                    car_reg: $('#car_reg').val()
                },
                function(data){
            
                   
                    
                    if (data == "0"){
                        alert('error');
                         $('#responseText').html("Error");
                   }else{
                            var fname= $('#fname').val();
                            var lname= $('#lname').val();
                            var uname= $('#uname').val();
                            var pword= $('#pword').val();
                            var email= $('#email').val();
                            var car_reg= $('#car_reg').val();
                        
                         window.localStorage.setItem('firstname', fname);
                         window.localStorage.setItem('lastname', lname);
                         window.localStorage.setItem("username", uname );
                         window.localStorage.setItem("password", pword);
                         window.localStorage.setItem("reg", car_reg );
                         window.localStorage.setItem("email", email );
                        
                         window.location.href="terms.html";
                }
    
            });
                
    });
                                   
});


/*
*   Called on 'Start Meter', inserts transaction and start time,  redirects to meter_progress.html page
**/
   
    $(document).ready(function(){
        
        $('#reserve_space').click(function(){
            
            var add_id= localStorage.getItem('add_id');
            var car_reg = localStorage.getItem('reg');
        
            $.post("http://ec2-54-77-234-254.eu-west-1.compute.amazonaws.com/mobile_scripts/mobile_clock_in.php",
                   {
                     add_id: add_id,
                     car_reg: car_reg
                   },
                  function(data){
                    
                    
                    if(data == '1'){
                
                    window.location.href="meter_progress.html";
                        
                    }
            });
            
        });
        
    });
               

/*
*   Called on 'Stop Meter', updates transaction and fee,  redirects to payments.html page
**/

    

                                   