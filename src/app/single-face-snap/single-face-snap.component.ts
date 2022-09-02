import { Component, OnInit} from '@angular/core';
import { FaceSnapService } from '../services/face-snap-service';
import { FaceSnap } from '../face-snap/models/face-snap.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!: FaceSnap;
  constructor(private faceSnapService: FaceSnapService, private route: ActivatedRoute){}

  ngOnInit(): void {
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

  onAddSnap() {
    this.faceSnapService.SnapById(this.faceSnap.id, true);
  }

  onRemSnap() {
    this.faceSnapService.SnapById(this.faceSnap.id, false);
  }

}
