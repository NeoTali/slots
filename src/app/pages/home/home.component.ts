import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../services/data-service.service';
import { Game } from '../../models/game.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  games: Game[] = [];
  private subscription: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    const observable = this.dataService.getGames();
    this.subscription = observable.subscribe((gamesData: Game[]) => this.games = gamesData);
    this.games.forEach(game => game.image = '../../../assets/' + game.image + '.webp');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
