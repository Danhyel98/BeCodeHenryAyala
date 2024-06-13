var waypoint = new Waypoint({
    element: document.getElementById('section2'),
    handler: function(direction) {
      if(direction === "down"){
      alert('Are you sure ? Things are wild down there')
      }
    },
    offset: '100%'
  })

  var waypoint2 = new Waypoint({
    element: document.getElementById('section2'),
    handler: function(direction) {
      if (direction ==="up"){
        alert('I told you')
      }
    }, 
    offset : '0%'
  })