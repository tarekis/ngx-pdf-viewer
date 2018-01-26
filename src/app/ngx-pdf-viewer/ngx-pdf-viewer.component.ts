import { Component, Input, OnInit } from '@angular/core';
import { OnChanges, SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';

// Import viewer
import 'pdfjs-dist/web/pdf_viewer.js';
// Side-import for webpack bundled worker
import * as pdfjsLib from 'pdfjs-dist/webpack';
// Set worker
pdfjsLib.PDFJS.workerSrc = 'pdfjs-dist/build/pdf.worker.entry.js';

@Component({
    selector: 'app-ngx-pdf-viewer',
    templateUrl: './ngx-pdf-viewer.component.html',
    styleUrls: ['./ngx-pdf-viewer.component.scss']
})
export class NgxPdfViewerComponent implements OnInit, OnChanges {

    @Input()
    private pdfURL = '/assets/split_Dansani_Zaro_2017 (1) (1).pdf';

    private eventBus = new PDFJS.EventBus();

    renderPDF() {
        const container = document.getElementById('viewerContainer');

        const pdfViewer = new PDFJS.PDFViewer({
            container,
        });

        // (Optionally) enable find controller.
        const pdfFindController = new PDFJS.PDFFindController({
            pdfViewer
        });
        pdfViewer.setFindController(pdfFindController);

        container.addEventListener('pagesinit', () => {
            // We can use pdfViewer now, e.g. let's change default scale.
            pdfViewer.currentScaleValue = 'page-width';
        });

        // Loading document.
        PDFJS.getDocument(this.pdfURL).then(pdfDocument => {
            // Document loaded, specifying document for the viewer and
            // the (optional) linkService.
            pdfViewer.setDocument(pdfDocument);
            console.log(pdfjsLib);
            console.log(PDFJS);
            console.log(PDFJS.EventBus);
            console.log(this.eventBus);
            this.eventBus.dispatch('nextpage');
        });
    }

    // TODO remove
    ngOnInit() {
        this.renderPDF();
    }

    ngOnChanges(changes: SimpleChanges) {
        if ('pdfURL' in changes) {

        }
    }
}
