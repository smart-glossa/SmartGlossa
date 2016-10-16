
function validateEmail(Email)
{
 var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
 if (reg.test(Esmail)){
 return true; }
 else{
 return false;
 }
} 