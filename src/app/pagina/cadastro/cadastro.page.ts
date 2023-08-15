import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  public pessoa ={
    nome: ""
  }

  constructor(private toast: ToastController) { }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toast.create({
      message: 'Bem vindo '+this.pessoa.nome,
      duration: 2000,
      position: position,
    });

    await toast.present();
  }

  ngOnInit() {
  }

}
