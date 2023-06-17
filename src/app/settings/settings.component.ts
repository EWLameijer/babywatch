import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { BabywatchService } from '../babywatch.service';
import { DeleteTimelineDialogComponent } from '../delete-timeline-dialog/delete-timeline-dialog.component';

@Component({
  selector: 'bw-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  constructor(private _babyService: BabywatchService, private _snackBar: MatSnackBar, private _dialog: MatDialog) { }

  get babyName() { return this._babyService.babyName; }

  set babyName(name: string) {
    this._babyService.babyName = name?.trim();
    this._snackBar.open("De babynaam is veranderd.", '', { duration: 2000 });
  }

  clearTimeLine() {
    const dialogRef = this._dialog.open(DeleteTimelineDialogComponent, {
      width: '80%', maxWidth: '450px',
      data: this._babyService.babyName
    }
    );
    dialogRef.afterClosed().subscribe(result => { if (result === true) this._babyService.clearTimeline(); });
  }
}
