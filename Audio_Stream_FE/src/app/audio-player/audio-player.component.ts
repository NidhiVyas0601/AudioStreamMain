import { Component } from '@angular/core';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.less']
})
export class AudioPlayerComponent {
 constructor(private authService:AuthService){
  
 }

 fetchAudioData(){
 this.authService.fetchAudioList().subscribe(  (resultData: any) => { 
   const audioList = resultData.map((x:any)=>
   {title:x.songname;
    cover:x.image;
    url:x.song})
});
 }

}
