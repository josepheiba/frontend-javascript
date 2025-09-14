namespace Subjects {
  export interface Subject {
    setTeacher(teacher: Teacher): void;
  }

  export class Subject {
    teacher: Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
