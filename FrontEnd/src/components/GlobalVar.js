import { useState } from "react";

export let isLoggedIn = false;

export function changeLoginToTrue() {
    isLoggedIn = true;
    console.log(isLoggedIn);
}

export function changeLoginToFalse() {
    isLoggedIn = false;
    console.log(isLoggedIn);
}

export function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}