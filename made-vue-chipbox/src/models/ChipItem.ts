export default class ChipItem {
    public constructor(content: any) {
        this.content = content;
    }

    public content: any;

    public toString(): string {
        return this.content;
    }
}