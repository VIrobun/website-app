import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import { MyPlaylistScreenComponent } from './pages/my-playlist-screen/my-playlist-screen.component';

const routes: Routes = [

  {path:"home", component: HomeScreenComponent},
  {path:"playlist", component:MyPlaylistScreenComponent},
  {path:"**", component: HomeScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
