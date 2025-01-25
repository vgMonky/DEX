import { Routes } from '@angular/router';
import { HomeComponent } from '@app/pages/home.component';
import { TradeComponent } from '@app/pages/trade.component';
import { ExploreComponent } from '@app/pages/explore.component';
import { PoolComponent } from '@app/pages/pool.component';

export const routes: Routes =  [
  // Navigate to 'home' component by default (empty path)
  { path: '', component: HomeComponent },
  
  { path: 'trade', component: TradeComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'pool', component: PoolComponent },
];
