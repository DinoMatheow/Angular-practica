import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Value, WhoBiographies } from '../interfaces/bio.interface';

const baseUrl = 'https://www.who.int/api/news/biographies';

interface BioRequestParams {
  $top: number;
  query?: string;
}

@Injectable({providedIn: 'root'})
export class BiographieService {
  private http = inject(HttpClient);
  private biographies = signal<Value[]>([]);

  getBiographies(params: BioRequestParams): Observable<Value[]> {
    return this.http.get<WhoBiographies>(baseUrl, {
      params: {
        $top: params.$top,
        ...(params.query && { query: params.query })
      }
    }).pipe(
      map(response => response.value)
    );
  }
}
