
// QUESTION NO.1_______________*       

// var firstName = prompt("What is our first name?"," Please type here");
// var lastName = prompt("What is  your last name?"," Please type here ");
// var fullName = (firstName + " " +lastName );

// document.write(" <h1>  Your are welcome  Mr. " + fullName + "<h1>");


// QUESTION NO.2_______________* 

// var userInput = prompt (" What is favorite mobile phone model?"," Please type here" );
// var mobileModel = userInput;
// var userInput = userInput.length;

// document.write( " <h1> My favouriter Moible is :" + mobileModel + "<br />" + "Length of string  :" + userInput+ "<h1> ");


// QUESTION NO.3_______________* 
            
    // var string = "Pakistani";
    // var index = string.indexOf("n");

    //     document.write(" <h1> string :" + string + "</h1>");
    //     document.write(" <h1> index of 'n' :" + index + "</h1>");


// QUESTION NO.4_______________*               

// var string = "Hello World" ;
    // var index = string.lastIndexOf("l");
    
    //  document.write(" <h1> string :" + string + "</h1>");
    //  document.write(" <h1> Last index of 'l' :" + index + "</h1>");
    
   


// QUESTION NO.5_______________* .             

    // var string = "Pakistani";
    // var index = string.charAt("3");

    //     document.write(" <h1> string :" + string + "</h1>");
    //     document.write(" <h1> Character at index  3 :" + index + "</h1>");


//// QUESTION NO.6_______________* 
     //  Repeat Q1 using string concat() method.


     // var firstName = prompt("What is our first name?"," Please type here");
     // var lastName = prompt("What is  your last name?"," Please type here ");
     // var fullName = (firstName.concat(" ", lastName));

    // document.write(" <h1>  Your are welcome  Mr." + fullName + "<h1>");


// QUESTION NO.7_______________* 
                

  // var City ="Hyderabad";
   // var ChangeCity = City.replace("Hyder","Islam");

        // document.write(" <h1> City :" + City +"</h1>")
        // document.write("<h1> After replacement :" +  ChangeCity + "</h1>")


// QUESTION NO.8_______________* 
                    
    // var message = "Ali and Sami are best friends. They play cricket and football together.";
    // var messageEdit = message.replace(/and/g, "&");

    // document.write ("<h1> Message :" + message + "<h1> <br />");
    // document.write ("<h1>  After replacement :" + messageEdit + "<h1>");


// QUESTION NO.9_______________* 

     // Write a program that converts a string “472” to a number
    // 472. Display the values & types in your browser.
    // var a = "472";
    // document.write(" <h1> value :"+ a +  "<br> </h1>");
    // document.write(" <h1>type :"+ typeof(a)+ "<br> </h1>");

    // var b = parseInt(a);
     // document.write("  <h1> value :"+ b +  "<br> </h1>");
     // document.write("  <h1> type :"+typeof(b)+ "<br> </h1>");


 // QUESTION NO.10_______________* 

    // var Input = prompt("what is your favorite city name?"," type here ");
   // var Uppercase = Input.toUpperCase();

 // document.write ("<h1>  User input :" + Input +"   </h1>" )
  // document.write("<h1>  Upper case :" + Uppercase +"   </h1>" );

// QUESTION NO.11_______________* 

     // var userText = prompt("what is your favorite color?"," type here ");
    // document.write("<h1>  User Text :" + userText +"   </h1>");
    // document.write("<h1>  Titl Case   </h1>");

    // var output = userText.toLowerCase().split(" ");
     // for( var i=0; i < output.length; i++ ){
     //     output[i] = output[i][0].toUpperCase() + output[i].slice(1);
            // }
     // document.write("<h1>" + output.join(" ")) +"</h1>";



 // QUESTION NO.12_______________* 

    // var num = 35.36;
  // var x = num.toString();
    
 // var a = x.valueOf(a);
 // if  ( x = a){
      //     document.write("Number :" + num + "<br>");
            //     var b = a.replace(35.36 , "3635");
            //     document.write("Resutl :" +b);
               
            // }

          
// QUESTION NO.13_______________* 
         
 //   var userName = prompt (" Enter your name please","type here");
//  for (var i=0; i < userName.length; i++){
            // var contain = userName.codePointAt(i);
            //  if(contain === 33 || contain === 64 ||contain === 46 || contain === 44){
            //   alert(" Please Enter Valid User Name.");
            //  break;
            //     }
            // }
        
          
// QUESTION NO.14_______________* 


    //   var A = ["cake","apple pie", "cookie", "chips", "patties"];
     //   var input = prompt("Welcom to ABC Bakery! what do you want to order sir/ma'am?");

    //   for( i=0; i < A.length; i++) {
     //     if(input.toLowerCase() === A[i]){
        //   document.write(" <p> your ordered "+ input + " :"+  " is  <b> available </b>at  index :"+ i + "<p>");
        //   break;
      //     }
      //   }

   //   if(input.toLowerCase() !== A[i]){
  //     document.write(" <p> your ordered "+ input +  " is not available at  index : <p>" );                    
                //   }


        

 // QUESTION NO.15_______________* 

            
                // var password = prompt("Enter your Password", "type");
                // if (password.length <= 6 || password.length === " ")
                // {

                //        document.write("<h1> password must be more the 6 chraceters </h1> ");
                      
                // }
                
                //     if(password.charCodeAt(0) < 65 )
                   //     {
                     
     //         document.write( " <h1> your passwor is: "+ password + "<br>" + " Password connot begin with number"+ "<br>" + "  Enter a valid password </h1>" );     
       //     }
   //     if(password.charCodeAt(0) > 65 &&  password.length >= 6){
   //         document.write("<h1> valid password </h1>");

     //     }




// QUESTION NO.16_______________* 


                    // var university = "University of Karach";
       // var  arr = [];

     //    arr = university.split("");
    //    for (i=0; i < university.length; i++)
  // {
      //     document.write(arr[i]+"<br>");
      // }


   // QUESTION NO.17_______________* 


       // var userInput = prompt (" enter your counter name pleae","type here please");

      // document.write(" <h1> userInput :" + userInput + "</h1>");
    //     userInput = userInput.charAt(userInput.length -1);
  //     document.write(" <h1>last character of a user input is :" + userInput + "</h1>");



                
// QUESTION NO.18_______________* 

    // var str = " The quick brown fox jumps over the lazy dog";
                 
   //     document.write(" <h1> String :" + str + "</h1>" );
   //     strCount = (str.match(/the/gi) || []).length;
    //     document.write("<h1> There are  " + strCount + " occurrences of word 'the' </h1>" );