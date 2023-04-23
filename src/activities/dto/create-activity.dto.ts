export class CreateActivityDto {
    title: string;
    email: string;

    constructor(title: string, email: string) {
        this.title = title;
        this.email = email;
    }
}
