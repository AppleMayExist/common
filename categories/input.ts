/**
 * Generator function that outputs keystrokes.
 * @param returnChar States whether to return a number (corresponding to ASCII characted), or just the character (from a TextDecoder).
 * @param disableSetRaw States whether to disable setRaw in stdin when finished. True by default.
 */
export const input = async function*(returnChar = false, disableSetRaw = true) {
    Deno.setRaw(0, true);
    const x = new Uint8Array(1);
    while (true) {
        await Deno.stdin.read(x);
        if ([0, 10, 13].includes(x[0])) {break;}
        else {yield returnChar ? new TextDecoder().decode(x) : x[0];}
    }
    disableSetRaw && Deno.setRaw(0, false);
    return;
};