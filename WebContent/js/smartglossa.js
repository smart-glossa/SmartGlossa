function myfunction()
		{

//******************* FIRST SECTION CREATE ***********************

			var section=document.createElement("SECTION");
			section.id="navigation";
			document.body.appendChild(section);

//********************** HEADER SECTION CREATE ********************

			var header=document.createElement("HEADER");
			section.appendChild(header);

//*********************** HEADER SECTION LIST CREATE ****************

 var div=document.createElement("div");
            div.setAttribute("id","art");
            header.appendChild(div);

           	     var list=document.createElement("p");
                 list.id="beone";
			var headtext=document.createTextNode("SMARTGLOSSA");
		    list.appendChild(headtext);
            div.appendChild(list)

          var list=document.createElement("p");
          list.id="be";
			var headtext=document.createTextNode("Be Smart,Do Art");
		    list.appendChild(headtext);
            div.appendChild(list);
		 

 //-----------------HOME------------//

 var div=document.createElement("div");
            div.setAttribute("id","art2");
            header.appendChild(div);

var unorder=document.createElement("ul");
            div.appendChild(unorder);

           var list=document.createElement("li");
            list.setAttribute("class","active");
            unorder.appendChild(list);
            var anchor=document.createElement("a");
            anchor.setAttribute("href","#home");
            var listnode=document.createTextNode("Home");
            anchor.appendChild(listnode);
            list.appendChild(anchor);

 //-------------------SPECIALS----------------//          
           var list=document.createElement("li");
            list.setAttribute("class","active");
            unorder.appendChild(list);
            var anchor=document.createElement("a");
            anchor.setAttribute("href","#specials");
            var listnode=document.createTextNode("Specials");
            anchor.appendChild(listnode);
            list.appendChild(anchor);

//------------------ COURSES----------------//
           var list=document.createElement("li");
            list.setAttribute("class","active");
            unorder.appendChild(list);
            var anchor=document.createElement("a");
            anchor.setAttribute("href","#courses");
            var listnode=document.createTextNode("Courses");
            anchor.appendChild(listnode);
            list.appendChild(anchor);

//---------------DETAILS----------//
         var list=document.createElement("li");
            list.setAttribute("class","active");
            unorder.appendChild(list);
            var anchor=document.createElement("a");
            anchor.setAttribute("href","#details");
            var listnode=document.createTextNode("Details");
            anchor.appendChild(listnode);
            list.appendChild(anchor);

//------------ CONTACT--------------//
            var list=document.createElement("li");
            list.setAttribute("class","active");
            unorder.appendChild(list);
            var anchor=document.createElement("a");
            anchor.setAttribute("href","#contact");
            var listnode=document.createTextNode("Contact");
            anchor.appendChild(listnode);
            list.appendChild(anchor); 

//----------------- TWITTER IMG -----------------// 
            var list=document.createElement("li");
            unorder.appendChild(list);
            var twi=document.createElement("IMG");
            var anchor=document.createElement("a");
            anchor.setAttribute("href","https://www.facebook.com/smartglossapage/");
            twi.setAttribute("src","../images/fa.png");
            anchor.appendChild(twi);
            list.appendChild(anchor);    
 
//----------------- FACEBOOK IMG -----------------//
            var list=document.createElement("li");
            unorder.appendChild(list);
            var face=document.createElement("IMG");
            var anchor=document.createElement("a");
            anchor.setAttribute("href","https://twitter.com/SmartGlossa");
			face.setAttribute("src","../images/tw.png");
			anchor.appendChild(face);
			list.appendChild(anchor);

//********************** END ****************// 

//**************** SECOND SECTION CREATE******************//			
			
			var section=document.createElement("SECTION");
			section.setAttribute("id","home");
			document.body.appendChild(section);			
			
			var front=document.createElement("div");
            section.appendChild(front);

            var frontimg=document.createElement("img");
            frontimg.setAttribute("src","../images/fr1.jpg");
            section.appendChild(frontimg);

//******************* END *******************//

//******************* THIRD SECTION CREATE**************//

           var section=document.createElement("SECTION");
           section.setAttribute("id","specials");
           document.body.appendChild(section);

//--------------- SPECIALS FULL DIV CREATE ---------------------//
        
           var wholediv=document.createElement("DIV");
           wholediv.setAttribute("class","imagegallery");
           section.appendChild(wholediv);
             
//--------------------- SECOND DIV CREATE ------------------//

      var firstdiv=document.createElement("DIV");
      firstdiv.setAttribute("class","images");
      wholediv.appendChild(firstdiv);

      //--------------- WEB DEVELOPMENT------------------------//

     var div1=document.createElement("div");
     div1.setAttribute("class","para1");
     firstdiv.appendChild(div1);

     var para=document.createElement("P");
     var paratext=document.createTextNode("-");
     para.appendChild(paratext);
     div1.appendChild(para);

     var para=document.createElement("P");
     var paratext=document.createTextNode("WEB");
     para.appendChild(paratext);
     div1.appendChild(para);

     var para=document.createElement("P");
     var paratext=document.createTextNode("DEVELOPMENT");
     para.appendChild(paratext);
     div1.appendChild(para);

     var para=document.createElement("P");
     var paratext=document.createTextNode("COURSES");
     para.appendChild(paratext);
     div1.appendChild(para);

     var para=document.createElement("P");
     para.setAttribute("id","join");
     var paratext=document.createTextNode("JOIN NOW>");
     para.appendChild(paratext);
     div1.appendChild(para);
//-------------------- IMAGE FOR FIRST ------------//

 var imagediv=document.createElement("DIV");
    imagediv.setAttribute("class","image");
    firstdiv.appendChild(imagediv);

    var image=document.createElement("IMG");
    image.setAttribute("src","../images/ch.jpg");
    image.style.width="230px";
    image.style.height="210px";
    imagediv.appendChild(image);

//-------------- ANDROID DEVELOPMENT-----------------//

    var div=document.createElement("div");
     div.setAttribute("class","para2");
     firstdiv.appendChild(div);

     var para=document.createElement("P");
     var paratext=document.createTextNode("-");
     para.appendChild(paratext);
     div.appendChild(para);

     var para=document.createElement("P");
     var paratext=document.createTextNode("ANDROID");
     para.appendChild(paratext);
     div.appendChild(para);

     var para=document.createElement("P");
     var paratext=document.createTextNode("DEVELOPMENT");
     para.appendChild(paratext);
     div.appendChild(para);

     var para=document.createElement("P");
     var paratext=document.createTextNode("COURSES");
     para.appendChild(paratext);
     div.appendChild(para);

     var para=document.createElement("P");
     para.setAttribute("id","join1");
     var paratext=document.createTextNode("JOIN NOW>");
     para.appendChild(paratext);
     div.appendChild(para);
//-------------------IMAGE FOR SECOND ----------------//

    var imagediv=document.createElement("DIV");
    imagediv.setAttribute("class","image");
    firstdiv.appendChild(imagediv);

    var image=document.createElement("IMG");
    image.setAttribute("src","../images/ph.jpg");
    image.style.width="270px";
    image.style.height="300px";
    imagediv.appendChild(image);

//-------SECOND DIVISION CREATE------------------//
    
     var seconddiv=document.createElement("DIV");
      seconddiv.setAttribute("id","images1");
      wholediv.appendChild(seconddiv);

//--------------IMAGE FOR THIRD---------------// 

       var imagediv=document.createElement("DIV");
    imagediv.setAttribute("class","image");
    seconddiv.appendChild(imagediv);

    var image=document.createElement("IMG");
    image.setAttribute("src","../images/ph1.jpg");
    image.style.width="270px";
    image.style.height="300px";
        image.style.marginTop="-40px";
    imagediv.appendChild(image);

//IOS DEVELOPMENT//

 var div=document.createElement("div");
     div.setAttribute("class","para");
     seconddiv.appendChild(div);

     var para=document.createElement("P");
     var paratext=document.createTextNode("-");
     para.appendChild(paratext);
     div.appendChild(para);

     var para=document.createElement("P");
     var paratext=document.createTextNode("IOS");
     para.appendChild(paratext);
     div.appendChild(para);

     var para=document.createElement("P");
     var paratext=document.createTextNode("DEVELOPMENT");
     para.appendChild(paratext);
     div.appendChild(para);

     var para=document.createElement("P");
     var paratext=document.createTextNode("COURSES");
     para.appendChild(paratext);
     div.appendChild(para);

     var para=document.createElement("P");
     para.setAttribute("id","join1");
     var paratext=document.createTextNode("JOIN NOW>");
     para.appendChild(paratext);
     div.appendChild(para);
//---------------IMAGE FOR FOURTH -----------//

    var imagediv=document.createElement("DIV");
    imagediv.setAttribute("class","image");
    seconddiv.appendChild(imagediv);

    var image=document.createElement("IMG");
    image.setAttribute("src","../images/com.jpg");
    image.style.width="270px";
    image.style.height="220px";
    imagediv.appendChild(image);

//WINDOWS DEVELOPMENT//

var div=document.createElement("div");
     div.setAttribute("class","para1");
     seconddiv.appendChild(div);

     var para=document.createElement("P");
     var paratext=document.createTextNode("-");
     para.appendChild(paratext);
     div.appendChild(para);

     var para=document.createElement("P");
     var paratext=document.createTextNode("WINDOWS");
     para.appendChild(paratext);
     div.appendChild(para);

     var para=document.createElement("P");
     var paratext=document.createTextNode("DEVELOPMENT");
     para.appendChild(paratext);
     div.appendChild(para);

     var para=document.createElement("P");
     var paratext=document.createTextNode("COURSES");
     para.appendChild(paratext);
     div.appendChild(para);

     var para=document.createElement("P");
     para.setAttribute("id","join");
     var paratext=document.createTextNode("JOIN NOW>");
     para.appendChild(paratext);
     div.appendChild(para);

//********************** END **************************//

//******************** FOURTH SECTION CREATE ****************//

   var section=document.createElement("SECTION");
           section.setAttribute("id","courses");
           document.body.appendChild(section);
     
     //********************* COURSE DIV CREATE *************//

     var course=document.createElement("DIV");
     course.setAttribute("class","course");
     section.appendChild(course);

//**************** COURSE TABLE ******************//

     var tablediv=document.createElement("div");
     tablediv.setAttribute("class","coursetable");
     course.appendChild(tablediv);

      var table=document.createElement("TABLE");
     tablediv.appendChild(table);

     var tablerow=document.createElement("tr");
     table.appendChild(tablerow);

     var tablehead=document.createElement("th");
       tablehead.setAttribute("id","a");
     tablehead.setAttribute("colspan","2");
     var headtext=document.createTextNode("COURSES DETAILS");
     tablehead.appendChild(headtext);
     tablerow.appendChild(tablehead);

     var tablerow=document.createElement("tr");
     table.appendChild(tablerow);

     var tabledata=document.createElement("td");
     var datatext=document.createTextNode("C, C++ and JAVA Courses");
     tabledata.appendChild(datatext);
     tablerow.appendChild(tabledata);

     var tabledata=document.createElement("td");
     var datatext=document.createTextNode("2 Months");
     tabledata.appendChild(datatext);
     tablerow.appendChild(tabledata);
     
     var tablerow=document.createElement("tr");
     table.appendChild(tablerow);
     
     var tabledata=document.createElement("td");
     var datatext=document.createTextNode("Web Development Courses");
     tabledata.appendChild(datatext);
     tablerow.appendChild(tabledata);

     var tabledata=document.createElement("td");
     var datatext=document.createTextNode("6 Months");
     tabledata.appendChild(datatext);
     tablerow.appendChild(tabledata);

     var tablerow=document.createElement("tr");
     table.appendChild(tablerow);
     
     var tabledata=document.createElement("td");
     var datatext=document.createTextNode("Android Development Courses");
     tabledata.appendChild(datatext);
     tablerow.appendChild(tabledata);

     var tabledata=document.createElement("td");
     var datatext=document.createTextNode("6 Months");
     tabledata.appendChild(datatext);
     tablerow.appendChild(tabledata);
     
     var tablerow=document.createElement("tr");
     table.appendChild(tablerow);
     
     var tabledata=document.createElement("td");
     var datatext=document.createTextNode("IOS Development Courses");
     tabledata.appendChild(datatext);
     tablerow.appendChild(tabledata);

     var tabledata=document.createElement("td");
     var datatext=document.createTextNode("10 Months");
     tabledata.appendChild(datatext);
     tablerow.appendChild(tabledata);

     var tablerow=document.createElement("tr");
     table.appendChild(tablerow);
     
     var tabledata=document.createElement("td");
     var datatext=document.createTextNode("WINDOWS Development Courses");
     tabledata.appendChild(datatext);
     tablerow.appendChild(tabledata);

     var tabledata=document.createElement("td");
     var datatext=document.createTextNode("6 Months");
     tabledata.appendChild(datatext);
     tablerow.appendChild(tabledata);
     
      var tablerow=document.createElement("tr");
     table.appendChild(tablerow);
     
     var tabledata=document.createElement("td");
     tabledata.setAttribute("id","b");
     tabledata.setAttribute("colspan","2");
     var datatext=document.createTextNode("JOIN NOW>");
     tabledata.appendChild(datatext);
     tablerow.appendChild(tabledata);

//************* END ********************//

//************ FIFTH SECTION CREATE *************//

     var section=document.createElement("SECTION");
           section.setAttribute("id","details");
           document.body.appendChild(section);


   var top=document.createElement("div");
    top.setAttribute("id","top");
    section.appendChild(top);

var wholediv=document.createElement("DIV");
    wholediv.setAttribute("class","gallery");
top.appendChild(wholediv);

    var fulldiv=document.createElement("DIV");
    fulldiv.setAttribute("id","img");
    wholediv.appendChild(fulldiv);

    var imagediv=document.createElement("DIV");
     imagediv.setAttribute("class","flower");
    fulldiv.appendChild(imagediv);

    var image=document.createElement("IMG");
    image.setAttribute("src","../images/js.png");
    imagediv.appendChild(image);

    var image=document.createElement("IMG");
    image.setAttribute("src","../images/java.jpg");
    imagediv.appendChild(image);
 
 var imagediv=document.createElement("DIV");
     imagediv.setAttribute("class","popup");
    fulldiv.appendChild(imagediv);

    var image=document.createElement("IMG");
    image.setAttribute("src","../images/html.png");
    imagediv.appendChild(image);

    var image=document.createElement("IMG");
    image.setAttribute("src","../images/css.jpg");
    imagediv.appendChild(image);

    var imagediv=document.createElement("DIV");
     imagediv.setAttribute("class","pop");
    fulldiv.appendChild(imagediv);

    var image=document.createElement("IMG");
    image.setAttribute("src","../images/php.jpg");
    imagediv.appendChild(image);

    var image=document.createElement("IMG");
    image.setAttribute("src","../images/my.png");
    imagediv.appendChild(image);

    var popimg=document.createElement("DIV");
    popimg.setAttribute("id","picture");
    popimg.setAttribute("class","picture")
    popimg.setAttribute("onmouseover","mouseover()");
    popimg.setAttribute("onmouseout","mouseout()");
    wholediv.appendChild(popimg);

    var bigimg=document.createElement("IMG");
    bigimg.setAttribute("src","../images/g.jpg");
    popimg.appendChild(bigimg);

    var textdiv=document.createElement("P");
    var imagetext=document.createTextNode("Web Development Course");
    textdiv.appendChild(imagetext);
    popimg.appendChild(textdiv);

        //second division//

    var wholediv=document.createElement("DIV");
    wholediv.setAttribute("class","gallery");
    top.appendChild(wholediv);

    var fulldiv=document.createElement("DIV");
    fulldiv.setAttribute("id","img2");
    wholediv.appendChild(fulldiv);

    var imagediv=document.createElement("DIV");
     imagediv.setAttribute("class","flower");
    fulldiv.appendChild(imagediv);

    var image=document.createElement("IMG");
    image.setAttribute("src","../images/web3.png");
    imagediv.appendChild(image);

    var image=document.createElement("IMG");
    image.setAttribute("src","../images/an2.jpg");
    imagediv.appendChild(image);
 
 var imagediv=document.createElement("DIV");
     imagediv.setAttribute("class","popup");
    fulldiv.appendChild(imagediv);

    var image=document.createElement("IMG");
    image.setAttribute("src","../images/web1.jpg");
    imagediv.appendChild(image);

    var image=document.createElement("IMG");
    image.setAttribute("src","../images/web5.png");
    imagediv.appendChild(image);

    var imagediv=document.createElement("DIV");
     imagediv.setAttribute("class","pop");
    fulldiv.appendChild(imagediv);

    var image=document.createElement("IMG");
    image.setAttribute("src","../images/an3.jpg");
    imagediv.appendChild(image);

    var image=document.createElement("IMG");
    image.setAttribute("src","../images/an4.jpg");
    imagediv.appendChild(image);

    var popimg=document.createElement("DIV");
    popimg.setAttribute("id","picture");
    popimg.setAttribute("class","pictureone")
    popimg.setAttribute("onmouseover","mouseover1()");
    popimg.setAttribute("onmouseout","mouseout1()");
    wholediv.appendChild(popimg);

    var bigimg=document.createElement("IMG");
    bigimg.setAttribute("src","../images/in2.jpg");
    popimg.appendChild(bigimg);

    var textdiv=document.createElement("P");
    var imagetext=document.createTextNode("Internship Training");
    textdiv.appendChild(imagetext);
    popimg.appendChild(textdiv);

  
  //third dvision//

  var wholediv=document.createElement("DIV");
    wholediv.setAttribute("class","gallery");
   top.appendChild(wholediv);

    var fulldiv=document.createElement("DIV");
    fulldiv.setAttribute("id","img3");
    wholediv.appendChild(fulldiv);

    var imagediv=document.createElement("DIV");
     imagediv.setAttribute("class","flower");
    fulldiv.appendChild(imagediv);

    var image=document.createElement("IMG");
    image.setAttribute("src","../images/gr.jpg");
    imagediv.appendChild(image);

    var image=document.createElement("IMG");
    image.setAttribute("src","../images/ap.png");
    imagediv.appendChild(image);
 
 var imagediv=document.createElement("DIV");
     imagediv.setAttribute("class","popup");
    fulldiv.appendChild(imagediv);

    var image=document.createElement("IMG");
    image.setAttribute("src","../images/pr.jpg");
    imagediv.appendChild(image);

    var image=document.createElement("IMG");
    image.setAttribute("src","../images/a.jpg");
    imagediv.appendChild(image);

     var imagediv=document.createElement("DIV");
     imagediv.setAttribute("class","pop");
    fulldiv.appendChild(imagediv);

    var image=document.createElement("IMG");
    image.setAttribute("src","../images/te.png");
    imagediv.appendChild(image);

    var image=document.createElement("IMG");
    image.setAttribute("src","../images/hr.jpg");
    imagediv.appendChild(image);

    var popimg=document.createElement("DIV");
    popimg.setAttribute("id","picture");
    popimg.setAttribute("class","picturetwo");
    popimg.setAttribute("onmouseover","mouseover2()");
    popimg.setAttribute("onmouseout","mouseout2()");
    wholediv.appendChild(popimg);

    var bigimg=document.createElement("IMG");
    bigimg.setAttribute("src","../images/pla.jpg");
    popimg.appendChild(bigimg);

    var textdiv=document.createElement("P");
    var imagetext=document.createTextNode("Placement Training");
    textdiv.appendChild(imagetext);
    popimg.appendChild(textdiv);

   
 
 //FOURTH DIVISION//

  var wholediv=document.createElement("DIV");
    wholediv.setAttribute("class","gallery");
   top.appendChild(wholediv);

    var fulldiv=document.createElement("DIV");
    fulldiv.setAttribute("id","img4");
    wholediv.appendChild(fulldiv);

    var imagediv=document.createElement("DIV");
     imagediv.setAttribute("class","flower");
    fulldiv.appendChild(imagediv);

    var image=document.createElement("IMG");
    image.setAttribute("src","../images/off.jpg");
    imagediv.appendChild(image);

    var image=document.createElement("IMG");
    image.setAttribute("src","../images/off2.jpg");
    imagediv.appendChild(image);
 
 var imagediv=document.createElement("DIV");
     imagediv.setAttribute("class","popup");
    fulldiv.appendChild(imagediv);

    var image=document.createElement("IMG");
    image.setAttribute("src","../images/mm.jpg");
    imagediv.appendChild(image);

    var image=document.createElement("IMG");
    image.setAttribute("src","../images/bb.jpg");
    imagediv.appendChild(image);


    var imagediv=document.createElement("DIV");
     imagediv.setAttribute("class","pop");
    fulldiv.appendChild(imagediv);

    var image=document.createElement("IMG");
    image.setAttribute("src","../images/k.jpg");
    imagediv.appendChild(image);

    var image=document.createElement("IMG");
    image.setAttribute("src","../images/z.jpg");
    imagediv.appendChild(image);
 

    var popimg=document.createElement("DIV");
    popimg.setAttribute("id","picture");
    popimg.setAttribute("class","picturethree")
    popimg.setAttribute("onmouseover","mouseover3()");
    popimg.setAttribute("onmouseout","mouseout3()");
    wholediv.appendChild(popimg);

    var bigimg=document.createElement("IMG");
    bigimg.setAttribute("src","../images/d.jpg");
    popimg.appendChild(bigimg);

    var textdiv=document.createElement("P");
    var imagetext=document.createTextNode("Off-Campus Training");
    textdiv.appendChild(imagetext);
    popimg.appendChild(textdiv);



//************* SIXTH SECTION CREATE **************//
 
     var section=document.createElement("SECTION");
           section.setAttribute("id","contact");
           document.body.appendChild(section);

//---------------------CONTACT FULL DIV--------------//

     var contact=document.createElement("DIV");
     contact.setAttribute("class","contact");
     section.appendChild(contact);

//---------------ADDRESS BOX-----------------------//

    var addressdiv=document.createElement("div");
    addressdiv.setAttribute("class","addresstable");
    contact.appendChild(addressdiv);

      var box=document.createElement("DIV");
      box.setAttribute("class","box");
     addressdiv.appendChild(box);

     var parahead=document.createElement("h3");
     var headtext=document.createTextNode("Contact Us");
     parahead.appendChild(headtext);
     box.appendChild(parahead);
     
     var para=document.createElement("p");
     var paratext=document.createTextNode("14, First Floor, DGL Tower,");
     para.appendChild(paratext);
     box.appendChild(para);

     var para=document.createElement("p");
     var paratext=document.createTextNode("Marthandapuram, Second street,");
     para.appendChild(paratext);
     box.appendChild(para);
      
     var para=document.createElement("p");
     var paratext=document.createTextNode("Alangudi Road, Pudukkottai-6222001,");
     para.appendChild(paratext);
     box.appendChild(para);
     
     var para=document.createElement("p");
     var paratext=document.createTextNode("Email:contact@smartglossa.com,");
     para.appendChild(paratext);
     box.appendChild(para);

      var para=document.createElement("p");
     var paratext=document.createTextNode("Phone:9944824874/9500239154.");
     para.appendChild(paratext);
     box.appendChild(para);
     
//-----------------TABLEDIV CREATE---------------//

     var division=document.createElement("DIV");
     division.setAttribute("class","add");
     box.appendChild(division);

     var contable=document.createElement("TABLE");
     division.appendChild(contable);

     var tablerow=document.createElement("tr");
     contable.appendChild(tablerow);

     var tabledata=document.createElement("td");
     var input=document.createElement("INPUT");
     input.setAttribute("type","text");
     input.setAttribute("placeholder","name");
     input.setAttribute("id","name");
     input.setAttribute("onkeyup","keyup()");
     input.setAttribute("onkeydown","keydown()");
     tabledata.appendChild(input);
     tablerow.appendChild(tabledata);

      var tablerow=document.createElement("tr");
     contable.appendChild(tablerow);

          var tabledata=document.createElement("td");
     var input=document.createElement("INPUT");
     input.setAttribute("type","text");
     input.setAttribute("placeholder","email");
     input.setAttribute("id","email");
     input.setAttribute("onkeyup","keyup1()");
     input.setAttribute("onkeydown","keydown1()");
     tabledata.appendChild(input);
     tablerow.appendChild(tabledata);

      var tablerow=document.createElement("tr");
     contable.appendChild(tablerow);

     var tabledata=document.createElement("td");
     var input=document.createElement("INPUT");
     input.setAttribute("type","text");
     input.setAttribute("placeholder","phone");
     input.setAttribute("id","phone");
     input.setAttribute("onkeyup","keyup2()");
     input.setAttribute("onkeydown","keydown2()");
     tabledata.appendChild(input);
     tablerow.appendChild(tabledata);
//----------------------COMMANDS DIV CREATE---------------//
     var division=document.createElement("DIV");
     division.setAttribute("class","command");
     box.appendChild(division);

     var textarea=document.createElement("TEXTAREA");
     textarea.setAttribute("placeholder","comments");
     textarea.setAttribute("id","area");
     textarea.setAttribute("onkeyup","keyup3()");
     textarea.setAttribute("onkeydown","keydown3()");
     division.appendChild(textarea);

     var button=document.createElement("BUTTON");
     button.setAttribute("type","submit");
     button.setAttribute("onsubmit","validation()");
     var buttontext=document.createTextNode("SEND");
     button.appendChild(buttontext);
     division.appendChild(button);

//**************** END *******************//
}