export interface Employee {
    employee_id: string;
    first_name: string;
    middle_name: string;
    last_name: string;
    gender: string;
    infractions: number;
    employee_image: string;
    hire_date: string | Date;
}
