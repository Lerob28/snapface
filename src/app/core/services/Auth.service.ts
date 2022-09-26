import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class AuthService {

 private Token!: string;

 login() {
    this.Token = '$f&d-YU%%kv**p__FakeToken';
 }

 getToken(): string {
    return this.Token
 }
}