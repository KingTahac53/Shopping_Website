import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
  }

  cardContent = [];

  constructor(private http: HttpClient){
    http.get('https://www.autonise.com/api/users/getCatalog').subscribe((res: any) => {
      console.log(res);
      for (let catalogI of res.catalog)
      {
        this.cardContent.push
        (
          {
            content: catalogI.description,
            title: catalogI.title,
            imageSource: 'https://www.autonise.com' + catalogI.icon,
            cost: catalogI.cost
          }
        );        
      }
    });
  }

}
