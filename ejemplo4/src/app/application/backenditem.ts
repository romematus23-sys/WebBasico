import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable, timeout, timer } from 'rxjs';
import { Perros} from '../domain/entities';

@Service()
export class Backenditem {
    private _http = inject(HttpClient);
    private _apiURL= "http://40.74.249.41/perros";

    getPerrosFromAPI():Observable<Perros[]>{
        
        return this._http.get<Perros[]>(this._apiURL).pipe(timeout(1500));

    }
}
