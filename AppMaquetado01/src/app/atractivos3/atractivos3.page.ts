import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atractivos3',
  templateUrl: './atractivos3.page.html',
  styleUrls: ['./atractivos3.page.scss'],
})
export class Atractivos3Page implements OnInit {

  slideOpts = {
    initialSlide:0,
    speed:400
  };

  gallery = [
    {
      img:"https://www.visitmexico.com/viajemospormexico/assets/uploads/destinos/guanajuato_destinos-principales_celaya_01.jpg",
      subtitle:"Guanajuato",
      title:"Celaya",
      content:"Si estás buscando alejarte por unos días del bullicio de las grandes ciudades y las multitudes, sin sacrificar la comodidad, Celaya es para ti. Es conocida como La Puerta de Oro del Bajío. Es una hermosa ciudad colonial sin prisa y con buen gusto que cuida de todos los detalles de su sofisticado diseño urbano, con sus parques, avenidas y edificios que te dejarán maravillado."
    },
    {
      img:"https://www.visitmexico.com/viajemospormexico/assets/uploads/destinos/Guanajuato_Regiones_Principales%20destinos_Irapuato.jpg",
      subtitle:"Guanajuato",
      title:"Irapuato",
      content:"Pinceladas de color rojo dibujan tu paso por la ciudad de Irapuato en el estado de Guanajuato. No podría ser de otra manera pues esta ciudad tiene una importante producción de fresas. Justo cuando la ciudad se tiñe de dorados anaranjados podrás caminar por La Presidencia Municipal que te revelará su encanto, pues detrás de su arquitectura con un gran valor histórico, se resguarda uno de los murales más impresionantes de la ciudad. Por las noches Irapuato se transforma; la negra noche se ilumina con los colores de las Fuentes de Aguas Danzarinas, un espectáculo de música y color."
    },
    {
      img:"https://www.visitmexico.com/viajemospormexico/assets/uploads/destinos/guanajuato_destinos-principales_guanajuato_01.jpg",
      subtitle:"Guanajuato",
      title:"Guanajuato",
      content:"Enamórate en Guanajuato, descubre lugares impresionantes, llenos de color y de historia, déjate envolver por un ambiente cálido lleno de paz y tranquilidad, donde tus sueños cobrarán vida. Quizá por ello la UNESCO lo ha nombrado Patrimonio de la Humanidad. Sus dos enigmáticas ciudades patrimonio te harán descubrir el secreto de un amor para toda la vida; esta experiencia se completa con un abanico interminable de opciones. Guanajuato es una tierra donde puedes caminar por sus pintorescos pueblos mágicos, conocer su historia a través de sus cuatro zonas arqueológicas, hacer vibrar tus sentidos con sus magníficos festivales y eventos artísticos (como el Festival Internacional Cervantino), o maravillarte con los cuerpos momificados naturalmente."
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
