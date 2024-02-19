import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../servicios/dbz.service';

@Component({
  selector: 'dbz-main',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(private dbzService: DbzService) { }

  get characters(): Character[] {
    return [... this.dbzService.characters];
  }

  onDeletedCharacter(id: string) {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character) {
    this.dbzService.addCharacter(character);
  }
}
