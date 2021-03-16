export interface Serviceproviderreg {
    email: any;
    password:  any;
    name:  any;
    mobile:  any;
    pin_code_id:  any;
    provider_type:  any;
    team_size:  any;
    vat_number:  any;
    rate_per_hour:  any;
    service_id:  any;
    doc: any;
    doc_name: any;
}
export interface Data {
    monday_start:any,
    monday_end:any,
    isAvailableMonday:any,
    tuesday_start:any,
    tuesday_end:any,
    isAvailableTuesday:any,
    wednesday_start:any,
    wednesday_end:any,
    isAvailableWednesday:any,
    thusday_start:any,
    thusday_end:any,
    isAvailableThusday:any,
    friday_start:any,
    friday_end:any,
    isAvailableFriday:any,
    saturday_start:any,
    saturday_end:any,
    isAvailableSaturday:any,
    sunday_start:any,
    sunday_end:any,
    isAvailableSunday:any
    reg: Serviceproviderreg[];
  
}
