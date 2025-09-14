namespace Subjects {
  export class Subject {
    teacher: Teacher = {} as Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
