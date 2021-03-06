// Aliases for types used in WSDLs
import { base64Binary, dateTime, int } from "../../lib/wsdl-types";

/* tslint:disable:max-line-length */

export interface InodoVerificaRPTInput {
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoPSP: string;
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoIntermediarioPSP: string;
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoCanale: string;
  /** http://ws.pagamenti.telematici.gov/#stPassword(minLength,maxLength) */
  password: string;
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  codiceContestoPagamento: string;
  /** http://ws.pagamenti.telematici.gov/#string(undefined) */
  codificaInfrastrutturaPSP: string;
  codiceIdRPT: PPTPortTypes.IcodiceIdRPT;
}

export interface InodoVerificaRPTOutput extends PPTPortTypes.InodoVerificaRPTRisposta{}

export interface InodoAttivaRPTInput {
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoPSP: string;
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoIntermediarioPSP: string;
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoCanale: string;
  /** http://ws.pagamenti.telematici.gov/#stPassword(minLength,maxLength) */
  password: string;
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  codiceContestoPagamento: string;
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoIntermediarioPSPPagamento: string;
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoCanalePagamento: string;
  /** http://ws.pagamenti.telematici.gov/#string(undefined) */
  codificaInfrastrutturaPSP: string;
  codiceIdRPT: PPTPortTypes.IcodiceIdRPT;
  datiPagamentoPSP: PPTPortTypes.IdatiPagamentoPSP;
}

export interface InodoAttivaRPTOutput extends PPTPortTypes.InodoAttivaRPTRisposta{}


export interface InodoInviaRTInput {
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoIntermediarioPSP: string;
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoCanale: string;
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  password: string;
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoPSP: string;
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoDominio: string;
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoUnivocoVersamento: string;
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  codiceContestoPagamento: string;
  /** http://ws.pagamenti.telematici.gov/#string(undefined) */
  tipoFirma: string;
  /** http://ws.pagamenti.telematici.gov/#base64Binary(undefined) */
  rt: base64Binary;
}

export interface InodoInviaRTOutput {
  nodoInviaRTRisposta: PPTPortTypes.InodoInviaRTRisposta;
}

export interface InodoChiediInformativaPAInput {
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoPSP: string;
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoIntermediarioPSP: string;
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoCanale: string;
  /** http://ws.pagamenti.telematici.gov/#stPassword(minLength,maxLength) */
  password: string;
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoDominio: string;
}

export interface InodoChiediInformativaPAOutput {
  fault: PPTPortTypes.Ifault;
  /** http://ws.pagamenti.telematici.gov/#base64Binary(undefined) */
  xmlInformativa: base64Binary;
}

export interface InodoChiediTemplateInformativaPSPInput {
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoPSP: string;
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoIntermediarioPSP: string;
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoCanale: string;
  /** http://ws.pagamenti.telematici.gov/#stPassword(minLength,maxLength) */
  password: string;
}

export interface InodoChiediTemplateInformativaPSPOutput {
  fault: PPTPortTypes.Ifault;
  /** http://ws.pagamenti.telematici.gov/#base64Binary(undefined) */
  xmlTemplateInformativa: base64Binary;
}

export interface InodoInviaFlussoRendicontazioneInput {
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoPSP: string;
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoIntermediarioPSP: string;
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoCanale: string;
  /** http://ws.pagamenti.telematici.gov/#stPassword(minLength,maxLength) */
  password: string;
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoDominio: string;
  /** http://ws.pagamenti.telematici.gov/#string(undefined) */
  identificativoFlusso: string;
  /** http://ws.pagamenti.telematici.gov/#dateTime(undefined) */
  dataOraFlusso: dateTime;
  /** http://ws.pagamenti.telematici.gov/#base64Binary(undefined) */
  xmlRendicontazione: base64Binary;
}

export interface InodoInviaFlussoRendicontazioneOutput {
  fault: PPTPortTypes.Ifault;
  /** http://ws.pagamenti.telematici.gov/#string(undefined) */
  esito: PPTPortTypes.Esito;
}

