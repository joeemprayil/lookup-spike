import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import * as _ from 'underscore';

@Component({
  selector: 'app-pick-list',
  templateUrl: './pick-list.component.html',
  styleUrls: ['./pick-list.component.less']
})
export class PickListComponent implements OnInit {
  material = false;
  primeng = false;
  custom = true;
  private selectedItemIndex;
  private sourceItemIndex;
  private timer;
  private lockTimer;
  private touchduration = 400

  private currentY: number;
  private startY: number;
  private finalY: number;
  private currentTarget;


  constructor() { }

  ngOnInit() {
  }

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

  configuredObjects = [
    { 'value': 'Title' },
    { 'value': 'Custom 1' },
    { 'value': 'Custom 2' },
    { 'value': 'Custom 29' },
    { 'value': 'Custom 30' }
  ];

  onTouchStart(event) {
    event.preventDefault();
    if(this.lockTimer){
      return;
    }
    this.timer = setTimeout(() => this.onDragstart(event), this.touchduration);
    this.lockTimer = true;
  }

  onTouchEnd(event) {
    if (this.timer){
      clearTimeout(this.timer);
      this.lockTimer = false;
    }
    this.onDragend(event);
  }

  onDragstartMouse(event) {
    this.selectedItemIndex = this.getItemIndex(event.target.innerText);
    this.setDragStartClass(event.target);
    this.startY = event.clientY;
    this.currentTarget = event.target;
  }

  onDragoverMouse(event) {
    this.sourceItemIndex = this.getItemIndex(event.target.innerText);
  }

  onDragendMouse(event) {
    this.moveItemsInArray(this.configuredObjects, this.selectedItemIndex, this.sourceItemIndex);
    this.selectedItemIndex = this.sourceItemIndex = null;
    this.resetTranslate(this.currentTarget);
    this.clearDragStartClass(this.currentTarget);
    this.currentTarget = null;
  }

  onDragstart(e) {
    this.startY = e.touches[0].clientY;
    this.currentTarget = e.target;
    this.selectedItemIndex = this.getItemIndex(e.target.innerText);
    this.setDragStartClass(this.currentTarget);
  }

  onDragend(event) {
    if (!this.currentTarget) { return; }
    let yDelta = this.finalY - this.startY;
    let moveIndex: number = this.calculateIndex(yDelta);
    this.moveItemsInArray(this.configuredObjects, this.selectedItemIndex, moveIndex);
    this.resetTranslate(this.currentTarget);
    this.clearDragStartClass(this.currentTarget);
    this.currentTarget = null;
  }

  onDrag(e) {
    if (this.currentTarget !== e.currentTarget) { return; }
    e.preventDefault();

    this.currentY = e.touches[0].clientY - this.startY;
    this.finalY = e.touches[0].clientY;

    this.setTranslate(0, this.currentY, e.currentTarget);
  }

  setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  }

  setDragStartClass(el) {
    el.classList.add("on-drag-start");
  }

  clearDragStartClass(el) {
    el.classList.remove("on-drag-start");
  }

  resetTranslate(el) {
    el.style.transform = "translate3d(0px, 0px, 0)";
  }

  getItemIndex(value) {
    return _.findIndex(this.configuredObjects, (item) => item.value === value);
  }

  calculateIndex(yChange) {
    let indexChange: number = Math.round(yChange/35);
    return this.selectedItemIndex + indexChange;
  }

  moveItemsInArray(array, from, to) {
    var element = array[from];
    array.splice(from, 1);
    array.splice(to, 0, element);
  }

  // for angular material
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.configuredObjects, event.previousIndex, event.currentIndex);
  }

}
