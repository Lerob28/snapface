import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnapService } from '../../../core/services/face-snap-service';
import { FaceSnap } from '../../../core/models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {

  @Input() faceSnap!: FaceSnap

  constructor( private faceSnapService: FaceSnapService, private router: Router){}

  onAddSnap() {
    this.faceSnapService.SnapById(this.faceSnap.id, true);
  }

  onRemSnap() {
    this.faceSnapService.SnapById(this.faceSnap.id, false);
  }

  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnap/${this.faceSnap.id}`)
  }
}