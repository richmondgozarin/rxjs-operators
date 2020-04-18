import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopTenOfFromComponent } from './components/top-ten-of-from/top-ten-of-from.component';
import { TopNineMapTapComponent } from './components/top-nine-map-tap/top-nine-map-tap.component';
import { TopEightShareComponent } from './components/top-eight-share/top-eight-share.component';
import { TopSevenSwitchMapComponent } from './components/top-seven-switch-map/top-seven-switch-map.component';
import { TopSixDebounceTimeComponent } from './components/top-six-debounce-time/top-six-debounce-time.component';
import { TopFourTakeComponent } from './components/top-four-take/top-four-take.component';
import { TopThreeMergeMapComponent } from './components/top-three-merge-map/top-three-merge-map.component';
import { TopTwoConcatComponent } from './components/top-two-concat/top-two-concat.component';
import { TopOneForkjoinComponent } from './components/top-one-forkjoin/top-one-forkjoin.component';


const routes: Routes = [
    {
        path: 'top-10',
        component: TopTenOfFromComponent,
    },
    {
        path: 'top-9',
        component: TopNineMapTapComponent,
    },
    {
        path: 'top-8',
        component: TopEightShareComponent,
    },
    {
        path: 'top-7',
        component: TopSevenSwitchMapComponent,
    },
    {
        path: 'top-6',
        component: TopSixDebounceTimeComponent,
    },
    {
        path: 'top-4',
        component: TopFourTakeComponent,
    },
    {
        path: 'top-3',
        component: TopThreeMergeMapComponent,
    },
    {
        path: 'top-2',
        component: TopTwoConcatComponent,
    },
    {
        path: 'top-1',
        component: TopOneForkjoinComponent,
    },
    {
        path: '',
        redirectTo: '/top-10',
        pathMatch: 'full',
    },
    { path: '**', component: TopTenOfFromComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
