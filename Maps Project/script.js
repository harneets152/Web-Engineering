var map;

// Rectangles variables of the buildings
var jacaranda;
var bayramian;
var library;
var campusstore;
var pServ;

// Number of clicks keeps count
var numclicks = 1;

// keep track of correct answer
var correctAnswer = 0;

// init Google Maps
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 34.238944, lng: -118.527500},
        zoom: 17,
        disableDoubleClickZoom: true,
        zoomControl: false,
        mapTypeControl: false,
        draggable: false,
        keyboardShortcuts: false,
        streetViewControl: false,
    });

    map.setOptions({styles: styles["hide"]});
    
    // add double-click listener to map
    map.addListener("dblclick", function(e) {
        drawRectangle(e.latLng, map);
    })
}

// Building names and roads are hidden 
var styles = {
    hide: [
        {
            featureType: "poi",
            elementType: "labels",
            stylers: [{visibility: "off"}]
        },
        {
            featureType: "road",
            elementType: "labels",
            stylers: [{visibility: "off"}]
        }
    ]
};

// Rectangles being bounded by coordinates
function drawRectangle(latLng, map) {

    switch(numclicks) {
        case 1:
            // Boundaries for Jacaranda, Southwest is first followed by Northeast
            var jacBounds = new google.maps.LatLngBounds(
                new google.maps.LatLng(34.240997, -118.529400),
                new google.maps.LatLng(34.242119, -118.527800)
            );
            jacaranda = new google.maps.Rectangle({
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillOpacity: 0.1,
                map: map,
                bounds: jacBounds
            });
            // Green rectangle is shown for clicking on the correct building
            if (jacBounds.contains(latLng)) {
                jacaranda.setOptions({
                    strokeColor: "#008000",
                    fillColor: "#008000"    
                });
                correctAnswer++;
                showTotal(1, true);
            }
            else { 
              // Red rectangle is shown for clicking on the wrong building 
                jacaranda.setOptions({
                    strokeColor: "#FF0000",
                    fillColor: "#FF0000"
                });
                showTotal(1, false)
            }
            // Number of clicks is updated and this updates the number of correct answers
            numclicks++;
            showResult();
            break;
        case 2:
            // Boundaries for Bayramian, Southwest is first followed by Northeast
            var bayBounds = new google.maps.LatLngBounds(
                new google.maps.LatLng(34.23992114530611, -118.53147607634222),
                new google.maps.LatLng(34.24070166133765, -118.53016829855355)
            );
            bayramian = new google.maps.Rectangle({
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillOpacity: 0.1,
                map: map,
                bounds: bayBounds
            });
            // Green rectangle is shown for clicking on the correct building
            if (bayBounds.contains(latLng)) {
                bayramian.setOptions({
                    strokeColor: "#008000",
                    fillColor: "#008000"    
                });
                correctAnswer++;
                showTotal(2, true);
            }
            else { 
              // Red rectangle is shown for clicking on the wrong building
                bayramian.setOptions({
                    strokeColor: "#FF0000",
                    fillColor: "#FF0000"
                });
                showTotal(2, false);
            }
            // Number of clicks is updated and this updates the number of correct answers
            numclicks++;
            showResult();
            break;
        case 3:
            /// Boundaries for the Library, Southwest is first followed by Northeast
            var libBounds = new google.maps.LatLngBounds(
                new google.maps.LatLng(34.239763395431254, -118.53004790155062),
                new google.maps.LatLng(34.24041086092254, -118.5286102375731)
            );
            library = new google.maps.Rectangle({
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillOpacity: 0.1,
                map: map,
                bounds: libBounds
            });
            // Green rectangle is shown for clicking on the correct building
            if (libBounds.contains(latLng)) {
                library.setOptions({
                    strokeColor: "#008000",
                    fillColor: "#008000"    
                });
                correctAnswer++;
                showTotal(3, true);
            }
            else { 
              // Red rectangle is shown for clicking on the wrong building
                library.setOptions({
                    strokeColor: "#FF0000",
                    fillColor: "#FF0000"
                });
                showTotal(3, false);
            }
            // Number of clicks is updated and this updates the number of correct answers
            numclicks++;
            showResult();
            break;
        case 4:
            // Boundaries for the Campus Store, Southwest is first followed by Northeast
            var storeBounds = new google.maps.LatLngBounds(
                new google.maps.LatLng(34.237000, -118.528750),
                new google.maps.LatLng(34.237760, -118.527600)
            );
            campusstore = new google.maps.Rectangle({
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillOpacity: 0.1,
                map: map,
                bounds: storeBounds
            });
            // Green rectangle is shown for clicking on the correct building
            if (storeBounds.contains(latLng)) {
                campusstore.setOptions({
                    strokeColor: "#008000",
                    fillColor: "#008000"    
                });
                correctAnswer++;
                showTotal(4, true);
            }
            else { 
              // Red rectangle is shown for clicking on the wrong building
                campusstore.setOptions({
                    strokeColor: "#FF0000",
                    fillColor: "#FF0000"
                });
                showTotal(4, false);
            }
            // Number of clicks is updated and this updates the number of correct answers
            numclicks++;
            showResult();
            break;
        case 5:
            // Boundaries for Police Services, Southwest is first followed by Northeast
            var psBounds = new google.maps.LatLngBounds(
                new google.maps.LatLng(34.238582620739365, -118.5337680971138),
                new google.maps.LatLng(34.23898174948941, -118.53272740005546)
            );
            pServ = new google.maps.Rectangle({
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillOpacity: 0.1,
                map: map,
                bounds: psBounds
            });
            // Green rectangle is shown for clicking on the correct building
            if (psBounds.contains(latLng)) {
                pServ.setOptions({
                    strokeColor: "#008000",
                    fillColor: "#008000"    
                });
                correctAnswer++;
                showTotal(5, true);
            }
            else { 
              // Red rectangle is shown for clicking on the wrong building
                pServ.setOptions({
                    strokeColor: "#FF0000",
                    fillColor: "#FF0000"
                });
                showTotal(5, false);
            }
            // Number of clicks is updated and this updates the number of correct answers
            numclicks++;
            showResult();
            break;
        default:
            break;
    }
}

function showResult() {
    document.getElementById("correctCount").innerHTML = correctAnswer;
}

function showTotal(qnum, correct) {
    if (correct == true)
        document.getElementById("result" + qnum).innerHTML = "<b>Correct</b>";
    else
        document.getElementById("result" + qnum).innerHTML = "<b style='color:blue'>Incorrect</b>";
}
