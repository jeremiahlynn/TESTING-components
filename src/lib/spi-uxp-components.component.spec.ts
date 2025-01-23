import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiUxpComponentsComponent } from './spi-uxp-components.component';

describe('SpiUxpComponentsComponent', () => {
  let component: SpiUxpComponentsComponent;
  let fixture: ComponentFixture<SpiUxpComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpiUxpComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpiUxpComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
