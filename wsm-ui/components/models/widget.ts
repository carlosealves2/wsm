export interface Widget {
    id: number;
    title: string;
    grid: {
        x: number;
        y: number;
        w: number;
        h: number;
    }
}