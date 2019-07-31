import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GamePageComponent } from './views/pages/game-page/game-page.component';
import { OptionsPageComponent } from './views/pages/options-page/options-page.component';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { ButtonComponent } from './shared/button/button.component';
import { TitlePageComponent } from './views/pages/title-page/title-page.component';
import { ToastrModule } from 'ngx-toastr';
import { EndScreenComponent } from './views/pages/end-screen/end-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    TitlePageComponent,
    GamePageComponent,
    OptionsPageComponent,
    HeaderComponent,
    ButtonComponent,
    TitlePageComponent,
    EndScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AccordionModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
