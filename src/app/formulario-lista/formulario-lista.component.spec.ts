import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioListaComponent } from './formulario-lista.component';

describe('FormularioListaComponent', () => {
  let component: FormularioListaComponent;
  let fixture: ComponentFixture<FormularioListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
