import React, { forwardRef } from "react";
import Moment from "react-moment";

import QRCode from "react-qr-code";

import './ticket.css'

export const Ticket = forwardRef((props: any, ref) =>
(
    (
        //@ts-ignore
        <div className="ticket" ref={ref}>
            {/* <img src={"https://firebasestorage.googleapis.com/v0/b/portfolio-dc68f.appspot.com/o/tmp.jpg?alt=media&token=09492d22-2db8-475d-baae-e7f80955dae9"} alt="ticket" /> */}
            <div className="ticket__content">
                <div className="wrapper">
                    <div className="content">
                        <div>
                            <strong>
                                Date
                            </strong>
                            <strong>
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
                            <strong>
                                موعد فتح الأبواب
                            </strong>
                        </div>
                        <div>
                            <p>
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
                                Price
                            </strong>
                            <strong>
                                السعر
                            </strong>
                        </div>
                        <div>
                            <p>{props?.spectatorInfo?.prix} DZD</p>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <strong>
                                Stadium
                            </strong>
                            <strong>
                                الملعب
                            </strong>
                        </div>
                        <div>
                            <p>{props?.spectatorInfo?.infrastructure}
                                oran olympic

                            </p>
                        </div>
                    </div>
                </div>

                <div className="wrapper">
                    <div className="content">
                        <div>
                            <strong>
                                Match
                            </strong>
                            <strong>
                                المباراة
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
                                Kiff-of time
                            </strong>
                            <strong>
                                صافرة البداية
                            </strong>
                        </div>
                        <div>
                            <p>
                                <Moment format="HH:mm">{new Date(props?.spectatorInfo?.dateMatch1?.replace(
                                    "[UTC]",
                                    ""
                                ))}</Moment>
                            </p>
                            {
                                props?.spectatorInfo?.dateMatch2 ?
                                    <p>
                                        <Moment format="HH:mm">{new Date(props?.spectatorInfo?.dateMatch2?.replace(
                                            "[UTC]",
                                            ""
                                        ))}</Moment>
                                    </p> : null
                            }
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <strong>
                                Spectator
                            </strong>
                            <strong>
                                المتفرج
                            </strong>
                        </div>
                        <div>
                            <p>
                                {`${props?.spectatorInfo?.lastnameBilletHolder} ${props?.spectatorInfo?.firstnameBilletHolder}`}
                            </p>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <strong>
                                accompanist
                            </strong>
                            <strong>
                                المرافق
                            </strong>
                        </div>
                        <div>
                            <p>
                                {`${props?.spectatorInfo?.accompagnateur}`}
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
                            <strong>
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
                            <strong>
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
                            <strong>
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
                            <strong>
                                المقعد
                            </strong>
                        </div>
                        <div>
                            <p>/</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ticket__content-replicate">
                <div className="wrapper">
                    <div className="content">
                        <div>
                            <strong>
                                Date
                            </strong>
                            <strong>
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
                            <strong>
                                موعد فتح الأبواب
                            </strong>
                        </div>
                        <div>
                            <p>
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
                                Price
                            </strong>
                            <strong>
                                السعر
                            </strong>
                        </div>
                        <div>
                            <p>{props?.spectatorInfo?.prix} DZD</p>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <strong>
                                Stadium
                            </strong>
                            <strong>
                                الملعب
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
                                Match
                            </strong>
                            <strong>
                                المباراة
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
                                Kiff-of time
                            </strong>
                            <strong>
                                صافرة البداية
                            </strong>
                        </div>
                        <div>
                            <p>
                                <Moment format="HH:mm">{new Date(props?.spectatorInfo?.dateMatch1?.replace(
                                    "[UTC]",
                                    ""
                                ))}</Moment>
                            </p>
                            {
                                props?.spectatorInfo?.dateMatch2 ?
                                    <p>
                                        <Moment format="HH:mm">{new Date(props?.spectatorInfo?.dateMatch2?.replace(
                                            "[UTC]",
                                            ""
                                        ))}</Moment>
                                    </p> : null
                            }
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <strong>
                                Spectator
                            </strong>
                            <strong>
                                المتفرج
                            </strong>
                        </div>
                        <div>
                            <p>
                                {`${props?.spectatorInfo?.lastnameBilletHolder} ${props?.spectatorInfo?.firstnameBilletHolder}`}
                            </p>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <strong>
                                accompanist
                            </strong>
                            <strong>
                                المرافق
                            </strong>
                        </div>
                        <div>
                            <p>
                                {`${props?.spectatorInfo?.accompagnateur}`}
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
                            <strong>
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
                            <strong>
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
                            <strong>
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
                            <strong>
                                المقعد
                            </strong>
                        </div>
                        <div>
                            <p>/</p>
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

