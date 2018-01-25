import { Component, OnInit, HostBinding } from '@angular/core';
// import * as pdfjsLib from 'pdfjs-dist';
import 'pdfjs-dist/web/pdf_viewer.js';

@Component({
  selector: 'app-ngx-pdf-viewer',
  templateUrl: './ngx-pdf-viewer.component.html',
  styleUrls: ['./ngx-pdf-viewer.component.css']
})
export class NgxPdfViewerComponent implements OnInit {

    @HostBinding('class.loadingInProgress')
    loadingInProgress = true;
    constructor() { }

    ngOnInit() {
        if (!PDFJS.PDFViewer || !PDFJS.getDocument) {
        alert('Please build the pdfjs-dist library using\n' +
                '  `gulp dist-install`');
        }

        const DEFAULT_URL = '/assets/compressed.tracemonkey-pldi-09.pdf';
        const SEARCH_FOR = ''; // try 'Mozilla';

        const container = document.getElementById('viewerContainer');

        // (Optionally) enable hyperlinks within PDF files.
        const pdfLinkService = new PDFJS.PDFLinkService();

        const pdfViewer = new PDFJS.PDFViewer({
        container: container,
        linkService: pdfLinkService,
        });
        pdfLinkService.setViewer(pdfViewer);

        // (Optionally) enable find controller.
        const pdfFindController = new PDFJS.PDFFindController({
        pdfViewer: pdfViewer
        });
        pdfViewer.setFindController(pdfFindController);

        container.addEventListener('pagesinit', function () {
        // We can use pdfViewer now, e.g. let's change default scale.
        pdfViewer.currentScaleValue = 'page-width';

        if (SEARCH_FOR) { // We can try search for things
            pdfFindController.executeCommand('find', {query: SEARCH_FOR});
        }
        });

        // Loading document.
        PDFJS.getDocument(DEFAULT_URL).then(function (pdfDocument) {
        // Document loaded, specifying document for the viewer and
        // the (optional) linkService.
        pdfViewer.setDocument(pdfDocument);

        pdfLinkService.setDocument(pdfDocument, null);
        });

    }
}
