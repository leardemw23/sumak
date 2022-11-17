import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails 
  
  foodDetails = [
    {
      id:1,
      foodName:"VIP PLATA BLACK ROYAL",
      foodDetails:"1.- ACCESO A AREAS VIP 2- EVENTOS PRIVADOS CON STREAMERS.",
      foodPrice:10,
      foodImg:"https://res.cloudinary.com/black-royal/image/upload/v1660517169/black%20royal/FullLogo_2_ujiptm.webp"
    },
    {
      id:2,
      foodName:"VIP ORO BLACK ROYAL",
      foodDetails:"1.- ACCESO A AREAS VIP 2- EVENTOS PRIVADOS CON STREAMERS 3.- BAILES PRIVADOS 4.- FOTOS Y SALUDOS CON STREMERS 5.- CARTEL EN EL PASILLO DE LA FAMA. ",
      foodPrice:20,
      foodImg:"https://res.cloudinary.com/black-royal/image/upload/v1660516983/black%20royal/bannerimg_qbulvc.png"
    },
    {
      id:3,
      foodName:"VIP DIAMANTE BLACK ROYAL",
      foodDetails:"1.- ACCESO A AREAS VIP 2- EVENTOS PRIVADOS CON STREAMERS 3.- BAILES PRIVADOS 4.- FOTOS Y SALUDOS CON STREMERS 5.- CARTEL EN EL PASILLO DE LA FAMA. ",
      foodPrice:30,
      foodImg:"https://res.cloudinary.com/black-royal/image/upload/v1660517170/black%20royal/diamante_irc6hw.webp"
    },
    {
      id:4,
      foodName:"VIP ESMERALDA BLACK ROYAL",
      foodDetails:"1.- ACCESO A AREAS VIP 2- EVENTOS PRIVADOS CON STREAMERS 3.- BAILES PRIVADOS 4.- FOTOS Y SALUDOS CON STREMERS 5.- CARTEL EN EL PASILLO DE LA FAMA. ",
      foodPrice:70,
      foodImg:"https://res.cloudinary.com/black-royal/image/upload/v1660517170/black%20royal/esmeralda_xipc0l.webp"
    },
    {
      id:5,
      foodName:"VIP RUBY BLACK ROYAL",
      foodDetails:"1.- ACCESO A AREAS VIP 2- EVENTOS PRIVADOS CON STREAMERS 3.- BAILES PRIVADOS 4.- FOTOS Y SALUDOS CON STREMERS 5.- CARTEL EN EL PASILLO DE LA FAMA. ",
      foodPrice:100,
      foodImg:"https://res.cloudinary.com/black-royal/image/upload/v1660517170/black%20royal/ruby_j0tszo.webp"
    },
    {
      id:6,
      foodName:"VIP MECENA EXCLUSIVA",
      foodDetails:"TODOS LOS VENEFICIOS QUE OFRECE BLACK ROYAL",
      foodPrice:0,
      foodImg:"https://res.cloudinary.com/black-royal/image/upload/v1660518931/black%20royal/black__h2whaf.png"
    }
  ]


  

}
