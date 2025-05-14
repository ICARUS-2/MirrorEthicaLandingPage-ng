export default class BlogDataModel
{
    date: Date = new Date();
    title: string = "";
    textContent: string = "";

    constructor(date_: Date, title_: string, textContent_: string )
    {
        this.date = date_;
        this.title = title_;
        this.textContent = textContent_;
    }
}