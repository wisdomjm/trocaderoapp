import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainstore',
  templateUrl: './mainstore.page.html',
  styleUrls: ['./mainstore.page.scss'],
})
export class MainstorePage implements OnInit {

  categorias: any = [];
  productos: any = [];
  productosDestacados: any = [];

  constructor() { }

  ngOnInit() {
    //Cargar las Categorias
    this.CargarCategorias();
    this.CargarProductos();
    this.CargarProductosDestacados();
  }

  public CargarCategorias(){
    this.categorias = [
      {nombre:'Diversion y Recreacion'},
      {nombre:'Regalos'},
      {nombre:'Servicios Educativos'},
      {nombre:'Agro'},
      {nombre:'Alimentos y Bebidas'},
      {nombre:'Animales y Mascotas'},
      {nombre:'Antiguedades y Colecciones'},
      {nombre:'Arte y Papeleria'},
      {nombre:'Bebes'},
      {nombre:'Belleza y Cuidado Personal'},
      {nombre:'Consolas y Videojuegos'},
      {nombre:'Deportes y Fitness'},
      {nombre:'Instrumentos Musicales'},
      {nombre:'Juegos y Juguetes'},
      {nombre:'Libros, Revistas y Comics'},
      {nombre:'Ropa y Accesorios'},
      {nombre:'Salud y Equipamento Medico'},

    ]
  }

  public CargarProductos(){
    this.productos = [
      {
        id:'0',
        imagen:'../../assets/fashion/fashion5.jpg',
        nombre:'Vestido Morado',
        categoria:'Ropa',
        precio:'120',
        calificacion:'4.5'
      },
      {
        id:'1',
        imagen:'../../assets/fashion/fashion3.jpg',
        nombre:'Vestido Blanco',
        categoria:'Ropa',
        precio:'240',
        calificacion:'4.7'
      },
      {
        id:'2',
        imagen:'../../assets/fashion/fashion4.jpg',
        nombre:'Conjunto Vestido',
        categoria:'Ropa',
        precio:'180',
        calificacion:'3.5'
      },
      {
        id:'3',
        imagen:'../../assets/fashion/fashion6.jpg',
        nombre:'Camisa Femenina',
        categoria:'Ropa',
        precio:'60',
        calificacion:'4.2'
      }
    ]
  }

  public CargarProductosDestacados(){
    this.productosDestacados = [
      {
        id:'0',
        imagen:'../../assets/fashion/fashion5.jpg',
        nombre:'Vestido Morado',
        categoria:'Ropa',
        calificacion:'4.5'     
      },
      {
        id:'0',
        imagen:'../../assets/fashion/fashion2.jpg',
        nombre:'Vestido',
        categoria:'Ropa',
        calificacion:'4.5'     
      },
      {
        id:'0',
        imagen:'../../assets/fashion/fashion3.jpg',
        nombre:'Vestido Formal',
        categoria:'Ropa',
        calificacion:'4.5'     
      },
      {
        id:'0',
        imagen:'../../assets/fashion/fashion1.jpg',
        nombre:'Vestido Casual',
        categoria:'Ropa',
        calificacion:'4.5'     
      },
      {
        id:'0',
        imagen:'../../assets/fashion/fashion4.jpg',
        nombre:'Vestido Casual',
        categoria:'Ropa',
        calificacion:'4.5'     
      },
      {
        id:'0',
        imagen:'../../assets/fashion/fashion6.jpg',
        nombre:'Vestido Casual',
        categoria:'Ropa',
        calificacion:'4.5'     
      },
    ]
  }


}
