import { ChangeDetectionStrategy, Component } from '@angular/core';

function pourcentageAttribute(value: number): number {
  if (value > 100) return 100;

  if (value < 0) return 0;

  return value;
}

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [],
  template: `
    <span id="ProgressLabel" class="sr-only">progress bar</span>
    <span
      role="progressbar"
      aria-labelledby="ProgressLabel"
      aria-valuenow="50"
      class="block rounded-full bg-gray-200">
      <span
        class="block h-4 rounded-full bg-indigo-600 text-center text-[10px]/4"
        style="width: 20%">
        <span class="font-bold text-white">20%</span>
      </span>
    </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-full',
  },
})
export class ProgressComponent {}
