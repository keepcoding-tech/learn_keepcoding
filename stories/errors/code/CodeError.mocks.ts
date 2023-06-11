import { ICustomError } from '../../../components/errors/custom/CustomError';

const accessForbiden: ICustomError = {
  statusCode: '403',
  title: 'access forbiden',
  description: "(I'm sorry boddy...)",
};

export const mocksCustomErrorProps = { accessForbiden };
