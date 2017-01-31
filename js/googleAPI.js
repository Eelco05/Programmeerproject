
// Programmeerproject

// Eelco Alink <eelco.alink@gmail.com>
// St.nr: 10459006

//                 ====
//                 \\// 
//            <=>===[]===<=>
//                  []
//                  []
//                  []
//                 _[]_
//                 \  /
//                  \/


function initMap() {
  var center = {lat: 41.552772, lng: 14.745485};
      galdo = {lat: 41.590720, lng: 14.752160};
      gildone = {lat: 41.510343, lng: 14.739780};
  
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: center,
    scrollwheel: false
  });

  map.setMapTypeId(google.maps.MapTypeId.HYBRID);

  var marker = new google.maps.Marker({
    position: galdo,
    map: map
  });
  var marker2 = new google.maps.Marker({
    position: gildone,
    map: map
  });
};

// {
//     name: 'Samnite Sancuary',
//     city: 'San Giovanni in Galdo, Italy',
//     radius: 10,
//     fillKey: 'Site',
//     latitude: 41.590720,
//     longitude: 14.752160
//   },
//   {
//     name: 'Samnite Sancuary',
//     city: 'Gildone, Italy',
//     radius: 10,
//     fillKey: 'Site',
//     latitude: 41.510343,
//     longitude: 14.739780
//   }