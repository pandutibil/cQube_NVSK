import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent implements OnInit, OnChanges {

  @Input() filters: any = [];
  @Input() resetOthers = true;

  @Output() filtersUpdated = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  onSelectOption(event: any, ind: number): void {
    if (this.resetOthers) {
      this.filters = this.filters.map((filter: any, filterInd: number) => {
        if (filterInd > ind) {
          filter.options = [];
          filter.value = null;
        }

        return filter;
      });
    }

    this.filtersUpdated.emit(this.filters);
  }

}