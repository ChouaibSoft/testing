import React, { forwardRef } from "react";
import Moment from "react-moment";

import QRCode from "react-qr-code";

import './ticket.css'

export const Ticket = forwardRef((props: any, ref) =>
(
    (
        //@ts-ignore
        <div className="ticket" ref={ref}>
            <img src={"https://firebasestorage.googleapis.com/v0/b/portfolio-dc68f.appspot.com/o/tmp.jpg?alt=media&token=09492d22-2db8-475d-baae-e7f80955dae9"} alt="ticket" />
            <div className="ticket__content">
                <div className="wrapper">
                    <div className="content">
                        <div>
                            <strong>
                                Date
                            </strong>
                            <strong className="arabic">
                                التاريخ
                            </strong>
                        </div>
                        <div>
                            <p>
                                <Moment format="D MMM YYYY" locale="en">{new Date(props?.spectatorInfo?.dateMatch1?.replace(
                                    "[UTC]",
                                    ""
                                ))}</Moment>
                            </p>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <strong>
                                Gates open
                            </strong>
                            <strong className="arabic">
                                موعد فتح الأبواب
                            </strong>
                        </div>
                        <div>
                            <p className="number">
                                <Moment format="HH:mm">{new Date(props?.spectatorInfo?.dateOuverturePorte?.replace(
                                    "[UTC]",
                                    ""
                                ))}</Moment>
                            </p>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <strong>
                                Spectator
                            </strong>
                            <strong className="arabic">
                                المتفرج
                            </strong>
                        </div>
                        <div>
                            <p>
                                {`${props?.spectatorInfo?.lastnameBilletHolder} ${props?.spectatorInfo?.firstnameBilletHolder}`}
                            </p>
                        </div>
                    </div>
                    {
                        props?.spectatorInfo?.accompagnateur ?
                            <div className="content">
                                <div>
                                    <strong>
                                        accompanist
                                    </strong>
                                    <strong className="arabic">
                                        المرافق
                                    </strong>
                                </div>
                                <div>
                                    <p>
                                        {`${props?.spectatorInfo?.accompagnateur}`}
                                    </p>
                                </div>
                            </div> : null
                    }
                </div>

                <div className="wrapper">
                    <div className="content">
                        <div>
                            <strong>
                                Kicf-OFF TIME
                            </strong>
                            <strong className="arabic">
                                صافرة البداية
                            </strong>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <strong>
                                MATCH
                            </strong>
                            <p className="teams">
                                {props?.spectatorInfo?.match?.split('\n')[0]?.replace('-', 'VS')}
                            </p>
                        </div>
                        <div>
                            <p className="number kick-off">
                                <Moment format="HH:mm">{new Date(props?.spectatorInfo?.dateMatch1?.replace(
                                    "[UTC]",
                                    ""
                                ))}</Moment>
                            </p>
                        </div>
                        <div>
                            <strong className="arabic">
                                المباراة
                            </strong>
                            <p className="teams teams-ar">
                                {props?.spectatorInfo?.matchAr?.split('\n')[0]}
                            </p>
                        </div>
                    </div>
                    {
                        props?.spectatorInfo?.match?.includes('\n') ?
                            <div className="content">
                                <div>
                                    <p className="teams">
                                        {props?.spectatorInfo?.match?.split('\n')[1]?.replace('-', 'VS')}
                                    </p>
                                </div>
                                <div>
                                    <p className="number kick-off">
                                        <Moment format="HH:mm">{new Date(props?.spectatorInfo?.dateMatch2?.replace(
                                            "[UTC]",
                                            ""
                                        ))}</Moment>
                                    </p>
                                </div>
                                <div>

                                    <p className="teams teams-ar">
                                        {props?.spectatorInfo?.matchAr?.split('\n')[1]}
                                    </p>
                                </div>
                            </div> : null
                    }

                    <div className="content">
                        <div>
                            <p className="stadium">
                                <strong>Stadium </strong>{"  "}
                                {props?.spectatorInfo?.infrastructure}
                            </p>
                        </div>
                        <div>
                            <p className="stadium arabic">
                                <strong>الملعب </strong> {"  "}

                                {props?.spectatorInfo?.infrastructureAr}
                            </p>
                        </div>
                    </div>
                </div>


                <div className="wrapper">
                    <div className="content">
                        <div>
                            <strong>
                                Category
                            </strong>
                            <strong className="arabic">
                                الفئة
                            </strong>
                        </div>
                        <div>
                            <p>{props?.spectatorInfo?.categoryLibelle}</p>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <strong>
                                Gate
                            </strong>
                            <strong className="arabic">
                                البوابة
                            </strong>
                        </div>
                        <div>
                            <p>
                                {
                                    props?.spectatorInfo?.portes
                                }
                            </p>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <strong>
                                Sector
                            </strong>
                            <strong className="arabic">
                                المدرج
                            </strong>
                        </div>
                        <div>
                            <p>{props?.spectatorInfo?.zoneLibelle}</p>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <strong>
                                Seat
                            </strong>
                            <strong className="arabic">
                                المقعد
                            </strong>
                        </div>
                        <div>
                            <p>/</p>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <strong>
                                Price
                            </strong>
                            <strong className="arabic">
                                السعر
                            </strong>
                        </div>
                        <div>
                            <p className="">{props?.spectatorInfo?.prix} DZD</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ticket__content ticket__content-replicate">
                <div className="wrapper">
                    <div className="content">
                        <div>
                            <strong>
                                Date
                            </strong>
                            <strong className="arabic">
                                التاريخ
                            </strong>
                        </div>
                        <div>
                            <p>
                                <Moment format="D MMM YYYY" locale="en">{new Date(props?.spectatorInfo?.dateMatch1?.replace(
                                    "[UTC]",
                                    ""
                                ))}</Moment>
                            </p>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <strong>
                                Gates open
                            </strong>
                            <strong className="arabic">
                                موعد فتح الأبواب
                            </strong>
                        </div>
                        <div>
                            <p className="number">
                                <Moment format="HH:mm">{new Date(props?.spectatorInfo?.dateOuverturePorte?.replace(
                                    "[UTC]",
                                    ""
                                ))}</Moment>
                            </p>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <strong>
                                Spectator
                            </strong>
                            <strong className="arabic">
                                المتفرج
                            </strong>
                        </div>
                        <div>
                            <p>
                                {`${props?.spectatorInfo?.lastnameBilletHolder} ${props?.spectatorInfo?.firstnameBilletHolder}`}
                            </p>
                        </div>
                    </div>
                    {
                        props?.spectatorInfo?.accompagnateur ?
                            <div className="content">
                                <div>
                                    <strong>
                                        accompanist
                                    </strong>
                                    <strong className="arabic">
                                        المرافق
                                    </strong>
                                </div>
                                <div>
                                    <p>
                                        {`${props?.spectatorInfo?.accompagnateur}`}
                                    </p>
                                </div>
                            </div> : null
                    }
                </div>

                <div className="wrapper">
                    <div className="content">
                        <div>
                            <strong>
                                Kicf-OFF TIME
                            </strong>
                            <strong className="arabic">
                                صافرة البداية
                            </strong>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <strong>
                                MATCH
                            </strong>
                            <p className="teams">
                                {props?.spectatorInfo?.match?.split('\n')[0]?.replace('-', 'VS')}
                            </p>
                        </div>
                        <div>
                            <p className="number kick-off">
                                <Moment format="HH:mm">{new Date(props?.spectatorInfo?.dateMatch1?.replace(
                                    "[UTC]",
                                    ""
                                ))}</Moment>
                            </p>
                        </div>
                        <div>
                            <strong className="arabic">
                                المباراة
                            </strong>
                            <p className="teams teams-ar">
                                {props?.spectatorInfo?.matchAr?.split('\n')[0]}
                            </p>
                        </div>
                    </div>
                    {
                        props?.spectatorInfo?.match?.includes('\n') ?
                            <div className="content">
                                <div>
                                    <p className="teams">
                                        {props?.spectatorInfo?.match?.split('\n')[1]?.replace('-', 'VS')}
                                    </p>
                                </div>
                                <div>
                                    <p className="number kick-off">
                                        <Moment format="HH:mm">{new Date(props?.spectatorInfo?.dateMatch2?.replace(
                                            "[UTC]",
                                            ""
                                        ))}</Moment>
                                    </p>
                                </div>
                                <div>

                                    <p className="teams teams-ar">
                                        {props?.spectatorInfo?.matchAr?.split('\n')[1]}
                                    </p>
                                </div>
                            </div> : null
                    }

                    <div className="content">
                        <div>
                            <p className="stadium">
                                <strong>Stadium </strong>{"  "}
                                {props?.spectatorInfo?.infrastructure}
                            </p>
                        </div>
                        <div>
                            <p className="stadium arabic">
                                <strong>الملعب </strong> {"  "}

                                {props?.spectatorInfo?.infrastructureAr}
                            </p>
                        </div>
                    </div>
                </div>


                <div className="wrapper">
                    <div className="content">
                        <div>
                            <strong>
                                Category
                            </strong>
                            <strong className="arabic">
                                الفئة
                            </strong>
                        </div>
                        <div>
                            <p>{props?.spectatorInfo?.categoryLibelle}</p>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <strong>
                                Gate
                            </strong>
                            <strong className="arabic">
                                البوابة
                            </strong>
                        </div>
                        <div>
                            <p>
                                {
                                    props?.spectatorInfo?.portes
                                }
                            </p>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <strong>
                                Sector
                            </strong>
                            <strong className="arabic">
                                المدرج
                            </strong>
                        </div>
                        <div>
                            <p>{props?.spectatorInfo?.zoneLibelle}</p>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <strong>
                                Seat
                            </strong>
                            <strong className="arabic">
                                المقعد
                            </strong>
                        </div>
                        <div>
                            <p>/</p>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <strong>
                                Price
                            </strong>
                            <strong className="arabic">
                                السعر
                            </strong>
                        </div>
                        <div>
                            <p className="">{props?.spectatorInfo?.prix} DZD</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ticket_qr_code">
                <QRCode className="qr-code" value={props?.spectatorInfo ? props?.spectatorInfo?.referenceBillet : ''} />
            </div>
            <div className="ticket_qr_code-replicate">
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

