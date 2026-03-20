"use strict";
// Loop + Control Statements Example
Object.defineProperty(exports, "__esModule", { value: true });
for (let i = 1; i <= 10; i++) {
    // if condition (control statement)
    if (i === 5) {
        console.log("Skipping 5");
        continue; // skip this iteration
    }
    if (i === 8) {
        console.log("Stopping at 8");
        break; // stop loop
    }
    console.log(i);
}
//# sourceMappingURL=loop.js.map