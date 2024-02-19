import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent {
  @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();
  public character: Character = {
    id: uuid(),
    name: '',
    power: 0
  }

  emitCharacter() {
    if (this.character.name.trim().length === 0) { return; }
    this.onNewCharacter.emit(this.character);

    this.character.name = '';
    this.character.power = 0
  }

}
