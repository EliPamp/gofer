var Time=0;
var realTimeEndMassage=0;

var masseur = {
	x:0,
  y:0,
  enTrainDeMasser:false,
  start:0,
  end:0,
}

var tableauMasseur = [];
var tableauMassage = [];

for(var i=0; i<50;i++){
  	var newMasseur = Object.create(masseur);
  	masseur.x = 0;
  	masseur.j = 0;
  	enTrainDeMasser = false;
  	masseur.start = 0;
  	masseur.end = 0;
    tableauMasseur.push(newMasseur);
}

function attributeMissions(missions) {
  Time +=5;
	
  function trouverMassage(){
  	 for(var j=0; j<missions.length; j++){
       	var X = missions[j].x;
      	var Y = missions[j].y;
       	var S = missions[j].start;
       	var distanceMassage = Math.sqrt(X*X + Y*Y);
      	var distanceMasseur = S*0.25;
       
    		if(tableauMasseur[j].enTrainDeMasser == false && distanceMassage<distanceMasseur){
      		tableauMasseur[j].enTrainDeMasser = true;
    			tableauMasseur[j].x = missions[j].x;
    			tableauMasseur[j].y = missions[j].y;
          tableauMasseur[j].start = missions[j].start;
          tableauMasseur[j].end += missions[j].start+missions[j].length;
    		}
  	 }
  }
 
  trouverMassage();
  
  for(var k=0; k<tableauMasseur.length;k++){
  	if(tableauMasseur[k].end<Time){
      tableauMasseur[k].enTrainDeMasser = false;
    	trouverMassage();
    }
  }
  
  console.log(tableauMasseur);

  return {1:{x:tableauMasseur[0].x,y:tableauMasseur[0].y},2:{x:tableauMasseur[1].x,y:tableauMasseur[1].y},3:{x:tableauMasseur[2].x,y:tableauMasseur[2].y},4:{x:tableauMasseur[3].x,y:tableauMasseur[3].y},5:{x:tableauMasseur[4].x,y:tableauMasseur[4].y},6:{x:tableauMasseur[5].x,y:tableauMasseur[5].y},7:{x:tableauMasseur[6].x,y:tableauMasseur[6].y},8:{x:tableauMasseur[7].x,y:tableauMasseur[7].y},9:{x:tableauMasseur[8].x,y:tableauMasseur[8].y},10:{x:tableauMasseur[9].x,y:tableauMasseur[9].y}}
}
