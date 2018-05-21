//Le statut actuel du masseur
var enTrainDeMasser = false;

//Les positions actuelles du masseur
var positionMasseurX = 0;
var positionMasseurY= 0;

//Les positions du massage qui commence le plus rapidement
var Xmin=0;
var Ymin=0;
var Endmin=0;
var Position=0;

var Time = 0;
var realTimeEndMassage =0;


function attributeMissions(missions) {
  Time += 5;
  
  var tableauMinDistance = [];
  var minDistance = {
    startMin:0,
    xMin:0,
    yMin:0,
    min:false,
    endMin:0,
    dureeMassage:0,
    postionTableau:0,
  }
 
  
  for(var i=0; i<missions.length; i++){
    var newElement = Object.create(minDistance);
    newElement.startMin = missions[i].start;
    newElement.xMin = missions[i].x;
    newElement.yMin = missions[i].y;
    newElement.min = false;
    newElement.endMin = missions[i].length;
    newElement.positionTableau = i;
    
    for(var j =0; j<missions.length;j++){
      if(missions[i].start>missions[j].start){
        newElement.min = true;
      }
    }
    tableauMinDistance.push(newElement);
  }
  
  for(var k=0;k<missions.length;k++){
    if(tableauMinDistance[k].min == false){
      Xmin = tableauMinDistance[k].xMin;
      Ymin = tableauMinDistance[k].yMin;
      Endmin = tableauMinDistance[k].endMin;
      Startmin = tableauMinDistance[k].startMin;
      Position = tableauMinDistance[k].positionTableau;
    }
  }
  
  if(missions.length>0){
    for(var m =0; m<missions.length; m++){
      var X = Xmin;
      var Y = Ymin;
      var S = missions[m].start;
      var distanceMassage = Math.sqrt(X*X + Y*Y);
      var distanceMasseur = S*0.25;
      
      
      if(realTimeEndMassage<Time){
        enTrainDeMasser = false;
      }
      
      if (distanceMassage<distanceMasseur && enTrainDeMasser == false){
        enTrainDeMasser = true;
        if(enTrainDeMasser == true){
          realTimeEndMassage+=Startmin+Endmin;
        }
        positionMasseurX = X;
        positionMasseurY = Y;
        missions.splice(Position,1);
        return {1: {x:X,y:Y}};
      }
      
      else {
        return {};
      } 
    }
  }
  
  else{
    return{};
  }
}