import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Output() onDeleteId: EventEmitter<string> = new EventEmitter();
  @Input() listCharacter: Character[] = [];

  onDeleteCharacter(id: string) {
    if (!id) return;
    this.onDeleteId.emit(id);
  }
}
