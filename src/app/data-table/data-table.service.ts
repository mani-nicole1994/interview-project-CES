
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class DataTableService {

  constructor(private _http: HttpClient) { }

  getTableData() {
    return this._http.get('https://cors-anywhere.herokuapp.com/' + environment.tableData);
  }

  //getTableData() {
  //  //this._http.get('https://cors-anywhere.herokuapp.com/' + environment.tableMetaData).subscribe(result => console.log(result));
  //  return this._http.get('https://cors-anywhere.herokuapp.com/' + environment.tableMetaData);
  //}

}
