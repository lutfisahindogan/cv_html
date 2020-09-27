
$(document).ready(function(){
  initializeRating();
});


function initializeRating() {
  $('.big-bar-container').each(function() {
    var rating = getBigRating($(this).attr("data-rating"));
    $(this).html(rating)
  });

  $('.small-bar-container').each(function() {
    var rating = getSmallRating($(this).attr("data-rating"));
    $(this).html(rating)
  });
}


function getBigRating(score){
    var components = [];

    for (var i = 0; i < 8; i++) {
      if(score > 12.5) {
        score -= 12.5;
        components.push(`
          <div class="rating-icon-container">
            <svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.498 1.27a2 2 0 0 1 2.004 0l9.5 5.497A2 2 0 0 1 24 8.498v11.004a2 2 0 0 1-.998 1.73l-9.5 5.498a2 2 0 0 1-2.004 0l-9.5-5.497A2 2 0 0 1 1 19.502V8.498a2 2 0 0 1 .998-1.73l9.5-5.498z" fill="#e5ecfd"></path>
                <path d="M1 8.498v11.004a2 2 0 0 0 .998 1.73l9.5 5.498a2 2 0 0 0 2.004 0l9.5-5.497A2 2 0 0 0 24 19.502V8.498a2 2 0 0 0-.998-1.73l-9.5-5.498a2 2 0 0 0-2.004 0l-9.5 5.497A2 2 0 0 0 1 8.498z" stroke="#e5ecfd" stroke-width="2"></path>
            </svg>
         </div>`
        );
      } else {
        components.push(`
          <div class="rating-icon-container">
            <svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.498 1.27a2 2 0 0 1 2.004 0l9.5 5.497A2 2 0 0 1 24 8.498v11.004a2 2 0 0 1-.998 1.73l-9.5 5.498a2 2 0 0 1-2.004 0l-9.5-5.497A2 2 0 0 1 1 19.502V8.498a2 2 0 0 1 .998-1.73l9.5-5.498z" fill="#fff"></path>
              <path d="M1 8.498v11.004a2 2 0 0 0 .998 1.73l9.5 5.498a2 2 0 0 0 2.004 0l9.5-5.497A2 2 0 0 0 24 19.502V8.498a2 2 0 0 0-.998-1.73l-9.5-5.498a2 2 0 0 0-2.004 0l-9.5 5.497A2 2 0 0 0 1 8.498z" stroke="#e5ecfd" stroke-width="2"></path>
            </svg>
          </div>`
        );
      }
    }

    return components.join('');
}

function getSmallRating(score){
  var components = [];

  for (var i = 0; i < 4; i++) {
    if(score > 25) {
      score -= 25;
      components.push(`
        <div class="rating-icon-container">
          <svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.498 1.27a2 2 0 0 1 2.004 0l9.5 5.497A2 2 0 0 1 24 8.498v11.004a2 2 0 0 1-.998 1.73l-9.5 5.498a2 2 0 0 1-2.004 0l-9.5-5.497A2 2 0 0 1 1 19.502V8.498a2 2 0 0 1 .998-1.73l9.5-5.498z" fill="#e5ecfd"></path>
              <path d="M1 8.498v11.004a2 2 0 0 0 .998 1.73l9.5 5.498a2 2 0 0 0 2.004 0l9.5-5.497A2 2 0 0 0 24 19.502V8.498a2 2 0 0 0-.998-1.73l-9.5-5.498a2 2 0 0 0-2.004 0l-9.5 5.497A2 2 0 0 0 1 8.498z" stroke="#e5ecfd" stroke-width="2"></path>
          </svg>
       </div>`
      );
    } else {
      components.push(`
        <div class="rating-icon-container">
          <svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.498 1.27a2 2 0 0 1 2.004 0l9.5 5.497A2 2 0 0 1 24 8.498v11.004a2 2 0 0 1-.998 1.73l-9.5 5.498a2 2 0 0 1-2.004 0l-9.5-5.497A2 2 0 0 1 1 19.502V8.498a2 2 0 0 1 .998-1.73l9.5-5.498z" fill="#fff"></path>
            <path d="M1 8.498v11.004a2 2 0 0 0 .998 1.73l9.5 5.498a2 2 0 0 0 2.004 0l9.5-5.497A2 2 0 0 0 24 19.502V8.498a2 2 0 0 0-.998-1.73l-9.5-5.498a2 2 0 0 0-2.004 0l-9.5 5.497A2 2 0 0 0 1 8.498z" stroke="#e5ecfd" stroke-width="2"></path>
          </svg>
        </div>`
      );
    }
  }

  return components.join('');
}




