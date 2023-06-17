import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BabywatchService {
  private _babyName?: string;
  private _timeline: TimelineEvent[] = [];

  constructor() {
    this.generateFakeEvents();
  }

  get babyName() { return this._babyName ?? "de baby"; }

  set babyName(name: string) { if (name && name.length > 0) this._babyName = name; }

  generateFakeEvents() {
    for (let i = 0; i < 4; i++) {
      this.addRandomTimelineEvent();
    }
  }

  addTimelineEvent(newEvent: TimelineEvent) {
    // unshift?
    this._timeline = [newEvent, ...this._timeline];
  }

  addRandomTimelineEvent() {
    const eventType =
      timelineEventTypes[Math.floor(Math.random() * timelineEventTypes.length)];
    this.addTimelineEvent({
      eventType: eventType,
      date: new Date()
    });
  }

  clearTimeline() {
    this._timeline.length = 0;
  }

  get timeline(): TimelineEvent[] {
    return this._timeline;
  }
}

export interface TimelineEvent {
  eventType: TimelineEventType;
  date: Date;
  comment?: string;
}

export interface TimelineEventType {
  name: string;
  title: string;
}

export const timelineEventTypes: TimelineEventType[] = [
  {
    name: 'sleep',
    title: 'heeft geslapen'
  },
  {
    name: 'diaper',
    title: 'is verschoond'
  },
  {
    name: 'feed',
    title: 'heeft gedronken'
  },
  {
    name: 'bath',
    title: 'ging in bad'
  }
];
