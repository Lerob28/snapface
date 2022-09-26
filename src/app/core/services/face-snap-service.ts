import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { map, Observable, switchMap } from "rxjs";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapService {

    constructor( private http: HttpClient) { }

    httpgetAllFaceSnap(): Observable<FaceSnap[]> {
        return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
    }
    
    
    httpgetFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
      return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`)
    }

    SnapById(facesnapId: number, SnapType: boolean): Observable<FaceSnap> {
      return this.httpgetFaceSnapById(facesnapId).pipe(
        map( faceSnap => ({
          ...faceSnap,
          snaps: faceSnap.snaps + (SnapType === true ? 1 : -1) 
        })),
        switchMap( updatedfaceSnap => this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${facesnapId}`, updatedfaceSnap) )
      )
        
    }

    addFaceSnap(formValue: {title: string, description: string, imageUrl: string, location?: string}): Observable<FaceSnap> {
      return this.httpgetAllFaceSnap().pipe(
        map(faceSnaps => [...faceSnaps].sort((a:FaceSnap, b:FaceSnap) => a.id - b.id)),
        map(SortedfaceSnaps =>  SortedfaceSnaps[SortedfaceSnaps.length -1]),
        map(LastfaceSnap => ({
          ...formValue,
          snaps: 0,
          createdDate: new Date(),
          id: LastfaceSnap.id + 1
        })),
        switchMap(newfaceSnap => this.http.post<FaceSnap>(`http://localhost:3000/facesnaps`, newfaceSnap))
      )
    }

}