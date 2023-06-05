export interface ITeacher {
    name: string;
    photo: string;
    gallery: string[];
    link: string;
    classes: string[];
    experience: string;
    teacherExperience: string;
    bio: string;
    education: string[];
    quote: string;
}

export interface ISchedule {
    id: number;
    class: string;
    teacher: string;
    classLink: string;
    teacherLink: string;
    days: string[];
    timeStart: string;
    timeFinish: string;
    hardLevel: string;
}

export interface IClasses {
    id: number;
    class: string;
    description: string;
}
