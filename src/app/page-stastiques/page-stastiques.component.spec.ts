import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStastiquesComponent } from './page-stastiques.component';

describe('PageStastiquesComponent', () => {
  let component: PageStastiquesComponent;
  let fixture: ComponentFixture<PageStastiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageStastiquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStastiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
