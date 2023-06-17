import { Component, OnInit } from '@angular/core';
import { BabywatchService, timelineEventTypes, TimelineEventType } from '../babywatch.service';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'bw-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  constructor(private _babyService: BabywatchService,
    private _bottomSheetRef: MatBottomSheetRef<AddEventComponent>) { }

  getBabyName = () => this._babyService.babyName;

  getEventTypes = () => timelineEventTypes;

  ngOnInit(): void {
  }

  addEvent(data: { eventType: TimelineEventType, comment: string}) {
    this._babyService.addTimelineEvent({
      date: new Date(),
      eventType: data.eventType,
      comment: data.comment
    });
    this._bottomSheetRef.dismiss();
  }

}
