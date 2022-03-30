import { ClavierDisposition } from "./clavierDisposition";
import { Theme } from "./theme";
import { VolumeSon } from "./volumeSon";

export default class Configuration {
  public static Default: Configuration = {
    hasAudio: true,
    afficherRegles: true,
    afficherChrono: false,
    volumeSon: VolumeSon.Normal,
    disposition: ClavierDisposition.Qwerty,
    theme: Theme.Sombre,
  };

  hasAudio: boolean = true;
  afficherRegles: boolean = true;
  afficherChrono: boolean = false;
  volumeSon: VolumeSon = VolumeSon.Normal;
  disposition: ClavierDisposition = ClavierDisposition.Qwerty;
  theme: Theme = Theme.Sombre;
}
