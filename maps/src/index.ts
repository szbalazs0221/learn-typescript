import { Company } from './Company';
import { CustomMap } from './CustomMap';
import { User } from './user';

const user = new User();
const company = new Company();
const map = new CustomMap('map');

map.addMarker(company);
map.addMarker(user);
