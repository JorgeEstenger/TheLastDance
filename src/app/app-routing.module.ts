import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { TeamsComponent } from './component/teams/teams.component';
import { PlayersComponent } from './component/players/players.component';
import { Team1990Component } from './component/team1990/team1990.component';
import { Team1991Component } from './component/team1991/team1991.component';
import { Team1992Component } from './component/team1992/team1992.component';
import { Team1996Component } from './component/team1996/team1996.component';
import { Team1997Component } from './component/team1997/team1997.component';
import { Team1998Component } from './component/team1998/team1998.component';
import { PippenComponent } from './component/pippen/pippen.component';
import { JordanComponent } from './component/jordan/jordan.component';
import { PhilJacksonComponent } from './component/phil-jackson/phil-jackson.component';
import { RodmanComponent } from './component/rodman/rodman.component';
import { HoraceGrantComponent } from './component/horace-grant/horace-grant.component';
import { ToniKukocComponent } from './component/toni-kukoc/toni-kukoc.component';
import { PaxsonComponent } from './component/paxson/paxson.component';
import { SteveKerrComponent } from './component/steve-kerr/steve-kerr.component';


const routes: Routes = [
  {path:"Home", component:HomeComponent},
  {path:"Teams", component:TeamsComponent},
  {path:"Players", component:PlayersComponent},
  {path:"team1990", component:Team1990Component},
  {path:"team1991", component:Team1991Component},
  {path:"team1992", component:Team1992Component},
  {path:"team1996", component:Team1996Component},
  {path:"team1997", component:Team1997Component},
  {path:"team1998", component:Team1998Component},
  {path:"Pippen", component:PippenComponent},
  {path:"Jordan",component:JordanComponent},
  {path:"PhilJackson", component:PhilJacksonComponent},
  {path:"Rodman", component:RodmanComponent},
  {path:"HoraceGrant", component:HoraceGrantComponent},
  {path:"ToniKukoc", component:ToniKukocComponent},
  {path:"Paxson", component:PaxsonComponent},
  {path:"SteveKerr", component:SteveKerrComponent},
  
 
  {path:"*", pathMatch:'full',redirectTo:'Home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
