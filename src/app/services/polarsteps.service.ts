import { Injectable } from '@angular/core';

export interface TrackPoint {
  lat: number;
  lon: number;
  time?: string;
}

@Injectable({ providedIn: 'root' })
export class PolarstepsService {
  constructor() { }

  async parseGpxFile(file: File): Promise<TrackPoint[]> {
    const text = await file.text();
    return this.parseGpx(text);
  }

  parseGpx(xmlStr: string): TrackPoint[] {
    const parser = new DOMParser();
    const doc = parser.parseFromString(xmlStr, 'application/xml');
    const trkpts = Array.from(doc.querySelectorAll('trkpt'));
    const points: TrackPoint[] = trkpts.map(pt => {
      const lat = parseFloat(pt.getAttribute('lat') || '0');
      const lon = parseFloat(pt.getAttribute('lon') || '0');
      const timeEl = pt.querySelector('time');
      const time = timeEl ? timeEl.textContent || undefined : undefined;
      return { lat, lon, time };
    });
    return points;
  }

  // Stub for future Polarsteps API integration.
  // Implement OAuth/token-based sync here.
  async syncFromPolarsteps(token: string): Promise<TrackPoint[]> {
    throw new Error('Polarsteps API integration not implemented. Add API calls here.');
  }
}
