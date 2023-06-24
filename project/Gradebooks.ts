import { Gradebooks, Records } from "./interface";
import { Pupil } from "./Pupils";
import { LMS } from "./Lms";
import { teachers } from "./Teachers";
import { Group } from "./Groups";


export class Gradebook {
    [x: string]: any;
    private gradebooks: Gradebooks[] = [];
    private group: Group;
    private teacher: teachers;
    private lms: LMS;
    private pupil: Pupil;

    constructor(group: Group, teacher: teachers, lms: LMS) {
        this.group = group;
        this.teacher = teacher;
        this.lms = lms;
      }

      add(groupId: string): string {
        const id = this.generateUniqueId();
        this.gradebooks.push({ id, records: [] });
        return id;
      }

      clear(): void {
        this.gradebooks = [];
      }
    
      addRecord(gradebookId: string, record: Records): void {
        const gradebook = this.gradebooks.find((g) => g.id === gradebookId);
        if (gradebook) {
          gradebook.records.push(record);
        }
      }
}
