export class CreateTodoDto {
    activity_group_id: number;
    title: string;
    priority: string;
    is_active: boolean;
    constructor(title: string, is_active: boolean, priority: string, activity_group_id: number) {
        this.activity_group_id = activity_group_id;
        this.title = title;
        this.priority = priority;
        this.is_active = is_active;
    }

}
