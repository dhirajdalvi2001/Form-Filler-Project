export let isLoggedIn = false;

export function changeLoginToTrue() {
    isLoggedIn = true;
    console.log(isLoggedIn);
}

export function changeLoginToFalse() {
    isLoggedIn = false;
    console.log(isLoggedIn);
}