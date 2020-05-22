import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  gamesData: Game[] = [
    {
      name: 'Mundo Slots',
      image: 'mundo_slots',
      type: 'slot'
    },
    {
      name: 'La Perla Del Caribe',
      image: 'perla_caribe',
      type: 'slot'
    },
    {
      name: 'Bingo Friends',
      image: 'bingo_friends',
      type: 'casino'
    },
    {
      name: 'Troya',
      image: 'troya',
      type: 'slot'
    },
    {
      name: 'Vikingos',
      image: 'vikingos',
      type: 'slot'
    },
    {
      name: 'FBI Academy',
      image: 'fbi_academy',
      type: 'slot'
    },
    {
      name: 'Slot.com',
      image: 'slot_com',
      type: 'slot'
    },
    {
      name: '50 slot',
      image: '50_slot',
      type: 'slot'
    },
    {
      name: 'La Granja',
      image: 'granja',
      type: 'slot'
    },
    {
      name: 'El tesoro de Java',
      image: 'tesoro_java',
      type: 'slot'
    }];
  constructor() { }

  public getGames(): any {
    const gamesObservable = new Observable(observer =>
      observer.next(this.gamesData)
    );

    return gamesObservable;
  }
}
