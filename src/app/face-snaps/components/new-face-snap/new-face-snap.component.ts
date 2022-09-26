import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapService } from '../../../core/services/face-snap-service';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit {

  snapForm!: FormGroup
  faceSnapPreview$!: Observable<FaceSnap>;
  UrlRegex!: RegExp;

  constructor( private formbuilder: FormBuilder, private facesnapservice: FaceSnapService, private router: Router) { }

  ngOnInit(): void {
    this.UrlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.snapForm = this.formbuilder.group(
    {
      title: [null, Validators.required],
      description: [null, Validators.required],
      imageUrl: [null, [Validators.required, Validators.pattern(this.UrlRegex)]],
      location: [null]
    },
    {
      updateOn: 'blur'
    });

    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createdDate: new Date(),
        id: 0,
        snaps: 0
      }))
    )
  }

  onSubmitForm(): void {
    this.faceSnapPreview$ = this.facesnapservice.addFaceSnap(this.snapForm.value).pipe(
      tap(() => {
        this.router.navigateByUrl('/facesnap');
      })
    )
  }


}
