import { PRIORITY } from './PRIORITY';
import { TYPE } from './TYPE';
import { STATUS } from './STATUS';
import { SEVERITY } from './SEVERITY';

export class Bug{
  id:string='';
  priority:PRIORITY=PRIORITY.LOW;
  type:TYPE=TYPE.RUNTIME;
  status:STATUS=STATUS.NEW;
  severity:SEVERITY=SEVERITY.LOW;
  buildVersion:string='';
  name:string='';
  projectId:string='';
  module:string='';
  product:string='';
  synopsis:string='';
  description:string='';
  eta:Date=new Date();
}
