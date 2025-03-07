import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelpDesk } from '../../interfaces/ticket.interface';
import { TicketsService } from '../../services/tickets-service.service';
import { take } from 'rxjs';


@Component({
  selector: 'details-page',
  templateUrl: './details-page.component.html',
  styles: `:host {min-width: 221px;}`,
  standalone: false
})
export class DetailsPageComponent implements OnInit{
  public idParams: string | null = ''
  public idTicket: number = 0;
  public ticket!: HelpDesk | null
  public botonVisible: boolean = false;

  constructor(private route: ActivatedRoute, private ticketService: TicketsService ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.idParams = params.get('id')
    this.idTicket= Number(this.idParams);
    //console.log('ID Ticket desde la ruta: ', this.idTicket)
    this.obtenerTicket()
    })
  }

  obtenerTicket():void {
    if ( !this.idTicket ) return;

    this.ticketService.getTicketById(this.idTicket).pipe(take(1))
      .subscribe(
        return_ticket => {
          if (!return_ticket) return;
          this.ticket = return_ticket
        });
  }

}

