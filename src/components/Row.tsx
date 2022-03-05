import { OperationType } from "./type";
import { OperationRow} from './OperationRow';
import {ConversionRow } from './ConversionRow'

interface RowProps {
  index: number;
  operation: OperationType;
  onSucceed: (isSucceded: boolean, index: number) => void;
}

export const Row = (props: RowProps) => {
  const { index, operation, onSucceed } = props;

  if(operation === 'conversion'){
    return(<ConversionRow index={index} onSucceed={onSucceed} operation={operation}/>)
  }else{
    return (<OperationRow index={index} onSucceed={onSucceed} operation={operation}/>);
    }
};