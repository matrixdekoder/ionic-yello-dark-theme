export class RegisterItem {

    backgroundImage     : string;
    logo                : string;
    register            : string;
    iconAccount         : string;
    iconAccountMultiple : string;
    iconHome            : string;
    iconCity            : string;
    iconWeb             : string;
    button              : string;
    username            : string;
    password            : string;
    address             : string;
    city                : string;
    state               : string;
    country             : string;
    skip                : string;
    iconLock            : string;
    iconEmail           : string;
    iconFlag            : string;
    email               : string;

  constructor(
    backgroundImage: string,
    logo: string,
    register: string,
    iconAccount:string,
    iconAccountMultiple: string,
    iconHome: string,
    iconCity: string,
    iconWeb: string,
    button: string,
    username: string,
    password: string,
    address: string,
    city: string,
    state: string,
    country: string,
    skip: string,
    iconLock: string,
    iconEmail: string,
    iconFlag: string,
    email: string
  ) {
      this.setBackgroundImage(backgroundImage);
      this.setLogo(logo);
      this.setRegister(register);
      this.setIconAccount(iconAccount);
      this.setIconAccountMultiple(iconAccountMultiple);
      this.setIconHome(iconHome);
      this.setIconCity(iconCity);
      this.setIconWeb(iconWeb);
      this.setButton(button);
      this.setUsername(username);
      this.setPassword(password);
      this.setAddress(address);
      this.setCity(city);
      this.setState(state);
      this.setCountry(country);
      this.setSkip(skip);
      this.setIconLock(iconLock);
      this.setIconEmail(iconEmail);
      this.setIconFlag(iconFlag);
      this.setEmail(email);
  }

  setBackgroundImage(backgroundImage:string):void {
    this.backgroundImage = backgroundImage;
  }

  getBackgroundImage():string {
    return this.backgroundImage;
  }

  setLogo(logo:string):void {
    this.logo = logo;
  }

  getLogo():string {
    return this.logo;
  }

  setRegister(register:string):void {
    this.register = register;
  }

  getRegister():string {
    return this.logo;
  }


  setIconAccount(iconAccount:string):void {
    this.iconAccount = iconAccount;
  }

  getIconAccount():string {
    return this.iconAccount;
  }

  setIconAccountMultiple(iconAccountMultiple:string):void {
    this.iconAccountMultiple = iconAccountMultiple;
  }

  getIconAccountMultiple():string {
    return this.iconAccountMultiple;
  }

  setIconHome(iconHome:string):void {
    this.iconHome = iconHome;
  }

  getIconHome():string {
    return this.iconHome;
  }

  setIconCity(iconCity:string):void {
    this.iconCity = iconCity;
  }

  getIconCity():string {
    return this.iconCity;
  }

  setIconWeb(iconWeb:string):void {
    this.iconWeb = iconWeb;
  }

  getIconWeb():string {
    return this.iconWeb;
  }

  setButton(button:string):void {
    this.button = button;
  }

  getButton():string {
    return this.button;
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

  setAddress(address:string):void {
    this.address = address;
  }

  getAddress():string {
    return this.address;
  }

  setCity(city:string):void {
    this.city = city;
  }

  getCity():string {
    return this.city;
  }

  setState(state:string):void {
    this.state = state;
  }

  getState():string {
    return this.state;
  }

  setCountry(country:string):void {
    this.country = country;
  }

  getCountry():string {
    return this.country;
  }

  setSkip(skip:string):void {
    this.skip = skip;
  }

  getSkip():string {
    return this.skip;
  }

  setIconLock(iconLock:string):void {
    this.iconLock = iconLock;
  }

  getIconLock():string {
    return this.iconLock;
  }

  setIconEmail(iconEmail:string):void {
    this.iconEmail = iconEmail;
  }

  getIconEmail():string {
    return this.iconEmail;
  }

  setIconFlag(iconFlag:string):void {
    this.iconFlag = iconFlag;
  }

  getIconFlag():string {
    return this.iconFlag;
  }

  setEmail(email:string):void {
    this.email = email;
  }

  getEmail():string {
    return this.email;
  }
}
