import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateTemplateComponent } from './private-template.component';

describe('PrivateTemplateComponent', () => {
  let component: PrivateTemplateComponent;
  let fixture: ComponentFixture<PrivateTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrivateTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrivateTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
