import { Element } from '../global';

type FuncStrToStr = (param: string) => string;
type FuncTypeToNum = (sort: string, maps: string[]) => number;
type FuncTypeToStr = (sort: string, maps: string[]) => string;
type FuncTypeToElements = (ids: any[], maps: any[]) => Element;
type FuncTypeToArr = (ids: any[], maps: any[]) => string[];
type BeforeUpload = (file: IFile) => boolean;
type HandleToken = (params: { put: string; message?: string }) => void;
type HandleFetch = (url: string, options: any) => any;

interface IFile {
  type: string;
  size: number;
}

export interface IParse {
  (
    params: {
      status: number;
      message: string;
      extData: { count: number; data: any[] };
    }
  ): {
    status: number;
    message: string;
    count: number;
    data: any[];
  };
}

export declare namespace FNS {
  type setMd5 = FuncStrToStr;
  type twoDecimal = FuncStrToStr;
  type parseNum = FuncStrToStr;
  type parseUrl = FuncStrToStr;
  type getSortType = FuncTypeToNum;
  type getTypeName = FuncTypeToStr;
  type getMapTypeName = FuncTypeToElements;
  type getMapStrName = FuncTypeToArr;
  type getMenus = (firstMenus: any[], data?: any[]) => any[];
  type getFirstMenu = (data?: any[]) => any[];
  type getChildMenus = (sortId: string, data?: any[]) => any[];
  type strToUpper = FuncStrToStr;
  type getBase64 = (img: any, callback: FuncStrToStr) => void;
  type base64UrlToBlob = (url: string) => any;
  type getUploadImgs = (passArr?: any[]) => any[];
  type covertBase64toUrl = (params: { data: any[]; contentOps: any }) => any;
  type beforeUpload = BeforeUpload;
  type beforeUploadVideo = BeforeUpload;
  type delToken = HandleToken;
  type noToken = HandleToken;
  type gotoPage = (params: { put: string; url: string; key?: string }) => void;
}

export declare namespace AXIOS {
  interface IResponse {
    status: number;
    statusText: string;
    url?: string;
  }
  interface IError {
    [errName: string]: any;
  }

  type checkStatus = (response: IResponse, resolve: any) => any;
  type fetch = HandleFetch;
  type request = HandleFetch;
}
