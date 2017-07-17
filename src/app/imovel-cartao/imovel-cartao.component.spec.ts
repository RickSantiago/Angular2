import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImovelCartaoComponent } from './imovel-cartao.component';

describe('ImovelCartaoComponent', () => {
  let component: ImovelCartaoComponent;
  let fixture: ComponentFixture<ImovelCartaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImovelCartaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImovelCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
