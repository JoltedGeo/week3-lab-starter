// TODO: Create a type for staff ids, which should be strings

import { School } from "./common";

// TODO: Create a type for staff roles, which can be "Instructor", "Program Chair", "Coordinator", or "Advisor"

// TODO: Create an interface for staff members
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
type staffId = string;
type staffRole = ["Instructor", "Program Chair", "Coordinator", "Advisor"]

export interface Staff {
    id : staffId;
    name : string;
    school: School;
    officeLocation? : string;
    email? : string;
    yearStart? : string;
    specialities: [];
    optionalNote?: string;
}


