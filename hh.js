
var arr1 = [0,0,0];
var arr2 = [0,0,1];
var arr3 = [1,0,0];
var turno = 1 
var x 
var equis ={
	puntos : 0,
	juegos : 5,
}
var circulo ={
	puntos : 0,
	juegos : 4,
}

while(equis.puntos > 0 && circulo.puntos > 0) {
	if(turno ==1){
		if (((arr1[0] == 0) && (arr1[1] == 0) && (arr1[2] == 0)) || 
			((arr2[0] == 0) && (arr2[1] == 0) && (arr2[2] == 0)) ||
	 		 ((arr3[0] == 0) && (arr3[1] == 0) && (arr3[2] == 0))) {
				alert("triqui por fila gana o");
		}else if (((arr1[0] == 0) && (arr2[0] == 0) && (arr3[0] == 0)) || 
		  		  ((arr1[1] == 0) && (arr2[1] == 0) && (arr3[1] == 0)) ||
	              ((arr1[2] == 0) && (arr2[2] == 0) && (arr3[2] == 0)))
			  {
					console.log(arr1);
					alert("triqui por colubna gana o");
			  }else if (((arr1[0]==0) && (arr2[1]==0) && (arr3[2]==0)) ||
			          	((arr1[2]==0) && (arr2[1]==0) && (arr3[0]==0))) {
						alert(" triqui por diagonal gana o");
					}
				else {
					turno = 2;
					alert("marrano !!!");
			}
	};		
	
}
