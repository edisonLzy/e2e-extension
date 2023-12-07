export interface Case {
    id: string;
    filePath: string;
}

export interface Group {
    name: string;
    totalCases: Case[]
    todoCases: Case[]
}