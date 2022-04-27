import { DrugsConfigurations } from './drugsConfigurations';
import {PatientsRegister} from './patientsRegister';

export class Quarantine {

    patients: PatientsRegister;
    drugs: Array<string>;
    drugsConfigs: DrugsConfigurations;

    private static readonly NOT_IMPLEMENTED_MESSAGE = 'Work, work.';

    constructor(patients: PatientsRegister) {
        this.setPatients(patients);
    }

    private setPatients(patients: PatientsRegister) {
        this.patients = patients;
    }

    public getPatients(): PatientsRegister {
        return this.patients
    }

    public setDrugs(drugs: Array<string>): void {
        this.drugs = drugs;
        this.setDrugsConfigs()
    }

    public getDrugs(): Array<string> {
        return this.drugs
    }

    private setDrugsConfigs(): void {
        this.drugsConfigs = {
            Insulin: this.getDrugs().includes('I'),
            Paracetamol: this.getDrugs().includes('P'),
            Aspirin: this.getDrugs().includes('As'),
            Antibiotic: this.getDrugs().includes('An')
        }
    }

    private getDrugsConfigs(): DrugsConfigurations {
        return this.drugsConfigs
    }


    private cureEffects (patients: PatientsRegister, patientsAfterCure: PatientsRegister, disease: string, effect: string) {
        Object.entries(patients).forEach(entry => {
            const [key, value] = entry
            if (key === disease) {
                patientsAfterCure[disease] = 0
                patientsAfterCure[effect] += value
            }
        })
    }

    private killsEvryBody (patients: PatientsRegister) {
        let deads: PatientsRegister = { X: 0 }
        Object.entries(patients).forEach(entry => {
            const [key, value] = entry
            if (!(key === 'X')) {
                deads[key] = 0
                deads.X += value
            }
        })

        return deads
    }

    public wait40Days(): void {
        const patientsAfterCure = Object.assign({}, this.getPatients())
        const drugs = this.getDrugsConfigs()

        if (drugs) {
            Object.entries(drugs).forEach(entry => {
                const [key, value] = entry
                if (key === 'Insulin' && value === false) {
                    this.cureEffects(this.patients, patientsAfterCure, 'D', 'X')            
                }
    
                if (key === 'Aspirin' && value || key === 'Paracetamol' && value) {
                    if (drugs.Paracetamol && drugs.Aspirin) {
                        const result = this.killsEvryBody(this.patients)
                        Object.assign(patientsAfterCure, result)
                    } else {
                        this.cureEffects(this.patients, patientsAfterCure, 'F', 'H')
                    }
                }

                if (key === 'Antibiotic' && value) {
                    if (drugs.Insulin) {
                        this.cureEffects(this.patients, patientsAfterCure, 'H', 'F')
                    } 
                    this.cureEffects(this.patients, patientsAfterCure, 'T', 'H')
                }
            })
        } else {
            this.cureEffects(this.patients, patientsAfterCure, 'D', 'X')
        }
        this.setPatients(patientsAfterCure)
    }

    // public wait40Days(): void {
    //     const patientsAfterCure = Object.assign({}, this.patients)
    //     // { F: 1, H: 2, D: 3, T: 1, X: 0 }
    //     // As: Aspirin, An: Antibiotic, I: Insulin, P: Paracetamol
    //     if (this.drugs) {
    //         if (!this.drugs.includes('I')) {
    //             this.cureEffects(this.patients, patientsAfterCure, 'D', 'X')
    //         }

    //         if (this.drugs.includes('As') && !(this.drugs.includes('P'))) {
    //             this.cureEffects(this.patients, patientsAfterCure, 'F', 'H')
    //         }

    //         if (this.drugs.includes('An')) {
    //             if (this.drugs.includes('I')) {
    //                 this.cureEffects(this.patients, patientsAfterCure, 'H', 'F')
    //             } 
    //             this.cureEffects(this.patients, patientsAfterCure, 'T', 'H')
    //         }

    //         if (this.drugs.includes('P')) {
    //             if (this.drugs.includes('As')) {
    //                 const result = this.killsEvryBody(this.patients)
    //                 Object.assign(patientsAfterCure, result)
    //             } else {
    //                 this.cureEffects(this.patients, patientsAfterCure, 'F', 'H')
    //             }
    //         }
    
    //     } else {
    //         this.cureEffects(this.patients, patientsAfterCure, 'D', 'X')
    //     }
    //     this.patients = patientsAfterCure
    // }

    public report(): PatientsRegister {
        return this.patients
    }
}
