// src/utils/Stack.tsx

export type StackItem = {
    id: number;
    top: string;
    left: string;
    active: boolean;
    childrenId: number[];
};
  
export class Stack {
    private items: StackItem[];

    constructor() {
        this.items = [];
    }

    push(item: StackItem): void {
        this.items.push(item);
    }

    pop(): StackItem | null {
        if (this.isEmpty()) return null;
        return this.items.pop()!;
    }

    peek(): StackItem | null {
        return this.isEmpty() ? null : this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }

    clear(): void {
        this.items = [];
    }

    getItems(): StackItem[] {
        return [...this.items]; 
      }
}
  