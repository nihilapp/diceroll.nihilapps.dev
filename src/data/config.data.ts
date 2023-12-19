export class configData {
  static title = '사이트 이름';
  static description = '';
  static keywords = '';
  static author = {
    name: 'NIHILncunia',
    url: 'https://github.com/NIHILncunia',
  };
  static type = '';
  static url = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : '';
  static image = '';
  static version = 'v0.0.0';
  static baseApiUrl = `${this.url}/api`;
}
