import { Component } from '@angular/core';

@Component({
  selector: 'app-superHeroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  name: string = 'spiderman';
  age: number = 21;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name}, ${this.age}, live in NY
    and have Super Power, Super Strength`;
  }

  changeName(name: string): void {
    this.name = name;
  }
  changeAge(age: number): void {
    this.age = age;
  }

  reset(): void {
    this.name = 'Spiderman';
    this.age = 21;
  }

}
