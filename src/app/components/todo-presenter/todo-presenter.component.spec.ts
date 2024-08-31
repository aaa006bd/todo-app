import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoPresenterComponent } from './todo-presenter.component';

describe('TodoPresenterComponent', () => {
  let component: TodoPresenterComponent;
  let fixture: ComponentFixture<TodoPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoPresenterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
