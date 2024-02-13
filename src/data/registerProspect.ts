import { RegisterProspectRequestType } from '../types/registerProspect'

export const dummyRegisterProspect: RegisterProspectRequestType = {
  holderFiscalNumber: '123456789',
  holderCompleteName: 'John Doe',
  holderEmail: 'johndoe@mail.com',
  holderCellNumber: '123456789',
  simulationId: 123,
  goodCode: 'Yes',
  hasInsurance: false,
  typology: 'A',
}

export default dummyRegisterProspect
