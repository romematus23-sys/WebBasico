import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable, timeout, timer } from 'rxjs';
import { Arma } from '../domain/entities';

@Service()
export class Backendguns {
    private _http = inject(HttpClient);
    private _apiURL= "http://40.74.249.41/guns";

    getArmaFromAPI():Observable<Arma[]>{
        
        return this._http.get<Arma[]>(this._apiURL).pipe(timeout(1500));

    }
}
