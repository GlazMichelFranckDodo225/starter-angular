// Imports des composants
import { Component } from '@angular/core';

// Utilisation du composant importé (sous la forme d'un décorateur ("@"))
@Component({
  selector: 'app-root', // Identifiant du composant
  template: `<h1>Welcome to {{title}}!</h1>`, // Code HTML associé au composant
  styles: []
})

// Export du composant pour le rendre disponible dans toute l'application
export class AppComponent {
  // Propriété "title" utilisée juste au-desssus (ligne 7)
  title = 'angular-pokemons-app'; 
}
