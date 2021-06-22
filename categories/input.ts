/**
 * Generator function that outputs keystrokes.
 * @param disableSetRaw States whether to disable setRaw in stdin when finished. True by default.
 */
export const input = async function*(disableSetRaw = true) {
    Deno.setRaw(0, true);
    const x = new Uint8Array(1);
    while (true) {
        await Deno.stdin.read(x);
        if ([0, 10, 13].includes(x[0])) {break;}
        else {yield new TextDecoder().decode(x);}
    }
    disableSetRaw && Deno.setRaw(0, false);
    return;
};

/**
 * Generator function that outputs keystrokes' ascii code.
 * @param disableSetRaw States whether to disable setRaw in stdin when finished. True by default.
 */
 export const inputRaw = async function*(disableSetRaw = true) {
    Deno.setRaw(0, true);
    const x = new Uint8Array(1);
    while (true) {
        await Deno.stdin.read(x);
        if ([0, 10, 13].includes(x[0])) {break;}
        else {yield x[0];}
    }
    disableSetRaw && Deno.setRaw(0, false);
    return;
};