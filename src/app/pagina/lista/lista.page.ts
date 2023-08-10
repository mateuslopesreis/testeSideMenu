import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  nome = "Sakuragi Hanamich";
  avatar =  "/assets/hanamich.png";


  jogador = [
    {
      nome: "Sakuragi Hanamich",
      avatar: "/assets/hanamich.png",
      curtidas: "30"

    },
    {
      nome: "Kaede Rukawa",
      avatar: "/assets/rukawa.jpg",
      curtidas: "15"

    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
