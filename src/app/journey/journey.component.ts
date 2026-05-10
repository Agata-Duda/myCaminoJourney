import { Component } from '@angular/core';
import { PolarstepsService, TrackPoint } from '../services/polarsteps.service';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css']
})
export class JourneyComponent {
  track: TrackPoint[] = [];
  loading = false;
  error: string | null = null;

  constructor(private polarsteps: PolarstepsService) { }

  async onGpxSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) { return; }
    const file = input.files[0];
    this.loading = true;
    this.error = null;
    try {
      this.track = await this.polarsteps.parseGpxFile(file);
    } catch (e) {
      this.error = String(e);
    } finally {
      this.loading = false;
    }
  }
}
