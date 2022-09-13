import { TrancheHoraire } from "./trancheHoraire";
import { Utilisateur } from "./utilisateur";
import { Zone } from "./zone";

export class Tarif {

  id: number = 0;
  prixEnEuros: number = 0;
  administrateur!: Utilisateur;
  trancheHoraire!: TrancheHoraire;
  zone!: Zone;
}
