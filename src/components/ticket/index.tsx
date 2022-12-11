import React, {forwardRef} from "react";

import ticketBG from 'assets/CHAN_Ticket.jpg'

import './ticket.css'

export const Ticket = forwardRef((props, ref) => (
    //@ts-ignore
    <div className="ticket" ref={ref}>
       <img src={ticketBG} alt="ticket" />
       <div className="ticket__content">
       <div className="ticket__date">
        13/01/2022
       </div>
       {/* <div className="ticket__door">
        16:00
       </div>
       <div className="ticket__start">
        20:00
       </div>
       <div className="ticket__stadium">
        BARAKI
       </div>
       <div className="ticket__match">
        ALGERIA - NIGER
       </div>
       <div className="ticket__category">
        V15
       </div>
       <div className="ticket__price">
        700.00DA
       </div> */}
       </div>
    </div>
));

