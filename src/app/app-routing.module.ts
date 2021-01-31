import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'portfolio',
    loadChildren: () => import('./views/portfolio/portfolio.module').then(m => m.PortfolioModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./views/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: '**',
    redirectTo: 'blog',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'blog',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
