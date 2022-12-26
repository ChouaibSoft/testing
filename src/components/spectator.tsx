import { createRef, useState, useEffect } from "react";
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

import api from 'utils/api'
import jwtDecode from "jwt-decode";
import { useKeycloak } from "@react-keycloak/web";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import DoneIcon from '@mui/icons-material/Done';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import Snackbar from "@mui/material/Snackbar/Snackbar";
import Alert from "@mui/material/Alert/Alert";
import { TransitionProps } from "@mui/material/transitions";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Spectator({ spectatorInfo, setSpectatorInfo, prevState }: any) {
  const ticketRef = createRef();
  const [printing, setPrinting] = useState(false)
  const [loading, setLoading] = useState(false)
  const [tryAgain, setTryAgain] = useState(false)
  const [motif, setMotif] = useState("")
  const [error, setError] = useState(false)
  const [printId, setPrintId] = useState(null)
  const { keycloak } = useKeycloak()
  const intl = useIntl();
  const [open, setOpen] = useState(false)
  const [transition, setTransition] = useState<
    React.ComponentType<TransitionProps> | undefined
  >(undefined);

  //@ts-ignore
  const decodedToken = jwtDecode(keycloak.token)
  const { i18n } = useConfig()
  const handlePrint = function (target: any) {
    return new Promise(() => {
      console.log("forwarding print request to the main process...");

      const data = target.contentWindow.document.documentElement.outerHTML;
      console.log(data);
      const blob = new Blob([data], { type: "text/html;charset=utf-8;" });
      const url = URL.createObjectURL(blob);

      //@ts-ignore
      window.electronAPI.printComponent(url, (response: AnyAaaaRecord) => {
        console.log("Main: ", response);
      });
      //console.log('Main: ', data);
    });
  };

  const handleChange = (event: SelectChangeEvent) => {
    setMotif(event.target.value as string);
  };


  var refTicket: any = null
  const handleTicketPrint = useReactToPrint({
    //@ts-ignore
    content: () => refTicket,
    documentTitle: "Ticket component",
    print: handlePrint,
  });


  useEffect(() => {
    if (prevState) {
      setPrintId(spectatorInfo.printId)
      setPrinting(true)
    }
  }, [prevState])

  const printTicket = async (skip?: boolean) => {
    if (!skip && tryAgain && !motif) {
      setError(true)
    } else if (!skip && tryAgain && motif) {
      confirmPrinting(false, () => {
        clear()
      })
    } else {
      refTicket = ticketRef.current
      setPrinting(true)
      setLoading(true)
      setMotif("")
      setTryAgain(false)
      setError(false)
      try {
        //@ts-ignore
        const r = await api.get(`billet/printingAttempt/${spectatorInfo.ref}?username=${decodedToken.preferred_username}`)
        setPrintId(r.data)
        localStorage.setItem('spectator', JSON.stringify({
          ...spectatorInfo,
          printId: r.data
        }))
        handleTicketPrint()
        setTimeout(() => {
          setLoading(false)
        }, 10000)
      } catch (e) {
        setPrinting(false)
        setLoading(false)
        setOpen(true)
      }
    }
  }

  const done = () => {
    confirmPrinting(true, () => {
      clear()
    })
  }

  const clear = () => {
    setSpectatorInfo(null)
    setPrinting(false)
    setTryAgain(false)
    setError(false)
    refTicket = null;
    localStorage.removeItem('spectator')
  }

  const printAgain = () => {
    setTryAgain(true)
  }

  const confirmPrinting = async  (sucess: boolean, callback?: Function) => {
    let payload = {
      resultatImpression: sucess ? "SUCCES" : 'ECHOUE',
      //@ts-ignore
      username: decodedToken.preferred_username,
      impressionId: printId,
      recuReference: spectatorInfo.ref
    }
    if (!sucess) {
      //@ts-ignore
      payload["motifEchec"] = motif
    }
    try{
      await  api.post(`billet/printingResult`, payload)
      setLoading(false)
      setTryAgain(false)
      if (callback) callback()
      if (motif) {
        printTicket(true)
      }
    }catch(e: any){
      setLoading(false)
      if (e.response?.data?.errorMessage === 'TICKET_ALREADY_PRINTED') {
        if (callback) callback()
      } else {
        setOpen(true)
      }
    }
  }

  return (
    <>
      <Box
        sx={{ position: "absolute", top: '50%', left: '50%', transform: 'translate(-50%,  -50%)', zIndex: "20" }}
        width={"35%"}
        minWidth={"500px"}
      >
        {spectatorInfo ? (
          <Card variant="outlined">
            {
              printing ?
                <CardContent>
                  {
                    loading ? <Grid container flexDirection={"column"} justifyContent="center" sx={{ textAlign: 'center', py: 5 }}>
                      <Grid item>
                        <CircularProgress />
                      </Grid>
                      <Grid item>
                        <Typography variant="body1">
                          <FormattedMessage id="is_printing" />
                        </Typography>
                      </Grid>
                    </Grid> : <Box>
                      <Typography variant="h6">
                        <div dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: 'printing_confirm' }) }}></div>
                      </Typography>
                      {
                        tryAgain ?
                          <FormControl sx={{ mt: 3 }} fullWidth error={error}>
                            <InputLabel id="reject">
                              <FormattedMessage id="motif" />
                            </InputLabel>
                            <Select
                              labelId="reject"
                              id="demo-simple-select"
                              value={motif}
                              label={intl.formatMessage({ id: "motif" })}
                              onChange={handleChange}
                              placeholder={intl.formatMessage({ id: "select_option" })}
                            >
                              <MenuItem value="PAPIER">
                                <FormattedMessage id="paper_issue" />
                              </MenuItem>
                              <MenuItem value="ENCRE">
                                <FormattedMessage id="ink_issue" />
                              </MenuItem>
                              <MenuItem value="CONNECTION">
                                <FormattedMessage id="connection_issue" />
                              </MenuItem>
                              <MenuItem value="PANNE">
                                <FormattedMessage id="error_issue" />
                              </MenuItem>
                            </Select>
                            {
                              error ?
                                <FormHelperText>
                                  <FormattedMessage id="required" />
                                </FormHelperText> : null
                            }
                          </FormControl>
                          : null
                      }
                    </Box>
                  }
                </CardContent>
                :
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <FormattedMessage id="spectator" />
                  </Typography>
                  <Typography variant="h6">
                    <strong> <FormattedMessage id="form_lastname" /> : </strong>
                    {spectatorInfo.lastnameBilletHolder}
                  </Typography>
                  {
                    spectatorInfo.accompagnateur ?
                      <Typography variant="h6">
                        <strong> <FormattedMessage id="form_accompagnateur" /> : </strong>
                        {spectatorInfo.accompagnateur}
                      </Typography> : null
                  }

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
            }

            <CardActions sx={{ borderTop: 1, borderColor: "grey.500" }}>
              {
                !printing ?
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      {
                        !printing ?
                          <Button
                            sx={{ color: 'black' }}
                            startIcon={i18n === 'ar' ? <ArrowForwardIosIcon /> : <ArrowBackIosIcon />}
                            onClick={() => setSpectatorInfo(null)}
                          >
                            <FormattedMessage id="buttons_return" />
                          </Button> : null
                      }

                    </Grid>
                    <Grid item>
                      <Button
                        startIcon={<LocalPrintshopIcon />}
                        onClick={() => printTicket(false)}
                        disabled={printing}
                      >
                        <FormattedMessage id="buttons_print" />
                      </Button>

                    </Grid>

                  </Grid>
                  :
                  <>
                    <Grid container justifyContent="space-between">
                      <Grid item>
                        <Button
                          startIcon={<RestartAltIcon />}
                          onClick={() => tryAgain ? printTicket(false) : printAgain()}
                          color="error"
                          disabled={loading}
                        >
                          {
                            tryAgain ? <FormattedMessage id="buttons_submit" /> : <FormattedMessage id="buttons_try-again" />
                          }
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          startIcon={<DoneIcon />}
                          onClick={done}
                          variant="contained"
                          disabled={loading || tryAgain}
                        >
                          <FormattedMessage id="buttons_confirm" />
                        </Button>
                      </Grid>

                    </Grid>
                  </>
              }

            </CardActions>
          </Card>
        ) : null}

      </Box>
      <Ticket ref={ticketRef} spectatorInfo={spectatorInfo}></Ticket>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        onClose={() => setOpen(false)}
        sx={{ mt: '2rem' }}
        TransitionComponent={transition}
      >
        <Alert severity="error">
          <FormattedMessage id="UNKNOWN" />
        </Alert>
      </Snackbar>
    </>
  );
}
