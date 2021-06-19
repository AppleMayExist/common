import * as color from "https://deno.land/std@0.99.0/fmt/colors.ts"

// /**
//  * FYI: Minimum and maximum numbers ARE included.
//  */
// export const random = (min: number, max: number) => {

// }

export const error = (str: string, errorCode?: number) => {
    console.error(color.bgBlack(color.red(str.trim())))
    Deno.exit(errorCode ?? 1)
}

export const isJSON = (data: string | Uint8Array) => {
    try {
        JSON.parse(typeof data === "string" ? data : new TextDecoder().decode(data))
    } catch (_) {
        return false
    }
    return true
}