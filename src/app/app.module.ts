import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimelineComponent } from './timeline/timeline.component';
import { SettingsComponent } from './settings/settings.component';

import { LOCALE_ID } from '@angular/core';
import nl from '@angular/common/locales/nl';
import { registerLocaleData } from '@angular/common';
import { AddEventComponent } from './add-event/add-event.component';
import { DeleteTimelineDialogComponent } from './delete-timeline-dialog/delete-timeline-dialog.component';
registerLocaleData(nl);

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    SettingsComponent,
    AddEventComponent,
    DeleteTimelineDialogComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: "nl-nl" }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private _iconRegistry: MatIconRegistry, private _sanitizer: DomSanitizer) {
    for (const iconName of ["feed", "sleep", "bath", "diaper"]) {
      this._iconRegistry.addSvgIcon(iconName, this._sanitizer.bypassSecurityTrustResourceUrl(`../assets/${iconName}.svg`));
      console.log(`iconName`);
    }
  }
}
