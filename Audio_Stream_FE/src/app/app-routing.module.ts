import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';

const routes: Routes = [
  {
    path: 'register', component : RegisterComponent
  },
  {
    path: '', component: LoginComponent
  },
  {
    path: 'audioPlayer', component: AudioPlayerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
