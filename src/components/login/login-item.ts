export class LoginItem {

    username        : string;
    password        : string;
    register        : string;
    login           : string;
    skip            : string
    logo            : string;
    backgroundImage : string;
    iconAccount     : string;
    iconKey         : string;
    iconLock        : string;

  constructor(
    username: string, password: string, register: string,
    login: string, skip: string, logo: string,
    iconAccount: string, iconKey: string, iconLock: string,
    backgroundImage: string
  ) {
    this.setUsername(username);
    this.setPassword(password);
    this.setRegister(register);
    this.setLogin(login);
    this.setSkip(skip);
    this.setLogo(logo);
    this.setIconAccount(iconAccount);
    this.setIconKey(iconKey);
    this.setIconLock(iconLock);
    this.setBackgroundImage(backgroundImage);
  }

  setUsername(username: string):void {
    this.username = username;
  }

  getUsername():string {
    return this.username;
  }

  setPassword(password:string):void {
    this.password = password;
  }

  getPassword():string {
    return this.password;
  }

  setRegister(register:string):void {
    this.register = register;
  }

  getRegister():string {
    return this.register;
  }
  setLogin(login:string):void {
    this.login = login;
  }

  getLogin():string {
    return this.login;
  }

  setLogo(logo:string):void {
    this.logo = logo;
  }

  getLogo():string {
    return this.logo;
  }

  setSkip(skip:string):void {
    this.skip = skip;
  }

  getSkip():string {
    return this.skip;
  }

  setBackgroundImage(backgroundImage:string):void {
    this.backgroundImage = backgroundImage;
  }

  getBackgroundImage():string {
    return this.backgroundImage;
  }

  setIconAccount(iconAccount:string):void {
    this.iconAccount = iconAccount;
  }

  getIconAccount():string {
    return this.iconAccount;
  }

  setIconKey(iconKey:string):void {
    this.iconKey = iconKey;
  }

  getIconKey():string {
    return this.iconKey;
  }

  setIconLock(iconLock:string):void {
    this.iconLock = iconLock;
  }

  getIconLock():string {
    return this.iconLock;
  }

}
