let theme = "light";
let useCustomTheme = false; // Must Set to true if using a custom theme
let customHost = "https://gamergoat112.github.io/gba-host/";
let useCustomHost = true; // Must Set to true if using a custom host
let useAltHost = false; 
let useNetPlay = false;
let useAltNdsHost = false;

















if (useCustomTheme == true) {
localStorage.setItem("theme", (theme));
}
if (useCustomHost == true) {
localStorage.setItem("custHost", JSON.stringify(customHost));
localStorage.setItem("is1Check", JSON.stringify(useCustomHost));
}

if (useAltHost == true) {
localStorage.setItem("isCheck", JSON.stringify(useAltHost));
}
if (useNetPlay == true) {
localStorage.setItem("isNet", JSON.stringify(useNetPlay));
}
if (useAltNdsHost == true) {
    localStorage.setItem("doGitHack", JSON.stringify(useAltNdsHost));
}
