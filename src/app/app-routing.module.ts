import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './home/pages/inicio/inicio.component';
import { FooterComponent } from './home/footer/footer.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { PrmanualComponent } from './home/pages/prmanual/prmanual.component';

const routes: Routes = [

    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
      },

      {
        path: '404',
        component: ErrorPageComponent
      },
      {
        path: 'prmanual',
        component: PrmanualComponent
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
      },
      {
        path: 'gestor',
        loadChildren: () => import('./gestor/gestor.module').then(m => m.GestorModule),
      },
      
      
      
      
      {
        path: 'inicio',
        component: InicioComponent,
      },
      {
        path: 'footer',
        component: FooterComponent,
      },
     

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ preloadingStrategy:PreloadAllModules })],
  exports: [RouterModule]

  
  
})
export class AppRoutingModule { }
