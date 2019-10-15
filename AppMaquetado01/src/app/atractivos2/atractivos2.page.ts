import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atractivos2',
  templateUrl: './atractivos2.page.html',
  styleUrls: ['./atractivos2.page.scss'],
})
export class Atractivos2Page implements OnInit {

  slideOpts = {
    initialSlide:0,
    speed:400
  };

  gallery = [
    {
      img:"https://www.visitmexico.com/viajemospormexico/assets/uploads/destinos/3302_actividades-principales_veracruz_papantla_visita-la-zona-arqueologica-de-el-tajin_01.jpg",
      subtitle:"Veracruz",
      title:"El Tajín",
      content:"La majestuosa zona arqueológica El Tajín, reconocida por la UNESCO como Patrimonio de la Humanidad, con sus impactantes pirámides y sus ostentosas construcciones, te transporta a tiempos antiguos donde la cultura totonaca estableció su hogar."
    },
    {
      img:"https://www.visitmexico.com/viajemospormexico/assets/uploads/destinos/8678_Veracruz_Cultura_Pueblos_Magicos_Coscomatepec_de_Bravo.jpg",
      subtitle:"Veracruz",
      title:"Coscomatepec de Bravo",
      content:"Ubicado en las Altas Montañas, entre dos grandes barrancas, está la antesala a Citlaltépetl llamada Coscomatepec de Bravo. Es un lugar dónde se respira aire puro y su guardián, el Pico de Orizaba, crea un hilo plateado cuando se deshiela en su cascada de Alpatláhuac. El atardecer ilumina la Iglesia de San Juan Bautista al tiempo que las danzas típicas se encienden e impregnan todo el ambiente con folclor; como la de los Santiagos, que te transportará a la lucha entre cristianos y moros. Serás participe de sus tradiciones que han trascendido de generación en generación como un valioso tesoro."
    },
    {
      img:"https://www.visitmexico.com/viajemospormexico/assets/uploads/destinos/veracruz_destinos-principales_orizaba_01.jpg",
      subtitle:"Veracruz",
      title:"Orizaba",
      content:"Custodiada por el espectacular y nevado Pico de Orizaba, enclavado en lo alto de las montañas, se encuentra esta ciudad; ha creado su propia personalidad combinando su arquitectura colonial con sus verdes y coloridos paisajes naturales. El Palacio de Hierro engalana el centro histórico y con justa razón: es un pedazo de Bélgica en pleno centro veracruzano."
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
