// step-1 
document.getElementById('btn-submit').addEventListener('click',function(){

       // step-2 button and email addersh er connection
       // alaways remember to use value
       const emailfield = document.getElementById('user-email');
       const email = emailfield.value;


       // step-3 passwordfiled er connection
       const passwordfiled = document.getElementById('user-password');
       const password = passwordfiled.value;
       console.log(password);


       // step-4

       if(email === 'yeasinmiah1272001@gmail.com' && password === '1272001'){
              window.location.href = 'bank.html';
       }
       else{
              alert('invalid user')
       }


})