import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }
  public characters: Character[] = [
    { id: uuid(), name: 'Goku', power: 15000 },
    { id: uuid(), name: 'Vegeta', power: 8500 },
    { id: uuid(), name: 'Krillin', power: 5000 }
  ];

  addCharacter(character: Character) {
    console.log(character);
    const newCharacter: Character  = {...character, id: uuid()}
    this.characters.push(newCharacter);
  }
  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
