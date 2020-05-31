import React from 'react';

class PatientService {
  constructor() {
    this.patients = [
      { hash: "key01", id: 1, firstName: "Bengt-Åke", cellphone: "0700 00 00 00", language: "sv" },
      { hash: "key02", id: 2, firstName: "Annabell", cellphone: "0700 00 00 01", language: "en" },
    ];
  }

  async getPatient(hash) {
    for (let i = 0; i < this.patients.length; i++) {
      if (this.patients[i].hash === hash) {
        return Promise.resolve(this.patients[i]);
      }
    }
    return new Error("An error occured, no data found");
  }

  async updatePatient(patient) {
    console.log("PatientService.updatePatient(): ", patient);
    const oldPatient = await this.getPatient(patient.hash);
    return { ...oldPatient, ...patient };
  }
}
export default PatientService;