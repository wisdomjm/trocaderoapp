import { Component, OnInit } from '@angular/core';
import { AvatarService } from 'src/app/services/avatar.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-addnewproduct',
  templateUrl: './addnewproduct.page.html',
  styleUrls: ['./addnewproduct.page.scss'],
})
export class AddnewproductPage implements OnInit {

  categorias: any = [];
  profile: { imageUrl: string | null } = { imageUrl: null };


  constructor(
    private avatarService: AvatarService,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private toastController: ToastController
  ) { }

  async ngOnInit() {
    this.CargarCategorias();

    //Get User Profile
    try {
      // below code sets the profile to null if no profile is found in the database
      // wait for the profile to be retrieved from the database and then set it to the profile variable or set it to null if no profile is found
      this.profile = (await this.avatarService.getUserProfile()) || {
        imageUrl: null,
      }; // if no profile, set to null
    } catch (e) {
      console.log('Error getting user profile', e); // log error
    }


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

  async addCameraImage() {
    // async function because it uses await to wait for the camera to open and take a photo and then upload the photo to the database and then reload the profile to get the new image and then display a toast message to the user.

    // open camera from web browser and take a photo
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Prompt, // Source of image is set to prompt so that the user can choose between camera and photo library
    });

    if (image) {
      // if image is not null
      const loading = await this.loadingController.create(); // create a loading controller
      await loading.present(); // present the loading controller

      const result = await this.avatarService.uploadAvatar(image); // upload the image to the database
      await loading.dismiss(); // dismiss the loading controller

      // reload the profile to get the new image
      this.profile = (await this.avatarService.getUserProfile()) || {
        // if no profile, set to null
        imageUrl: null,
      };
      // display a toast message to the user
      if (result) {
        // if result is true
        const toast = await this.toastController.create({
          message: 'Profile Pic Updated.', // display message
          duration: 3000, // display for 3 seconds
        });
        await toast.present(); // present the toast message
      }

      // display an alert message to the user
      // if the upload failed
      if (!result) {
        // if result is false
        const alert = await this.alertController.create({
          header: 'Upload failed', // display message
          message: 'There was a problem uploading your avatar.',
          buttons: ['OK'],
        });
        await alert.present(); // present the alert message
      }
    }
  }


}
