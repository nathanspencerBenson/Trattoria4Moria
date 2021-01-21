let container = document.querySelector('.container');
let span = document.getElementsByTagName('span');



 
 
  function textSplit(container) {
    container.children().andSelf().contents().each(function() {
      if (this.nodeType == 3) {
        $(this).replaceWith($(this).text().replace(/(\w)/g, "<span>$&</span>"));
      }
    });
  }
  
  $(function () {
   textSplit($('#js-text'));
  });




