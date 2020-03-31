import { Component, OnInit,ViewChild} from '@angular/core';
import { MatTableDataSource,MatPaginator} from '@angular/material';
import { HttpClient} from '@angular/common/http';

export interface Applications {
  Country: string;
  Total: string;
  NewCases:string;
  TotalDeaths:string;
  NewDeaths:number;
  TotalRecovered:string;
  ActiveCases:string;
  SeriousCritical:string;
  TotCases1Mpop:string;
  Deaths1Mpop:number;
  Reported1stcase:string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  MyDataSource: any;  
  displayedColumns = ['Country', 'Total','NewCases','TotalDeaths','NewDeaths','TotalRecovered','ActiveCases','SeriousCritical','TotCases1Mpop','Deaths1Mpop','Reported1stcase'];
  public apps=[];
 

  constructor(private http: HttpClient) { }
    @ViewChild(MatPaginator) paginator: MatPaginator;  

  ngOnInit() {  
    this.RenderDataTable();  
  }
   RenderDataTable() {
  this.http.get('/CoronaStatus').subscribe(data => {
  console.log(data)
  this.apps.push(data);
  this.MyDataSource = new MatTableDataSource();
  this.MyDataSource.data = data; 
          this.MyDataSource.paginator = this.paginator;  
 
   console.log(this.MyDataSource.data);  
    }, error => console.error(error));
  }

}

