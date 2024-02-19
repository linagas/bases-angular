import { Component } from '@angular/core';

interface IHero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-superHeroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  heroes: IHero[] = [
    {id: Math.random(),name: 'Spiderman'},
    {id: Math.random(),name: 'Ironman'},
    {id: Math.random(),name: 'Hulk'},
    {id: Math.random(),name: 'Thor'},
    {id: Math.random(),name: 'Captain America'},
    {id: Math.random(),name: 'Black Widow'},
    {id: Math.random(),name: 'Hawkeye'}];
  heroesDeleted: IHero | undefined = undefined;

  removeLastHero(): void  {
    this.heroesDeleted = this.heroes.pop()
  }

  removeHero(id: number): void {
    this.heroes = this.heroes.filter((hero) => hero.id !== id)
  }

}
