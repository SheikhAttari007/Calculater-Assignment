const num1 = +prompt("Enter number 1");
const num2 = +prompt("Enter number 2");
var opt = prompt("Enter operator","+,-,*,/");
if(opt == "+"){
    document.write(num1,"+",num2,"=",num1 + num2)
}else if(opt == "-"){
   document.write(num1,"-",num2,"=",num1 - num2)
}else if(opt == "*"){
    document.write(num1,"*",num2,"=",num1*num2)
}else if(opt == "/"){
    document.write(num1,"/",num2,"=",num1/num2)
}else{
    document.write("Your Value is invalid")
}