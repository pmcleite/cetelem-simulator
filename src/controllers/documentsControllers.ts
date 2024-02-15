import { Request, Response } from 'express'
import { DocumentsRequestType, DocumentsResponseType, DocumentsErrorCode } from '../types/documents'
import { documentsErrorCodes } from '../constants'
import { dummyDocuments } from '../data/documents'

export const documents = (
  req: Request<any, any, DocumentsRequestType>,
  res: Response<DocumentsResponseType | DocumentsErrorCode>,
) => {
  try {
    res.send(dummyDocuments)
  } catch (error) {
    res.send(documentsErrorCodes[0])
  }
}
