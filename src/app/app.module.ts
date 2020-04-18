import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopTenOfFromComponent } from './components/top-ten-of-from/top-ten-of-from.component';
import { TopNineMapTapComponent } from './components/top-nine-map-tap/top-nine-map-tap.component';
import { TopEightShareComponent } from './components/top-eight-share/top-eight-share.component';
import { HttpClientModule } from '@angular/common/http';
import { TopSevenSwitchMapComponent } from './components/top-seven-switch-map/top-seven-switch-map.component';
import { TopSixDebounceTimeComponent } from './components/top-six-debounce-time/top-six-debounce-time.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopFourTakeComponent } from './components/top-four-take/top-four-take.component';
import { TopThreeMergeMapComponent } from './components/top-three-merge-map/top-three-merge-map.component';
import { TopTwoConcatComponent } from './components/top-two-concat/top-two-concat.component';
import { TopOneForkjoinComponent } from './components/top-one-forkjoin/top-one-forkjoin.component';

@NgModule({
    declarations: [
        AppComponent,
        TopTenOfFromComponent,
        TopNineMapTapComponent,
        TopEightShareComponent,
        TopSevenSwitchMapComponent,
        TopSixDebounceTimeComponent,
        TopFourTakeComponent,
        TopThreeMergeMapComponent,
        TopTwoConcatComponent,
        TopOneForkjoinComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        NgbModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