export interface InodoChiediElencoQuadraturePSPInput {
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoPSP: string;
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoIntermediarioPSP: string;
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoCanale: string;
  /** http://ws.pagamenti.telematici.gov/#stPassword(minLength,maxLength) */
  password: string;
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoDominio: string;
}

export interface InodoChiediElencoQuadraturePSPOutput {
  fault: PPTPortTypes.Ifault;
  listaQuadrature: PPTPortTypes.IlistaQuadrature;
}

export interface InodoChiediQuadraturaPSPInput {
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoPSP: string;
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoIntermediarioPSP: string;
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoCanale: string;
  /** http://ws.pagamenti.telematici.gov/#stPassword(minLength,maxLength) */
  password: string;
  /** http://ws.pagamenti.telematici.gov/#string(undefined) */
  identificativoFlusso: string;
}

export interface InodoChiediQuadraturaPSPOutput {
  fault: PPTPortTypes.Ifault;
  /** http://ws.pagamenti.telematici.gov/#base64Binary(undefined) */
  xmlQuadratura: base64Binary;
}

export interface InodoInviaEsitoStornoInput {
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoPSP: string;
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoIntermediarioPSP: string;
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoCanale: string;
  /** http://ws.pagamenti.telematici.gov/#stPassword(minLength,maxLength) */
  password: string;
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoDominio: string;
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoUnivocoVersamento: string;
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  codiceContestoPagamento: string;
  /** http://ws.pagamenti.telematici.gov/#base64Binary(undefined) */
  er: base64Binary;
}

export interface InodoInviaEsitoStornoOutput {
  fault: PPTPortTypes.Ifault;
  /** http://ws.pagamenti.telematici.gov/#string(undefined) */
  esito: PPTPortTypes.Esito;
}

export interface InodoInviaRichiestaRevocaInput {
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoPSP: string;
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoIntermediarioPSP: string;
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoCanale: string;
  /** http://ws.pagamenti.telematici.gov/#stPassword(minLength,maxLength) */
  password: string;
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoDominio: string;
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoUnivocoVersamento: string;
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  codiceContestoPagamento: string;
  /** http://ws.pagamenti.telematici.gov/#base64Binary(undefined) */
  rr: base64Binary;
}

export interface IcdInfoWispOutput {
  esito: PPTPortTypes.Esito.OK | PPTPortTypes.Esito.KO;
}

export enum codificaInfrastrutturaPSPEnum {
  QR_CODE = "QR-CODE",
  BARCODE_GS1_128 = "BARCODE-GS1-128",
  BARCODE_128_AIM = "BARCODE-128-AIM"
}

export interface InodoInviaRichiestaRevocaOutput {}

export interface IPPTPortSoap {
  nodoVerificaRPT: (
    input: InodoVerificaRPTInput,
    cb: (
      err: any | null,
      result: InodoVerificaRPTOutput,
      raw: string,
      soapHeader: { [k: string]: any }
    ) => any
  ) => void;
  nodoAttivaRPT: (
    input: InodoAttivaRPTInput,
    cb: (
      err: any | null,
      result: InodoAttivaRPTOutput,
      raw: string,
      soapHeader: { [k: string]: any }
    ) => any
  ) => void;
  nodoInviaRT: (
    input: InodoInviaRTInput,
    cb: (
      err: any | null,
      result: InodoInviaRTOutput,
      raw: string,
      soapHeader: { [k: string]: any }
    ) => any
  ) => void;
  nodoChiediInformativaPA: (
    input: InodoChiediInformativaPAInput,
    cb: (
      err: any | null,
      result: InodoChiediInformativaPAOutput,
      raw: string,
      soapHeader: { [k: string]: any }
    ) => any
  ) => void;
  nodoChiediTemplateInformativaPSP: (
    input: InodoChiediTemplateInformativaPSPInput,
    cb: (
      err: any | null,
      result: InodoChiediTemplateInformativaPSPOutput,
      raw: string,
      soapHeader: { [k: string]: any }
    ) => any
  ) => void;
  nodoInviaFlussoRendicontazione: (
    input: InodoInviaFlussoRendicontazioneInput,
    cb: (
      err: any | null,
      result: InodoInviaFlussoRendicontazioneOutput,
      raw: string,
      soapHeader: { [k: string]: any }
    ) => any
  ) => void;
  nodoChiediElencoQuadraturePSP: (
    input: InodoChiediElencoQuadraturePSPInput,
    cb: (
      err: any | null,
      result: InodoChiediElencoQuadraturePSPOutput,
      raw: string,
      soapHeader: { [k: string]: any }
    ) => any
  ) => void;
  nodoChiediQuadraturaPSP: (
    input: InodoChiediQuadraturaPSPInput,
    cb: (
      err: any | null,
      result: InodoChiediQuadraturaPSPOutput,
      raw: string,
      soapHeader: { [k: string]: any }
    ) => any
  ) => void;
  nodoInviaEsitoStorno: (
    input: InodoInviaEsitoStornoInput,
    cb: (
      err: any | null,
      result: InodoInviaEsitoStornoOutput,
      raw: string,
      soapHeader: { [k: string]: any }
    ) => any
  ) => void;
  nodoInviaRichiestaRevoca: (
    input: InodoInviaRichiestaRevocaInput,
    cb: (
      err: any | null,
      result: InodoInviaRichiestaRevocaOutput,
      raw: string,
      soapHeader: { [k: string]: any }
    ) => any
  ) => void;
}

