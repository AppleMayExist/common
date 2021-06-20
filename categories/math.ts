/**
 * FYI: Minimum and maximum numbers ARE included.
 */
export const random = (min: number, max: number) => {
    return Math.round(Math.random() * (max - min) + min);
};