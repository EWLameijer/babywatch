import { Component, OnInit } from '@angular/core';

import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { AddEventComponent } from '../add-event/add-event.component';
import { BabywatchService } from '../babywatch.service';

@Component({
  selector: 'bw-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  constructor(private _babyService: BabywatchService, private _bottomSheet: MatBottomSheet) { }

  getTimeLine = () => this._babyService.timeline;

  getBabyName = () => this._babyService.babyName || "de baby"

  ngOnInit(): void {
  }

  addEvent = () => this._bottomSheet.open(AddEventComponent);
}
