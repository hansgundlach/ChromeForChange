console.log("this is script.js");

jQuery(document).ready(function($) {

  var acro = {
  'Adam' :'2',
  'Eve' : '2',
  'Tom' : '3',
  'John' :'5',
  'Hans' : '6'

  }



  console.log("this is script.js");



//new mark.js library
//mark library isnnt working so im commenting all the mark tools

//var regexp = "/Adam/i";
/*var context = document.querySelector("p");
  var instance = new Mark(context);
  /*instance.mark("text", {
      "element": "span",
      "className": "highlight"
  });*/

 // instance.markRegExp(/\w*[A-Z]\w*[A-Z]\w*/i);


//$("p").markRegExp(/\w*[A-Z]\w*[A-Z]\w*/i, {
 // "element":"span",
 // "className":"yellowhigh"
//});


//$.each is bascilly like for loop
//I think highlight does all the finding
$.each(acro, function(key, value) {
  console.log(key);
  console.log(value);
  $("p").highlight(key, {caseSensitive: false, className: 'yellowhigh', wordsOnly:true });
    $('p').tooltipster({
        content: $('<span><img src="my-image.png" /> <strong>This text is in bold case !</strong></span>')
    });

  //see if this accepts tooltipster
  /*$('p').tooltipster({theme: 'tooltipster-noir'}).tooltipster('This is my message');
        //  $("p").prop("title","");



        /* $('p').tooltipster({
             functionInit: function(instance, helper){

                 // parse the content
                 var content = instance.content(),
                     people = JSON.parse(content),
                     // and use it to make a sentence
                     newContent = 'We have ' + people.length + ' people today. Say hello to ' + people.join(', ');

                 // save the edited content
                 instance.content(newContent);
             }
         });*/





      /*   $("p").LiteTooltip({
        textalign: 'left',
        trigger: 'hoverable',
        location: "right",
        padding: 5,
        title:
        '<div class="video-wrapper">' +
        '<iframe src="EMBED VIDEO URL" scrolling="no" frameborder="0" allowfullscreen mozallowfullscreen webkitallowfullscreen>' +
        '</iframe>' +
        '</div>'
    });*/









    });

//adding the one below for kicks

});













    $('.yellowhigh').each(function() {
        console.log("this is in yellowhigh")
        $('yellohigh').tooltipster({
            content: $('<span><img src="my-image.png" /> <strong>This text is in bold case !</strong></span>')
        });

//this refers to the text that has just been highlighted
        var acro = {
            'Adam' :'2',
            'Eve' : '2',
            'Tom' : '3',
            'John' :'5',
            'Hans' : '6'

        }



        //modifications for use on chrome extension
    	var currentKey = $(this).text();
    	var price = acro[currentKey];
    	console.log(currentKey)

			Tipped.create(this, String(currentKey)+ " recieved " + String(price)+ " from the federal gov ");


/*var data;



      $.ajax({
          async: false,
          url: "t",
          success: function(result) {
            //data =  result.query.pages[21721040].extract;
          }
      });*/


        //  Tipped.create(this, "An algorithmn for pattern refinment");

        var iframeWidth = '800';
        var iframeHeight = '600';



  /*      $(this).qtip({ // Grab some elements to apply the tooltip t
          //content: $('<iframe src= "https://en.wikipedia.org/wiki/Adam_Smith?printable=yes" />')
          content:    {
            text: '<div><iframe id="theframe" src="https://en.wikipedia.org/wiki/Adam_Smith?printable=yes" frameBorder="100" scrolling="yes"' + 'width=' + '"' + iframeWidth + '"' + 'height' + iframeHeight
            + '"' +
             '><p>Your browser does not support iframes.</p></iframe></div>'
        },                                                     //$('<iframe src="https://en.wikipedia.org/wiki/Adam_Smith?printable=yes">'),
               position: {
                  corner: {
                     tooltip: 'bottomLeft',
                     target: 'topRight'
                  }
               },

               style: {

                  name: 'dark'
               },
               hide: {
         event: 'unfocus'
    }


        })
*/

//json content qTip2

urlString = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=" + currentKey;

    /* $(this).qtip({
       content: {
              text: 'Loading...', // Loading text...
              ajax: {
                  url: urlString, // URL to the JSON script
                  type: 'GET', // POST or GET
                  data: { id: 3 }, // Data to pass along with your request
                  dataType: 'json', // Tell it we're retrieving JSON
                  success: function(data, status) {
                      var content = 'My name is ' +  JSON.stringify(data);//data.query.pages[21721040].extract;

                      // Now we set the content manually (required!)
                      this.set('content.text', content);
                  }
              }
          }

   })*/











/*var data;
  var jSONdata;

      $.getJSON('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Stack%20Overflow', function(result) {
          //data is the JSON string
          console.log(result.query.pages[1]);
         $.each(result, function(i, field){
                    //   console.log(i);
                       jSONdata = field;
          });
      // console.log(result.query.pages.extract);
      //console.log(result);
    //data =  result.query.pages[21721040].extract;
      data = result;
   console.log(result.query.pages.extract);
    });
console.log(data)*/

//only available in pro version
/*	Tipped.create(this, {
      ajax: {
        url: 'http://vimeo.com/api/oembed.json?url=http://vimeo.com/6428069&maxwidth=280&maxheight=280',
        success: function(data, textStatus, jqXHR) {
          return {
            title: data.title,
            content: data.html
          };
        }
      },*/









            /*close: true,
            hideOn: false,
            skin: 'light',
            radius: false,
            position: 'topleft'*/


    });






      $('.highlight-16235').each(function() {
          console.log("highlight funvtion is working")
    	var currentKey = $(this).text();






});
