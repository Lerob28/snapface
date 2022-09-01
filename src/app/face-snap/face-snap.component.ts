import { Component, Input} from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {

  @Input() faceSnap!: FaceSnap

  onAddSnap() {
    this.faceSnap.snaps++;
  }

  onRemSnap() {
    this.faceSnap.snaps--;
  }
}