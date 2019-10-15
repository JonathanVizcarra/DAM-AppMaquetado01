import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atractivos',
  templateUrl: './atractivos.page.html',
  styleUrls: ['./atractivos.page.scss'],
})
export class AtractivosPage implements OnInit {

  slideOpts = {
    initialSlide:0,
    speed:400
  };

  gallery = [
    {
      img:"https://www.visitmexico.com/viajemospormexico/assets/uploads/destinos/chiapas_destinos-principales_chiapa-de-corzo_01.jpg",
      subtitle:"Chiapas",
      title:"Chiapa de Corzo",
      content:"Chiapa de Corzo es uno de los pueblos más bellos de Chiapas que se embellece con el río Grijalva y sus construcciones renacentistas, su cálida gente, sus colores por doquier e impresionantes espectáculos naturales; están, por ejemplo, el Cañón del Sumidero o las paredes que alcanzan casi los mil metros de altura donde hay cuevas y cascadas."
    },
    {
      img:"https://www.visitmexico.com/viajemospormexico/assets/uploads/destinos/chiapas_destinos-principales_palenque_01.jpg",
      subtitle:"Chiapas",
      title:"Palenque",
      content:"Conocerlo es adentrarse en la historia y el misticismo de la Cultura Maya con la majestuosidad de sus centros ceremoniales. Al norte del estado se hallan tanto la antigua ciudad de Palenque, que construyeron los mayas, como el pueblo que sirve de punto de partida para explorar las maravillas naturales en derredor. Un camino interrumpido por cascadas conduce hacia el sur hasta la zona arqueológica de Toniná. Si te diriges al sureste, pasando por la Selva Lacandona, encontrarás los vestigios de otras dos grandes urbes prehispánicas: Bonampak y Yaxchilán."
    },
    {
      img:"https://www.visitmexico.com/viajemospormexico/assets/uploads/destinos/chiapas_destinos-principales_tuxtla-gutierrez_01.jpg",
      subtitle:"Chiapas",
      title:"Tuxtla Gutiérrez",
      content:"Entra a los cañones y sótanos naturales y a los ríos de Tuxtla Gutiérrez. Si la suerte está de tu lado podrás ver volar al “unicornio” chiapaneco desplegando su plumaje negro azulado entre la flora selvática en el zoológico de Tuxtla. Sentir la inmensidad cuando viajes en una lancha en la falla geológica formada hace millones de años, será inevitable; a los lados contemplarás el hogar de las aves y los monos en las paredes que casi alcanzan los mil metros de altura, donde hay cuevas y cascadas."
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
