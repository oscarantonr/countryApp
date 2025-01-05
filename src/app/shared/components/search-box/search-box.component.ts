import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'shared-search-box',
  standalone: false,

  templateUrl: './search-box.component.html'
})

export class SearchBoxComponent {

  @Input()
  public placeholderValue: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  emitValue(value: string): void {
    this.onValue.emit(value);
  }
}
