import { PRIORITY } from './PRIORITY';
import { TYPE } from './TYPE';
import { STATUS } from './STATUS';
import { SEVERITY } from './SEVERITY';

export class Bug{
  id:string='';
  priority:string='LOW';
  type:string='RUNTIME';
  status:string='NEW';
  severity:string='LOW';
  buildVersion:string='';
  name:string='';
  projectId:string='';
  module:string='';
  product:string='';
  synopsis:string='';
  description:string='';
  eta:Date=new Date();
}
