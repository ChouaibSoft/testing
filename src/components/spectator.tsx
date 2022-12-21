import { createRef } from "react";
import { Ticket } from "./ticket";
import {
  Typography,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
} from "@mui/material";
import { useReactToPrint } from "react-to-print";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import Moment from 'react-moment';
import { FormattedMessage, useIntl } from "react-intl";
import { AnyAaaaRecord } from "dns";
import useConfig from "hooks/useConfig";

export default function Spectator({ spectatorInfo }: any) {
  const ticketRef = createRef();
  const {i18n} = useConfig()
  const handlePrint = function (target: any) {
    return new Promise(() => {
      console.log("forwarding print request to the main process...");

      const data = target.contentWindow.document.documentElement.outerHTML;
      //console.log(data);
      const blob = new Blob([data], { type: "text/html" });
      const url = URL.createObjectURL(blob);

      //@ts-ignore
      window.electronAPI.printComponent(url, (response: AnyAaaaRecord) => {
        console.log("Main: ", response);
      });
      //console.log('Main: ', data);
    });
  };

  // Send print preview request to the Main process
  const handlePreview = function (target: any) {
    return new Promise(() => {
      console.log("forwarding print preview request...");
      console.log(target.contentWindow.document.documentElement);
      const data = target.contentWindow.document.documentElement.outerHTML;
      //console.log(data);
      const blob = new Blob([data], { type: "text/html" });
      const url = URL.createObjectURL(blob);

      //@ts-ignore
      window.electronAPI.previewComponent(url, (response: any) => {
        console.log("Main: ", response);
      });
      //console.log('Main: ', data);
    });
  };

  const handleTicketPrint = useReactToPrint({
    //@ts-ignore
    content: () => ticketRef.current,
    documentTitle: "Ticket component",
    print: handlePrint,
  });

  const handleTicketPreview = useReactToPrint({
    //@ts-ignore
    content: () => ticketRef.current,
    documentTitle: "Ticket component",
    print: handlePreview,
  });



  return (
    <>
      <Box
        sx={{ position: "absolute",top: '50%', left: '50%', transform: 'translate(-50%,  -50%)',  zIndex: "20" }}
        width={"35%"}
        minWidth={"500px"}
      >
        {spectatorInfo ? (
          <Card variant="outlined">
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                <FormattedMessage id="spectator" />
              </Typography>
              <Typography  variant="h6">
                <strong> <FormattedMessage id="form_lastname" /> : </strong>
                {spectatorInfo.lastnameBilletHolder}
              </Typography>
              <Typography variant="h6">
                <strong><FormattedMessage id="form_firstname" /> : </strong>
                {spectatorInfo.firstnameBilletHolder}
              </Typography>
              <Typography variant="h6">
                <strong><FormattedMessage id="form_nin" /> : </strong>
                {spectatorInfo.nin}
              </Typography>
              <Typography variant="h6">
                <strong><FormattedMessage id="form_birthdate" /> : </strong>
                <Moment format="LL" locale={i18n}>{new Date(spectatorInfo.dateNaissance?.replace(
                                "[UTC]",
                                ""
                  ))}</Moment>
              </Typography>
            </CardContent>
            <CardActions sx={{ borderTop: 1, borderColor: "grey.500" }}>
              <Button
                startIcon={<LocalPrintshopIcon />}
                onClick={handleTicketPrint}
              >
                <FormattedMessage id="buttons_print" />
              </Button>
              <Button
                startIcon={<LocalPrintshopIcon />}
                onClick={handleTicketPreview}
              >
                preview
              </Button>
            </CardActions>
          </Card>
        ) : null}
      </Box>
      <Ticket ref={ticketRef}></Ticket>
    </>
  );
}
