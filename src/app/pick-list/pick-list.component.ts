import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-pick-list',
  templateUrl: './pick-list.component.html',
  styleUrls: ['./pick-list.component.less']
})
export class PickListComponent implements OnInit {
  material = true;
  primeng = true;

  constructor() { }

  ngOnInit() {
  }

  available = [
    'Custom 3',
    'Custom 4',
    'Custom 5',
    'Custom 6',
    'Custom 7',
    'Custom 8',
    'Custom 9',
    'Custom 10',
    'Custom 11',
    'Custom 12',
    'Custom 13',
    'Custom 14',
    'Custom 15',
    'Custom 16',
    'Custom 17',
    'Custom 18'
  ];

  availableObjects = [
    { 'value': 'Custom 3' },
    { 'value': 'Custom 4' },
    { 'value': 'Custom 5' },
    { 'value': 'Custom 6' },
    { 'value': 'Custom 7' },
    { 'value': 'Custom 8' },
    { 'value': 'Custom 9' },
    { 'value': 'Custom 10' },
    { 'value': 'Custom 11' },
    { 'value': 'Custom 12' },
    { 'value': 'Custom 13' },
    { 'value': 'Custom 14' },
    { 'value': 'Custom 15' },
    { 'value': 'Custom 16' },
    { 'value': 'Custom 17' },
    { 'value': 'Custom 18' }
  ];

  configured = [
    'Title',
    'Custom 1',
    'Custom 2',
    'Custom 29',
    'Custom 30'
  ];

  configuredObjects = [
    { 'value': 'Title' },
    { 'value': 'Custom 1' },
    { 'value': 'Custom 2' },
    { 'value': 'Custom 29' },
    { 'value': 'Custom 30' }
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