export namespace PPTPortTypes {
  export interface IcodiceIdRPT {
    CF: string;
    CodStazPA?: string;
    AuxDigit: string;
    CodIUV: string;
  }
  export interface Ifault {
    /** http://ws.pagamenti.telematici.gov/#string(undefined) */
    faultCode: string;
    /** http://ws.pagamenti.telematici.gov/#string(undefined) */
    faultString: string;
    /** http://ws.pagamenti.telematici.gov/#string(undefined) */
    id: string;
    /** http://ws.pagamenti.telematici.gov/#string(undefined) */
    description: string;
    /** http://ws.pagamenti.telematici.gov/#int(undefined) */
    serial: int;
  }
  export interface IidentificativoUnivocoBeneficiario {
    /** http://www.digitpa.gov.it/schemas/2011/Pagamenti/#stTipoIdentificativoUnivocoPersG(G,length) */
    tipoIdentificativoUnivoco: "G";
    /** http://www.digitpa.gov.it/schemas/2011/Pagamenti/#stText35(minLength,maxLength) */
    codiceIdentificativoUnivoco: string;
  }
  export interface IenteBeneficiario {
    identificativoUnivocoBeneficiario: PPTPortTypes.IidentificativoUnivocoBeneficiario;
    /** http://www.digitpa.gov.it/schemas/2011/Pagamenti/#stText70(minLength,maxLength) */
    denominazioneBeneficiario: string;
    /** http://www.digitpa.gov.it/schemas/2011/Pagamenti/#stText35(minLength,maxLength) */
    codiceUnitOperBeneficiario: string;
    /** http://www.digitpa.gov.it/schemas/2011/Pagamenti/#stText70(minLength,maxLength) */
    denomUnitOperBeneficiario: string;
    /** http://www.digitpa.gov.it/schemas/2011/Pagamenti/#stText70(minLength,maxLength) */
    indirizzoBeneficiario: string;
    /** http://www.digitpa.gov.it/schemas/2011/Pagamenti/#stText16(minLength,maxLength) */
    civicoBeneficiario: string;
    /** http://www.digitpa.gov.it/schemas/2011/Pagamenti/#stText16(minLength,maxLength) */
    capBeneficiario: string;
    /** http://www.digitpa.gov.it/schemas/2011/Pagamenti/#stText35(minLength,maxLength) */
    localitaBeneficiario: string;
    /** http://www.digitpa.gov.it/schemas/2011/Pagamenti/#stText35(minLength,maxLength) */
    provinciaBeneficiario: string;
    /** http://www.digitpa.gov.it/schemas/2011/Pagamenti/#stNazioneProvincia(pattern) */
    nazioneBeneficiario: string;
  }
  export interface IspezzoneStrutturatoCausaleVersamento {
    /** http://ws.pagamenti.telematici.gov/#stText25(minLength,maxLength) */
    causaleSpezzone: string;
    /** http://ws.pagamenti.telematici.gov/#stImporto(minInclusive,maxInclusive,fractionDigits,totalDigits) */
    importoSpezzone: number; //TODO: [#158031250] Fix wsdl-to-ts https://www.pivotaltracker.com/n/projects/2161158/stories/158031250/
  }
  export interface IspezzoniCausaleVersamento {
    /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
    spezzoneCausaleVersamento: string;
    spezzoneStrutturatoCausaleVersamento: PPTPortTypes.IspezzoneStrutturatoCausaleVersamento;
  }
  export interface IdatiPagamentoPA {
    /** http://ws.pagamenti.telematici.gov/#stImporto(minInclusive,maxInclusive,fractionDigits,totalDigits) */
    importoSingoloVersamento: number; //TODO: [#158031250] Fix wsdl-to-ts https://www.pivotaltracker.com/n/projects/2161158/stories/158031250/
    /** http://ws.pagamenti.telematici.gov/#stIBANIdentifier(pattern) */
    ibanAccredito: string;
    /** http://ws.pagamenti.telematici.gov/#stBICIdentifier(pattern) */
    bicAccredito: string;
    enteBeneficiario: PPTPortTypes.IenteBeneficiario;
    /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
    credenzialiPagatore: string;
    /** http://ws.pagamenti.telematici.gov/#stText140(minLength,maxLength) */
    causaleVersamento: string;
    spezzoniCausaleVersamento: PPTPortTypes.IspezzoniCausaleVersamento[];
  }
  export interface InodoVerificaRPTRisposta {
    fault?: PPTPortTypes.Ifault;
    /** http://ws.pagamenti.telematici.gov/#string(undefined) */
    esito: PPTPortTypes.Esito;
    datiPagamentoPA: PPTPortTypes.IdatiPagamentoPA;
  }
  export interface IidentificativoUnivocoVersante {
    /** http://www.digitpa.gov.it/schemas/2011/Pagamenti/#stTipoIdentificativoUnivocoPersFG(F,G,length) */
    tipoIdentificativoUnivoco: "F" | "G";
    /** http://www.digitpa.gov.it/schemas/2011/Pagamenti/#stText35(minLength,maxLength) */
    codiceIdentificativoUnivoco: string;
  }
  export interface IsoggettoVersante {
    identificativoUnivocoVersante: PPTPortTypes.IidentificativoUnivocoVersante;
    /** http://www.digitpa.gov.it/schemas/2011/Pagamenti/#stText70(minLength,maxLength) */
    anagraficaVersante: string;
    /** http://www.digitpa.gov.it/schemas/2011/Pagamenti/#stText70(minLength,maxLength) */
    indirizzoVersante: string;
    /** http://www.digitpa.gov.it/schemas/2011/Pagamenti/#stText16(minLength,maxLength) */
    civicoVersante: string;
    /** http://www.digitpa.gov.it/schemas/2011/Pagamenti/#stText16(minLength,maxLength) */
    capVersante: string;
    /** http://www.digitpa.gov.it/schemas/2011/Pagamenti/#stText35(minLength,maxLength) */
    localitaVersante: string;
    /** http://www.digitpa.gov.it/schemas/2011/Pagamenti/#stText35(minLength,maxLength) */
    provinciaVersante: string;
    /** http://www.digitpa.gov.it/schemas/2011/Pagamenti/#stNazioneProvincia(pattern) */
    nazioneVersante: string;
    /** http://www.digitpa.gov.it/schemas/2011/Pagamenti/#stEMail(pattern,maxLength) */
    "e-mailVersante": string;
  }
  export interface IidentificativoUnivocoPagatore {
    /** http://www.digitpa.gov.it/schemas/2011/Pagamenti/#stTipoIdentificativoUnivocoPersFG(F,G,length) */
    tipoIdentificativoUnivoco: "F" | "G";
    /** http://www.digitpa.gov.it/schemas/2011/Pagamenti/#stText35(minLength,maxLength) */
    codiceIdentificativoUnivoco: string;
  }
  export interface IsoggettoPagatore {
    identificativoUnivocoPagatore: PPTPortTypes.IidentificativoUnivocoPagatore;
    /** http://www.digitpa.gov.it/schemas/2011/Pagamenti/#stText70(minLength,maxLength) */
    anagraficaPagatore: string;
    /** http://www.digitpa.gov.it/schemas/2011/Pagamenti/#stText70(minLength,maxLength) */
    indirizzoPagatore: string;
    /** http://www.digitpa.gov.it/schemas/2011/Pagamenti/#stText16(minLength,maxLength) */
    civicoPagatore: string;
    /** http://www.digitpa.gov.it/schemas/2011/Pagamenti/#stText16(minLength,maxLength) */
    capPagatore: string;
    /** http://www.digitpa.gov.it/schemas/2011/Pagamenti/#stText35(minLength,maxLength) */
    localitaPagatore: string;
    /** http://www.digitpa.gov.it/schemas/2011/Pagamenti/#stText35(minLength,maxLength) */
    provinciaPagatore: string;
    /** http://www.digitpa.gov.it/schemas/2011/Pagamenti/#stNazioneProvincia(pattern) */
    nazionePagatore: string;
    /** http://www.digitpa.gov.it/schemas/2011/Pagamenti/#stEMail(pattern,maxLength) */
    "e-mailPagatore": string;
  }
  export interface IdatiPagamentoPSP {
    /** http://ws.pagamenti.telematici.gov/#stImporto(minInclusive,maxInclusive,fractionDigits,totalDigits) */
    importoSingoloVersamento: number; //TODO: [#158031250] Fix wsdl-to-ts
    /** http://ws.pagamenti.telematici.gov/#stIBANIdentifier(pattern) */
    ibanAppoggio?: string; //TODO: [#158031250] Fix wsdl-to-ts https://www.pivotaltracker.com/n/projects/2161158/stories/158031250/
    /** http://ws.pagamenti.telematici.gov/#stBICIdentifier(pattern) */
    bicAppoggio?: string; //TODO: [#158031250] Fix wsdl-to-ts https://www.pivotaltracker.com/n/projects/2161158/stories/158031250/
    soggettoVersante?: PPTPortTypes.IsoggettoVersante;
    /** http://ws.pagamenti.telematici.gov/#stIBANIdentifier(pattern) */
    ibanAddebito?: string; //TODO: [#158031250] Fix wsdl-to-ts https://www.pivotaltracker.com/n/projects/2161158/stories/158031250/
    /** http://ws.pagamenti.telematici.gov/#stBICIdentifier(pattern) */
    bicAddebito?: string; //TODO: [#158031250] Fix wsdl-to-ts https://www.pivotaltracker.com/n/projects/2161158/stories/158031250/
    soggettoPagatore?: PPTPortTypes.IsoggettoPagatore;
  }
  export interface InodoAttivaRPTRisposta {
    fault?: PPTPortTypes.Ifault; //TODO: [#158031250] Fix wsdl-to-ts https://www.pivotaltracker.com/n/projects/2161158/stories/158031250/
    /** http://ws.pagamenti.telematici.gov/#string(undefined) */
    esito: PPTPortTypes.Esito;
    datiPagamentoPA: PPTPortTypes.IdatiPagamentoPA;
  }
  export interface InodoInviaRTRisposta {
    fault?: PPTPortTypes.Ifault; //TODO: [#158031250] Fix wsdl-to-ts https://www.pivotaltracker.com/n/projects/2161158/stories/158031250/
    /** http://ws.pagamenti.telematici.gov/#string(undefined) */
    esito: PPTPortTypes.Esito;
  }
  export interface IidQuadratura {
    /** http://ws.pagamenti.telematici.gov/#string(undefined) */
    identificativoFlusso: string;
    /** http://ws.pagamenti.telematici.gov/#dateTime(undefined) */
    dataOraFlusso: dateTime;
  }
  export interface IlistaQuadrature {
    /** http://ws.pagamenti.telematici.gov/#int(undefined) */
    totRestituiti: int;
    idQuadratura: PPTPortTypes.IidQuadratura[];
  }

  export enum Esito {
    OK = "OK",
    KO = "KO"
  }

  export const envelopeKey = "soapenv";
}
