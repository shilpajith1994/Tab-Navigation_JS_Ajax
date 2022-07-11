
var tablinks = document.querySelectorAll('.tablinks'),
user = document.querySelector('.userDetails');

// looping through the tabs & adding event listener on the click
for(var i=0;i<tablinks.length;i++) {
  tablinks[i].addEventListener('click', function(e) {
    // fetching url
   
    var url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(function(response) { 
      if (response.status == 200) 
      return response.json(); 
    })
    
    .then(function(data) {
      var dataId = e.target.getAttribute('data-id');
      var filterArr = data.filter(function(item) {
        return item.userId == dataId ;
      })
      
      for (var filter of filterArr) {
        var span="";
        span += "<li class='list active' data-active='"+dataId+"'><span> USER ID : " + filter.userId + "</span>" ;
        span += "<h2> ID : " + filter.id + "</h2>";
        span += "<h2> TITLE : " + filter.title + "</h2>";
        span += "<h2> DESCRIPTION : " + filter.body + "</h2></li>";
        user.innerHTML += span; 
      }
      
      // removing the active class 
      var li = document.querySelectorAll('.list');
      for(var j=0 ; j<li.length; j++) {
        var previous = li[j].getAttribute('data-active');

        if(previous != dataId)
         li[j].classList.remove("active");
      }
    })
    .catch(function() {
      return user.innerHTML = "Error! Data Not Found "
     })
  })
}









































