import { Component } from '@angular/core';
import { DateService } from '../shared/date.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent {

  constructor(public dateService: DateService) { }

  change(dif: number) {
    this.dateService.changeMonth(dif)
  }
}
