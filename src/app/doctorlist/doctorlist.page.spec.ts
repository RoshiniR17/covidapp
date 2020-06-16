import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoctorlistPage } from './doctorlist.page';

describe('DoctorlistPage', () => {
  let component: DoctorlistPage;
  let fixture: ComponentFixture<DoctorlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
