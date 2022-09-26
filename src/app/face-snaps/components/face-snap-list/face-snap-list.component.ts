import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, tap, take, Subject, takeUntil, Observable } from 'rxjs';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapService } from '../../../core/services/face-snap-service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
// export class FaceSnapListComponent implements OnInit, OnDestroy {
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];
  faceSnaps$!: Observable<FaceSnap[]>;

  constructor(private FaceSnapService: FaceSnapService) { }

  ngOnInit(): void {
    this.faceSnaps$ = this.FaceSnapService.httpgetAllFaceSnap();
  }


}
