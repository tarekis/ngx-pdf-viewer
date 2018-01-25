import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPdfViewerComponent } from './ngx-pdf-viewer.component';

describe('NgxPdfViewerComponent', () => {
  let component: NgxPdfViewerComponent;
  let fixture: ComponentFixture<NgxPdfViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxPdfViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPdfViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
