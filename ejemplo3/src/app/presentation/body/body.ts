import { Component, signal, WritableSignal } from '@angular/core';
import { Arma } from '../../domain/entities';
import { Productcard } from '../productcard/productcard';
// este es el padre 
@Component({
  imports: [Productcard],
  selector: 'app-body',
  styleUrl: './body.css',
  templateUrl: './body.html',
})
export class Body {
  arma:WritableSignal<Arma[]> = signal([
    {tipo:"G3", folio: 987563, estado:"bueno", description:" fusil de combate alemán de calibre 7,62 × 51 mm OTAN"},
     {tipo:"xiuhcoatl", folio: 43158, estado:"bueno", description:" fusil de asalto diseñado y fabricado en México por la Dirección General de Industria Militar (DGIM) y el CIADTIM para las Fuerzas Armadas mexicanas"},
     {tipo:"sig sauer", folio: 84521, estado:"bueno", description:" son armas cortas semiautomáticas reconocidas por su precisión, fiabilidad y uso extendido en fuerzas armadas, cuerpos policiales y tiro deportivo"},
     
  ]);

  deleteArma(tipo: string){
    this.arma.set(
      this.arma().filter(t=>t.tipo != tipo) // en esta parte manda a traer todos los productos exepto el que eliminamos 
    )
  }
}
