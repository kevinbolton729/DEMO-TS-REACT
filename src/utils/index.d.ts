import { Element } from '../global';

interface IFile {
  type: string;
  size: number;
}

type FuncStrToStr = (param: string) => string;
type FuncTypeToNum = (sort: string, maps: string[]) => number;
type FuncTypeToStr = (sort: string, maps: string[]) => string;
type FuncTypeToElements = (ids: any[], maps: any[]) => Element;
type FuncTypeToArr = (ids: any[], maps: any[]) => string[];
type BeforeUpload = (file: IFile) => boolean;
type HandleToken = (params: { put: string; message?: string }) => void;

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
