import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { LastView } from './model/last-view';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private url = `${environment.lastViewsApiUrl}`;
  title = 'Vistos recentemente';

  displayedColumns = [
    'No.',
    'Identificador',
    'Tipo',
    'Analista',
    'Status',
    'Ação',
  ];

  last_view: LastView[] = [];

  classStatus: String[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getLastViews();
  }

  getLastViews() {
    this.httpClient
      .get<LastView[]>(`${this.url}`)
      .subscribe((dados: LastView[]) => {
        this.last_view = dados;

        for (let index = 0; index < this.last_view.length; index++) {
          const element = this.last_view[index];

          switch (element.status) {
            case 'Concluída':
              this.classStatus[index] = 'status_box--completed';
              break;
            case 'Em andamento':
              this.classStatus[index] = 'status_box--inProgress';
              break;
            case 'Cancelada':
              this.classStatus[index] = 'status_box--canceled';
              break;
            default:
              break;
          }
        }
      });
  }

  onClick() {
    alert('Click');
  }
}
