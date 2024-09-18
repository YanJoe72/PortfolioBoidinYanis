import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProjetsComponent } from './projets/projets.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailProjetComponent } from './detail-projet/detail-projet.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { DetailExperienceComponent } from './detail-experience/detail-experience.component';
import { GenrateurSQLComponent } from './genrateur-sql/genrateur-sql.component';
import { MotusComponent } from './motus/motus.component';
import { M2lComponent } from './m2l/m2l.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CmonetiquetteComponent } from './cmonetiquette/cmonetiquette.component';
import { CesnacComponent } from './cesnac/cesnac.component';
import { CompetencesComponent } from './competences/competences.component';
import { BiblioSIOComponent } from './biblio-sio/biblio-sio.component';
import { AmphitrionComponent } from './amphitrion/amphitrion.component';
import { BioRelaisComponent } from './bio-relais/bio-relais.component';
import { TicketingComponent } from './ticketing/ticketing.component';
import { YSportMapComponent } from './ysport-map/ysport-map.component';



const routes: Routes = [
  {path: 'accueil', component : AccueilComponent,},
  {path: 'projets', component : ProjetsComponent},
  {path: 'experiences', component : ExperiencesComponent},
  {path: 'bibliosio', component : BiblioSIOComponent},
  {path: 'amphitrion', component : AmphitrionComponent},
  {path: 'bioRelais', component : BioRelaisComponent},
  {path: 'ticketing', component : TicketingComponent},
  {path: 'ysport-map', component : YSportMapComponent},
  {path: 'generateurSQL', component : GenrateurSQLComponent},
  {path: 'motus', component: MotusComponent},
  {path: 'siteDynamique', component: M2lComponent},
  {path: 'todoList', component: TodoListComponent},
  {path: 'cesnac', component: CesnacComponent},
  {path: 'cmonetiquette', component: CmonetiquetteComponent},
  {path: 'competences', component: CompetencesComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AccueilComponent,
    ProjetsComponent,
    FooterComponent,
    DetailProjetComponent,
    ExperiencesComponent,
    DetailExperienceComponent,
    GenrateurSQLComponent,
    MotusComponent,
    M2lComponent,
    TodoListComponent,
    CmonetiquetteComponent,
    CesnacComponent,
    CompetencesComponent,
    BiblioSIOComponent,
    AmphitrionComponent,
    BioRelaisComponent,
    TicketingComponent,
    YSportMapComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
