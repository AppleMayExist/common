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