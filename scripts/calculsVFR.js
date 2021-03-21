//Calcul de la dérive max Xmax=Fb*Vw
function GetDeriveMax(vp, vw) {
  return Math.round((60/vp)*vw)
}

//Calcul de la dérive arrondie aux 5° près
function GetDerive(vp, vw, angleV) {
  return round(GetDeriveMax(vp, vw)*Math.sin(DegToRad(angleV)), 5)
}

//Calcul du vent effectif Veff=Vw*cos(a)
function GetVentEffectif(vp, vw, angleV) {
  return Math.round(vw*Math.cos(DegToRad(angleV)))
}

//Calcul du vent de travers Vt=Vw*sin(a)
function GetVentTravers(vp, vw, angleV) {
  return Math.round(vw*Math.sin(DegToRad(angleV)))
}

//Calcul du temps sans vent
function GetTSV(vp, dist) {
  return Math.round((60/vp)*dist)
}

/*Conversions*/
//Conversion de kts en kph
function ConvertKtToKph(vitesse) {
  return Math.round(vitesse*1.852)
}

//Conversion de degrés en radians
function DegToRad(deg) {
  return deg*Math.PI/180
}

/*Fonctions utilitaires*/
//Arrondi un nombre 'number' par pas de 'increment'
function round(number, increment){
  return Math.round(number/increment)*increment
}
