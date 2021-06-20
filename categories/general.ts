import * as color from "https://deno.land/std@0.99.0/fmt/colors.ts";

export const error = (str: string, errorCode?: number) => {
    console.error(color.bgBlack(color.red(str.trim())));
    !!Deno && Deno.exit(errorCode ?? 1);
};