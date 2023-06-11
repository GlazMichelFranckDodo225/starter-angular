// MODULES RACINE REGROUPANT TOUS LES AUTRES MODULES
// Module ==> regroupement de composants par fonctionnalités
// Imports de modules natifs à Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import du module contenant les routes
import { AppRoutingModule } from './app-routing.module';
// Import du composant "AppComponent"
import { AppComponent } from './app.component';

// Déclarations des modules
@NgModule({
  // Liste de tous les composants appartenant au module
  declarations: [ 
    AppComponent
  ],
  // Tous les modules à importer 
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // Système d'injection de dépendances
  providers: [],
  // Composant racine ==> 1er composant à lancer au 
  // chargement de l'application
  bootstrap: [AppComponent]
})
export class AppModule { }
