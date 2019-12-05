class Task {
    private _id: number;
    private _title: string;

    public constructor(id: number, title: string = null) {
        this._id = id;
        this._title = title;
    }

    get id(): number {
        return this._id;
    }

    get title(): string {
        return this._title;
    }
}

const MAX_EIGHT_DIGIT: number = 999999999;

const IdRule = {
    /**
     * idは8桁以下
     */
    isNoMoreThanEight(id: number): boolean {
        return id > 0 && id < MAX_EIGHT_DIGIT;
    }
};

export {Task, IdRule}