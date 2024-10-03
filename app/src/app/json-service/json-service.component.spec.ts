import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonServiceComponent } from './json-service.component';

describe('JsonServiceComponent', () => {
  let component: JsonServiceComponent;
  let fixture: ComponentFixture<JsonServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JsonServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
