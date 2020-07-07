//acro is a hash table of company data
var buis = {
    'Gulf Island Fabrication': ['10,000,000', 944],
    'Ashford Inc': ['75,947,683', 0],
    'Provectus': ['65,500', 2],
    'Strikeforce': ['313,212', 9]
}

//var buis = {"Amy":{"LOAN DATE":"[unspecified]","INDUSTRY":"Retail - Cosmetics","STATE":"CA","LOAN AMOUNT":"$9,999,995","EMPLOYEE COUNT":"561","MOST RECENT ANNUAL NET INCOME":"-$242,767,000","MOST RECENT BUYBACK $":"-","MOST RECENT DIVIDEND $":"-","MOST RECENT EXECUTIVE COMPENSATION":"$2,559,568","KEEPING THE MONEY?":"No","OTHER":"440 U.S. employees."}};



jQuery(document).ready(function($) {

//$.each searches through the page and highlights terms that are in the keys of acro
    $.each(buis, function(key) {

        $("p").highlight(key, {caseSensitive: false, className: 'yellowhigh', wordsOnly: true});
        $('div').highlight(key, {caseSensitive: false, className: 'yellowhigh', wordsOnly: true});


    });

//for each part of DOM highlighted previously tooltip function will work
    $('.yellowhigh').each(function () {

        //tooltipster attempts
        /*$('yellowhigh').tooltipster({
            content: $('<span><img src="my-image.png" /> <strong>This text is in bold case !</strong></span>')
        });*/
        //$(this).tooltipster('This is my message');

        /*$('p').tooltipster({
       content: $('<span><img src="my-image.png" /> <strong>This text is in bold case !</strong></span>')
         });*/

        //$('p').tooltipster({theme: 'tooltipster-noir'}).tooltipster('This is my message');
        //  $("p").prop("title","");


        //json reformat
       /* var currentKey = $(this).text();
        console.log(currentKey);
        var price = obj[currentKey]["LOAN AMOUNT"];
        console.log(price);
        var employee = obj[currentKey]["EMPLOYEE COUNT"] ;*/



        //old  dictionary formulation
        var currentKey = $(this).text();
        var price = buis[currentKey][0];
        var employee = buis[currentKey][1];
        console.log(currentKey)

        //Creates Tooltip with information on each company
        Tipped.create(this, "<strong> <font size='3'>  " + String(currentKey) + " recieved " + String(price) + " $ from the federal gov and has " +
            String(employee) + " employees </font> </strong>");






    });


});