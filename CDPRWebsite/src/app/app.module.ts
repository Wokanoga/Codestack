import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPgComponent } from './landing-pg/landing-pg.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutFoundersComponent } from './about-founders/about-founders.component';
import { RouterModule, Routes } from '@angular/router';
import { Cyberpunk2077Component } from './cyberpunk2077/cyberpunk2077.component';
import { WitcherSeriesComponent } from './witcher-series/witcher-series.component';
import { ArtworkAndScreenshotsComponent } from './artwork-and-screenshots/artwork-and-screenshots.component';
import { CDPRHistoryComponent } from './cdpr-history/cdpr-history.component';

const appRoutes: Routes = [
  { path: 'About-Founders', component: AboutFoundersComponent },
  { path: 'landing-lg', component: LandingPgComponent },
  { path: 'Witcher-Series', component: WitcherSeriesComponent },
  { path: 'Cyberpunk-2077', component: Cyberpunk2077Component },
  { path: 'CDPR-History', component: CDPRHistoryComponent },
  { path: 'Artwork-And-Screenshots', component: ArtworkAndScreenshotsComponent },
  { path: '', redirectTo: 'landing-lg', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingPgComponent,
    NavbarComponent,
    AboutFoundersComponent,
    Cyberpunk2077Component,
    WitcherSeriesComponent,
    ArtworkAndScreenshotsComponent,
    CDPRHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
