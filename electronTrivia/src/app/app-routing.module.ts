import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitlePageComponent } from './views/pages/title-page/title-page.component';
import { OptionsPageComponent } from './views/pages/options-page/options-page.component';
import { GamePageComponent } from './views/pages/game-page/game-page.component';
import { EndScreenComponent } from './views/pages/end-screen/end-screen.component';

const routes: Routes = [
  {path: 'title', component:TitlePageComponent},
  {path: 'game', component: GamePageComponent},
  {path: 'options', component:OptionsPageComponent},
  {path: 'endScreen', component:EndScreenComponent},
  {path: '', component:TitlePageComponent, pathMatch:'full'},
  {path: '**', component:TitlePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
