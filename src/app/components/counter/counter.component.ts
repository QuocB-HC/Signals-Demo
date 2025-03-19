import { Component, computed, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counterValue = signal(0);
  doubleCounterValue = computed(() => this.counterValue() * 2)
  
  showCounter = signal(false);
  conditionalCounter = computed(() => {
    if (this.showCounter()) {
      return `Couter Value: ${this.counterValue()}.`;
    } else {
      return '';
    }
  });

  showDoubleCounter = signal(false);
  conditionalDoubleCounter = computed(() => {
    if (this.showDoubleCounter()) {
      return `Double Counter Value: ${this.doubleCounterValue()}.`;
    } else {
      return '';
    }
  });

  constructor() {
    effect(() => {
      console.log(`Counter changed: ${this.counterValue()}`);
      console.log(`Counter changed: ${this.doubleCounterValue()}`);
    });
  }

  Increment() {
    this.counterValue.update((val) => val + 1); 
    // this.counterValue.set(this.counterValue() + 1);
  }

  Decrement() {
    this.counterValue.update((val) => val - 1); 
    // this.counterValue.set(this.counterValue() - 1);
  }

  Reset() {
    this.counterValue.set(0);
  }

  ToggleCounter() {
    this.showCounter.update((val) => !val);
  }

  ToggleDoubleCounter() {
    this.showDoubleCounter.update((val) => !val);
  }
}
