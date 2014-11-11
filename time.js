function hackAmPmTo24(hora) {
var horaPm = '';
var sumaPm;
var minPm= '';
var minEnterosPm;
var horaAm='';
var minAm='';
var minEnterosAm;

	if(hora[6].toLowerCase() == 'p') {
		for (var i = 0; hora[i] != ':';i++) {
			horaPm=horaPm + hora[i];
		}
		if (parseInt(horaPm)< 12) {
			sumaPm=parseInt(horaPm) + 12;
		}else {
			sumaPm=parseInt(horaPm);
		}
		for(var j = 3; hora[j]!=' '; j++){
			minPm=minPm + hora[j];
			minEnterosPm=parseInt(minPm)
		}
		return sumaPm + ':' + minEnterosPm
	}
	if(hora[6].toLowerCase() == 'a'){
		for(var k = 0; hora[k] != ' '; k++){
			horaAm=horaAm + hora[k];
			if (parseInt(horaAm)==12) {
				for(var j = 3; hora[j]!=' '; j++){
					minAm=minAm + hora[j];
					minEnterosAm=parseInt(minAm)
				}
				return '00' + ':' + minEnterosAm
			}
		}
		return horaAm
	}
}



function hack24ToAmPm(hora){
var horas='';
var min= '';
var minEnte

	for (var i = 0; hora[i] != ':';i++) {
		horas=horas + hora[i];
	}
	if (parseInt(horas)<12) {
		return hora + ' am'
	}
	else if (parseInt(horas)==12) {
		return hora + ' pm'
	}
	for(var j = 3; hora[j]<=hora.length; j++){
		min=min + hora[j];
		minEnte=parseInt(min)
	}
	if(parseInt(horas)<24){
		return horas - 12 + ':' + minEnte +  ' pm'
	}else if (parseInt(horas) == 24)
	return horas - 24 + ':' + minEnte +  ' am'
}

