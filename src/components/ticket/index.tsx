import React, {forwardRef} from "react";

import ticketBG from 'assets/CHAN_Ticket.jpg'

import './ticket.css'

export const Ticket = forwardRef((props, ref) => (
    //@ts-ignore
    <div className="ticket" ref={ref}>
       <img src={"https://firebasestorage.googleapis.com/v0/b/portfolio-dc68f.appspot.com/o/billet%20VIP-01.jpg?alt=media&token=3df3294b-3c3c-445d-b509-400a15a770c1"} alt="ticket" />
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

