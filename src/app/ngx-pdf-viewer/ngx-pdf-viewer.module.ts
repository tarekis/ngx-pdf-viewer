import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './ngx-pdf-viewer-routing.module';
import { NgxPdfViewerComponent } from './ngx-pdf-viewer.component';
import { PDFJSStatic } from 'pdfjs-dist';
import * as pdfjsLib from 'pdfjs-dist/webpack';
// Set worker
pdfjsLib.PDFJS.workerSrc = 'pdfjs-dist/build/pdf.worker.entry.js';

declare global {
  const PDFJS: PDFJSStatic;
}

export { PDFJSStatic, PDFDocumentProxy, PDFViewerParams, PDFPageProxy, PDFSource, PDFProgressData, PDFPromise } from 'pdfjs-dist';

@NgModule({
    declarations: [NgxPdfViewerComponent],
    exports: [NgxPdfViewerComponent],
    imports: [
        CommonModule,
        routing
    ],
})
export class NgxPdfViewerModule { }