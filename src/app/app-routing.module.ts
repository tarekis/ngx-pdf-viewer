import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
const routes: Route[] = [
    {
        path: 'pdf',
        loadChildren: './ngx-pdf-viewer/ngx-pdf-viewer.module#NgxPdfViewerModule'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
