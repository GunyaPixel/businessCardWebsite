document.body.onload = function() {
  setTimeout(function() {
    var preloader = document.getElementById('preloader');
    if(preloader.classList.contains('loaderDisappears'));
      {
      preloader.classList.add('loaderDisappears');
    }
  }, 1000);
};
