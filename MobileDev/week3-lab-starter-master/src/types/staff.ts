// TODO: Create a type for staff ids, which should be strings
export type StaffId = string;
import {School} from './common';

// TODO: Create a type for staff roles, which can be "Instructor", "Program Chair", "Coordinator", or "Advisor"
type StaffRoles = 
    "Instructor" | "Program Chair" | "Coordinator" | "Advisor";

interface Specialties {
    english: Boolean;
    math: Boolean;
    socialStudies: Boolean;
    science: Boolean;
}
// The interface should include the following properties:
// an id (hint: use the StaffId type created above)
// a name
// a role (hint: use the StaffRole type created above)
// a school (hint: use the School type from common.ts)
// an optional office location
// an optional email address
// an optional start year
// an array of specialties
// an optional fun fact

// once all group members have completed their sections, add the following field:
// an optional array of course ids that this staff member teaches

export interface Staff {
    staffID: StaffId;
    name : string;
    staffRole: StaffRoles;
    school: School;
    officeLocation?: string;
    email?: string;
    startYear?: string;
    specialties: Specialties;
    funFact?: string;
}
