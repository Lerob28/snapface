import { Component, Input} from '@angular/core';
import { FaceSnapService } from '../services/face-snap-service';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {

  @Input() faceSnap!: FaceSnap

  constructor( private faceSnapService: FaceSnapService){}

  onAddSnap() {
    this.faceSnapService.SnapById(this.faceSnap.id, true);
  }

  onRemSnap() {
    this.faceSnapService.SnapById(this.faceSnap.id, false);
  }
}