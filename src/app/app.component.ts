import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directive';
  public name:string="NSEC";
  public id:number=1810;
  
  show=false;
  value=false;
  value_check=true;
   myVar:string="1";
   myclick(n:any){
  console.log("button clicked");
  console.log("name of the input fieled is:-"+n);
  // public user_info:any=[
  //   {'name':'Rupam' ,'Course':'Angular','fees':14500},
  //   {'name':'Swaraj' ,'Course':'React','fees':14500},
  //   {'name':'Anjan' ,'Course':'Angular','fees':14500},
  //   {'name':'Sourav' ,'Course':'React','fees':14500},
  //   {'name':'Akash' ,'Course':'DOT.net','fees':14500},
  // ];
}
}