import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: string[] = [];

  ngOnInit() {
    const stored = localStorage.getItem('camino_photos');
    this.photos = stored ? JSON.parse(stored) : [];
  }

  onFilesSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files) { return; }
    Array.from(input.files).forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          this.photos.push(reader.result);
          localStorage.setItem('camino_photos', JSON.stringify(this.photos));
        }
      };
      reader.readAsDataURL(file);
    });
    input.value = '';
  }

  remove(index: number) {
    this.photos.splice(index, 1);
    localStorage.setItem('camino_photos', JSON.stringify(this.photos));
  }
}
