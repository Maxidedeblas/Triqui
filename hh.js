var x = 1
var arr1 = [1,0,1];
var arr2 = [0,1,1];
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

while(equis.juegos > 0 && circulo.juegos > 0) {
if(turno ==1){
//Condiciones queevaluan que esten tres campos seguidos para ganar		
if (((arr1[0] == 0) && (arr1[1] == 0) && (arr1[2] == 0)) || 
	((arr2[0] == 0) && (arr2[1] == 0) && (arr2[2] == 0)) ||
	 ((arr3[0] == 0) && (arr3[1] == 0) && (arr3[2] == 0))) {
	alert("triqui por fila");
	equis.juegos = 0 ;
}else if (((arr1[0] == 0) && (arr2[0] == 0) && (arr3[0] == 0)) || 
		  ((arr1[1] == 0) && (arr2[1] == 0) && (arr3[1] == 0)) ||
	       ((arr1[2] == 0) && (arr2[2] == 0) && (arr3[2] == 0)))
			{
				equis.juegos = 0 ;
				alert("triqui por colubna");
			}else if (((arr1[0]==0) && (arr2[1]==0) && (arr3[2]==0)) ||
			          ((arr1[2]==0) && (arr2[1]==0) && (arr3[0]==0))) {
				alert(" triqui por diagonal");
				equis.juegos = 0 ;
			}
			else{
				equis.juegos = equis.juegos - 1 ;
				turno=2;
		
}
}
		if (((arr1[0] == 1) && (arr1[1] == 1) && (arr1[2] == 1)) || 
					((arr2[0] == 1) && (arr2[1] == 1) && (arr2[2] == 1)) ||
					 ((arr3[0] == 1) && (arr3[1] == 1) && (arr3[2] == 1))) {
					 	circulo.juegos = 0;
					alert("triqui por fila gana la x");
				}else if (((arr1[0] == 1) && (arr2[0] == 1) && (arr3[0] == 1)) || 
						  ((arr1[1] == 1) && (arr2[1] == 1) && (arr3[1] == 1)) ||
					       ((arr1[2] == 1) && (arr2[2] == 1) && (arr3[2] == 1)))
							{
								circulo.juegos = 0;
								alert("triqui por colubna gana la x");
							}else if (((arr1[0]==1) && (arr2[1]==1) && (arr3[2]==1)) ||
							          ((arr1[2]==1) && (arr2[1]==1) && (arr3[0]==1))) {
								circulo.juegos = 0;
								alert(" triqui por diagonal gana la x");
							}
							else {
								circulo.juegos = circulo.juegos - 1;
								alert("marrano  x!!!");
							}
}
