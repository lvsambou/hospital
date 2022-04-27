import { DrugsConfigurations } from './drugsConfigurations';
import { PatientsRegister } from './patientsRegister';
export declare class Quarantine {
    patients: PatientsRegister;
    drugs: Array<string>;
    drugsConfigs: DrugsConfigurations;
    private static readonly NOT_IMPLEMENTED_MESSAGE;
    constructor(patients: PatientsRegister);
    private setPatients;
    getPatients(): PatientsRegister;
    setDrugs(drugs: Array<string>): void;
    getDrugs(): Array<string>;
    private setDrugsConfigs;
    private getDrugsConfigs;
    private cureEffects;
    private killsEvryBody;
    wait40Days(): void;
    report(): PatientsRegister;
}
