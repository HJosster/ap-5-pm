export interface AccountDetails{
  id : string;
  name : string;
}
export interface BattlePass{
  level : number;
  progress : number;
}
export interface StatsDescription{
  deaths : number;
  kd : number;
  kills : number;
  killsPerMatch : number;
  killsPerMin : number;
  matches : number;
  minutesPlayed : number;
  playerOutlived : number;
  score : number;
  scorePerMatch : number;
  scorePerMin : number;
  top5 : number;
  top12 : number;
  winRate: number;
  wins : number;
}
export interface AllStats{
  duo : StatsDescription;
  ltm : StatsDescription;
  overall : StatsDescription;
  solo : StatsDescription;
  squad : StatsDescription;
}
export interface Stats{
  all : AllStats;
}
export interface UserData{
  account : AccountDetails;
  battlePass : BattlePass;
  stats : Stats;
}
export interface User{
  data : UserData;
}
