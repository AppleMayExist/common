import * as color from "https://deno.land/std@0.99.0/fmt/colors.ts";

// polyfills
const isDeno = !!Deno;

/**
 * FYI: Minimum and maximum numbers ARE included.
 */
export const random = (min: number, max: number) => {
    return Math.round(Math.random() * (max - min) + min);
}

export const error = (str: string, errorCode?: number) => {
    console.error(color.bgBlack(color.red(str.trim())));
    isDeno && Deno.exit(errorCode ?? 1);
};

export const isJSON = (data: string | Uint8Array) => {
    try {
        JSON.parse((typeof data === "string" ? data : new TextDecoder().decode(data)).trim());
    } catch (_) {
        return false;
    }
    return true;
};

/**
 * Returns promise resolving to string from input of user. This function works on Deno only.
 * @param Uint8ArraySize The size of the Uint8Array, which dictates how many characters from the user can be stored. Defaults to 1024.
 * @param removeNewLine Whether to trim the edges (whitespace). True by default.
 */
export const input = async (Uint8ArraySize = 1024, trim = true) => {
    if (!isDeno) {error("This function is only compatible with Deno!"); return}
    const x = new Uint8Array(Uint8ArraySize);
    await Deno.stdin.read(x);
    return trim ? new TextDecoder().decode(x).trim() : new TextDecoder().decode(x);
}

/**
 * Returns string from input of user. This function works on Deno only.
 * @param Uint8ArraySize The size of the Uint8Array, which dictates how many characters from the user can be stored. Defaults to 1024.
 * @param trim Whether to trim the edges (whitespace). True by default.
 */
 export const inputSync = (Uint8ArraySize = 1024, trim = true) => {
    if (!isDeno) {error("This function is only compatible with Deno!"); return}
    const x = new Uint8Array(Uint8ArraySize);
    Deno.stdin.readSync(x);
    return trim ? new TextDecoder().decode(x).trim() : new TextDecoder().decode(x);
}



/**
 * Generator function that outputs keystrokes. This function works on Deno only.
 * @param returnChar States whether to return a number (corresponding to ASCII characted), or just the character (from a TextDecoder).
 * @param disableSetRaw States whether to disable setRaw in stdin when finished. True by default.
 */
export const inputRaw = async function*(returnChar = false, disableSetRaw = true) {
    if (!isDeno) {error("This function is only compatible with Deno!"); return}
    Deno.setRaw(0, true);
    const x = new Uint8Array(1);
    while (true) {
        await Deno.stdin.read(x);
        if ([0, 10, 13].includes(x[0])) {break;}
        else {yield returnChar ? x[0] : new TextDecoder().decode(x);}
    }
    disableSetRaw && Deno.setRaw(0, false);
    return;
};