import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { PlayersComponent } from './component/players/players.component';
import { TeamsComponent } from './component/teams/teams.component';
import { HomeComponent } from './component/home/home.component';
import { Team1990Component } from './component/team1990/team1990.component';
import { Team1991Component } from './component/team1991/team1991.component';
import { Team1992Component } from './component/team1992/team1992.component';
import { Team1996Component } from './component/team1996/team1996.component';
import { Team1997Component } from './component/team1997/team1997.component';
import { PippenComponent } from './component/pippen/pippen.component';
import { JordanComponent } from './component/jordan/jordan.component';
import { PhilJacksonComponent } from './component/phil-jackson/phil-jackson.component';
import { RodmanComponent } from './component/rodman/rodman.component';
import { HoraceGrantComponent } from './component/horace-grant/horace-grant.component';
import { ToniKukocComponent } from './component/toni-kukoc/toni-kukoc.component';
import { SteveKerrComponent } from './component/steve-kerr/steve-kerr.component';
import { PaxsonComponent } from './component/paxson/paxson.component';
import { ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PlayersComponent,
    TeamsComponent,
    HomeComponent,
    Team1990Component,
    Team1991Component,
    Team1992Component,
    Team1996Component,
    Team1997Component,
    PippenComponent,
    JordanComponent,
    PhilJacksonComponent,
    RodmanComponent,
    HoraceGrantComponent,
    ToniKukocComponent,
    SteveKerrComponent,
    PaxsonComponent,
 
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
