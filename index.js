/**
 * @description Find sum of given numbers
 * @param  {...number} nums numbers to add
 */
export function sum(...nums) {
    return nums.reduce((acc, num) => acc + num, 0);
}