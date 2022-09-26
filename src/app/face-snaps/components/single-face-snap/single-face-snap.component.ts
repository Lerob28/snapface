import { Component, OnInit} from '@angular/core';
import { FaceSnapService } from '../../../core/services/face-snap-service';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!: FaceSnap;
  faceSnap$!: Observable<FaceSnap>;
  constructor(private faceSnapService: FaceSnapService, private route: ActivatedRoute){}

  ngOnInit(): void {
    const faceSnapId = +this.route.snapshot.params['id'];
    // this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
    this.faceSnap$ = this.faceSnapService.httpgetFaceSnapById(faceSnapId);
  }

  onAddSnap(faceSnapId: number) {
    this.faceSnap$ = this.faceSnapService.SnapById(faceSnapId, true).pipe(
      tap( () => {
        this.faceSnap$ = this.faceSnapService.httpgetFaceSnapById(faceSnapId)
      })
    );
  }

  onRemSnap(faceSnapId: number) {
    this.faceSnap$ = this.faceSnapService.SnapById(faceSnapId, false).pipe(
      tap( () => {
        this.faceSnap$ = this.faceSnapService.httpgetFaceSnapById(faceSnapId)
      })
    );
  }

}
