import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage implements OnInit {

  constructor(public nav: NavController) { }

  abrirPagina(x: string){
    //console.log("Você clicou no botão");
    this.nav.navigateForward(x);

  }

  ngOnInit() {
  }

}
