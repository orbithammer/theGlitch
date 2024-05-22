export const getPreferredTheme = () => {
    const hasDarkPreference = window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    console.log("hasDarkPreference", hasDarkPreference)
    return hasDarkPreference ? true : false;
  };