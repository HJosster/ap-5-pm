export interface DImages{
  icon : string;
  featured : string;
  background : string;
  information : string;
}

export interface IDetail{
  name : string;
  description : string;
  type : string;
  rarity : string;
  series : string;
  cost : number;
  upcoming : boolean;
  images : DImages;

}

export interface IData{
  itemId : string;
  lastUpdate : number;
  item : IDetail;
}

export interface Item {
  lastUpdate : number;
  lanuage : string;
  data : IData
}
