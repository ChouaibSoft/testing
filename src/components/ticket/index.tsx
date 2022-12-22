import React, { forwardRef } from "react";
import Moment from "react-moment";

import QRCode from "react-qr-code";

import './ticket.css'

export const Ticket = forwardRef((props: any, ref) => 
     (
        (
            //@ts-ignore
            <div className="ticket" ref={ref}>
                {/* <img src={"https://firebasestorage.googleapis.com/v0/b/portfolio-dc68f.appspot.com/o/model%20billet%20vide.jpg?alt=media&token=1a4ef855-1899-4f8a-86bb-d7c17fe5de87"} alt="ticket" /> */}
                <div className="ticket__content">
                    <div className="wrapper">
                        <div className="content">
                            <div>
                                <strong>
                                    Date:
                                </strong>
                                <strong>
                                    Date:
                                </strong>
                            </div>
                            <div>
                                <p className="date">
                                    {
                                        props?.spectatorInfo?.dateMatch1?.slice(0, 10)
                                    }
                                </p>
                            </div>
                        </div>
                        <div className="content">
                            <div>
                                <strong>
                                    Ouverture des portes:
                                </strong>
                                <strong>
                                    Gates Open:
                                </strong>
                            </div>
                            <div>
                                <p>
                                    {
                                        props?.spectatorInfo?.dateOuverturePorte?.slice(11, 16)
                                    }
                                </p>
                            </div>
                        </div>
                        <div className="content">
                            <div>
                                <strong>
                                    Stade:
                                </strong>
                                <strong>
                                    Stadium:
                                </strong>
                            </div>
                            <div>
                                <p>{props?.spectatorInfo?.infrastructure}</p>
                            </div>
                        </div>
                    </div>

                    <div className="wrapper">
                        <div className="content">
                            <div>
                                <strong>
                                    Match:
                                </strong>
                            </div>
                            <div>
                                {
                                    props?.spectatorInfo?.match.includes('\n') ?
                                        <div className="match">
                                            <p>{props?.spectatorInfo?.match?.split('\n')[0]}</p>
                                            <p>{props?.spectatorInfo?.match?.split('\n')[1]}</p>
                                        </div>
                                        : <div className="match">
                                            <p>{props?.spectatorInfo?.match}</p>
                                        </div>
                                }

                            </div>
                        </div>
                        <div className="content">
                            <div>
                                <strong>
                                    Coup d'envoi:
                                </strong>
                                <strong>
                                    Kiff-of time:
                                </strong>
                            </div>
                            <div>
                                <p>
                                    {
                                        props?.spectatorInfo?.dateMatch1?.slice(11, 16)
                                    }                             </p>
                                <p>
                                    {
                                        props?.spectatorInfo?.dateMatch2?.slice(11, 16)
                                    }                             </p>

                            </div>
                        </div>
                    </div>


                    <div className="wrapper">
                        <div className="content">
                            <div>
                                <strong>
                                    Catégorie / Category:
                                </strong>
                                <strong>
                                    Prix / Price:
                                </strong>
                            </div>
                            <div>
                                <p>{props?.spectatorInfo?.zoneLibelle}</p>
                                <p>{props?.spectatorInfo?.prix}.00 DZD</p>
                            </div>
                        </div>
                        <div className="content">
                            <div>
                                <strong>
                                    Nom:
                                </strong>
                                <strong>
                                    Name:
                                </strong>
                            </div>
                            <div>
                                <p>
                                    {`${props?.spectatorInfo?.lastnameBilletHolder} ${props?.spectatorInfo?.firstnameBilletHolder}`}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ticket_content-replicate">
                    <div className="wrapper">
                        <div className="content">
                            <div>
                                <strong>
                                    Date:
                                </strong>
                                <strong>
                                    Date:
                                </strong>
                            </div>
                            <div>
                                <p className="date">
                                    {
                                        props?.spectatorInfo?.dateMatch1?.slice(0, 10)
                                    }
                                </p>
                            </div>
                        </div>
                        <div className="content">
                            <div>
                                <strong>
                                    Ouverture des portes:
                                </strong>
                                <strong>
                                    Gates Open:
                                </strong>
                            </div>
                            <div>
                                <p>
                                    {
                                        props?.spectatorInfo?.dateOuverturePorte?.slice(11, 16)
                                    }
                                </p>
                            </div>
                        </div>
                        <div className="content">
                            <div>
                                <strong>
                                    Stade:
                                </strong>
                                <strong>
                                    Stadium:
                                </strong>
                            </div>
                            <div>
                                <p>{props?.spectatorInfo?.infrastructure}</p>
                            </div>
                        </div>
                    </div>

                    <div className="wrapper">
                        <div className="content">
                            <div>
                                <strong>
                                    Match:
                                </strong>
                            </div>
                            <div>
                                {
                                    props?.spectatorInfo?.match.includes('\n') ?
                                        <div className="match">
                                            <p>{props?.spectatorInfo?.match?.split('\n')[0]}</p>
                                            <p>{props?.spectatorInfo?.match?.split('\n')[1]}</p>
                                        </div>
                                        : <div className="match">
                                            <p>{props?.spectatorInfo?.match}</p>
                                        </div>
                                }

                            </div>
                        </div>
                        <div className="content">
                            <div>
                                <strong>
                                    Coup d'envoi:
                                </strong>
                                <strong>
                                    Kiff-of time:
                                </strong>
                            </div>
                            <div>
                                <p>
                                    {
                                        props?.spectatorInfo?.dateMatch1?.slice(11, 16)
                                    }                             </p>
                                <p>
                                    {
                                        props?.spectatorInfo?.dateMatch2?.slice(11, 16)
                                    }                             </p>

                            </div>
                        </div>
                    </div>


                    <div className="wrapper">
                        <div className="content">
                            <div>
                                <strong>
                                    Catégorie / Category:
                                </strong>
                                <strong>
                                    Prix / Price:
                                </strong>
                            </div>
                            <div>
                                <p>{props?.spectatorInfo?.zoneLibelle}</p>
                                <p>{props?.spectatorInfo?.prix}.00 DZD</p>
                            </div>
                        </div>
                        <div className="content">
                            <div>
                                <strong>
                                    Nom:
                                </strong>
                                <strong>
                                    Name:
                                </strong>
                            </div>
                            <div>
                                <p>
                                    {`${props?.spectatorInfo?.lastnameBilletHolder} ${props?.spectatorInfo?.firstnameBilletHolder}`}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ticket_qr_code">
                    <QRCode className="qr-code" value={props?.spectatorInfo ? props?.spectatorInfo?.referenceBillet : ''} />
                </div>
                <div className="ticket-code">
                    <p> {props?.spectatorInfo?.referenceBillet} </p>
                </div>
                <div className="ticket-code-replicate">
                    <p> {props?.spectatorInfo?.referenceBillet} </p>
                </div>
            </div>
        )
    )
);

