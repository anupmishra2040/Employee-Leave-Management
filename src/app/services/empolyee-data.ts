import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmpolyeeData {

apiURL=("http://localhost:3000/empolyee");
constructor(private http:HttpClient){}

saveuser(data:any){
return this.http.post(this.apiURL,data)
}
getEmployee(){
  return this.http.get<any>(this.apiURL)
}
currentStatus(id:number,  status:string){
 return this.http.patch(`${this.apiURL}/${id}`,{
  status:status
 })

}
}