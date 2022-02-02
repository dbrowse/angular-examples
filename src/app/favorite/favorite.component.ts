import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  //input is decorator to marking fields and properties as
  @Input('isFavorite') isSelected!: boolean;
  @Output() change = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  onClick() {
    this.isSelected = !this.isSelected;
    //rise event form the event emiitter.
    //means notify others that something happens
    this.change.emit();
  }
}
