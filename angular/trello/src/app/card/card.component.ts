import { Component, OnInit,Input } from '@angular/core';
import { CardService} from '../card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  card : { name }={ name : ""};

  @Input() showcard: boolean;

  constructor( public cardService : CardService) { }

  ngOnInit() {
  }

  addcard(){
    this.cardService.createCard(this.card);
    this.card = {name : ""};
  }
}
