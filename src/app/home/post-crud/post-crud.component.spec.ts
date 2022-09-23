import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCrudComponent } from './post-crud.component';

describe('PostCrudComponent', () => {
  let component: PostCrudComponent;
  let fixture: ComponentFixture<PostCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
