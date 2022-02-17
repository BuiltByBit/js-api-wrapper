export class Throttler {
    setRead(retry: any): void;
    setWrite(retry: any): void;
    resetRead(): void;
    resetWrite(): void;
    stallIfRequired(write: any): Promise<void>;
    #private;
}
//# sourceMappingURL=Throttler.d.ts.map