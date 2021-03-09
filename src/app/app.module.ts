import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { TemarioComponent } from './pages/temario/temario.component';
import { DirectivasComponent } from './pages/directivas/directivas.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { PipesComponent } from './pages/pipes/pipes.component';


//configuracion del idioma
import localeES from '@angular/common/locales/es'
import { registerLocaleData } from '@angular/common';
import { MyPipeRevesPipe } from './pipes/my-pipe-reves.pipe'

registerLocaleData (localeES);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TemarioComponent,
    DirectivasComponent,
    TarjetaComponent,
    PipesComponent,
    MyPipeRevesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
       provide: LOCALE_ID, useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
