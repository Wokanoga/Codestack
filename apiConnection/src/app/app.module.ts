import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TitleComponent } from './views/title/title.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { AddItemComponent } from './shared/components/add-item/add-item.component';
import { RemoveItemComponent } from './shared/components/remove-item/remove-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    HeaderComponent,
    ButtonComponent,
    AddItemComponent,
    RemoveItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
