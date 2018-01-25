import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPdfViewerComponent } from './ngx-pdf-viewer.component';

const routes: Routes = [
    {
        path: '',
        component: NgxPdfViewerComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
