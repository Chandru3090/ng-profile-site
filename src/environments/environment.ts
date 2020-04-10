// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  caseByAllCountry:'https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php',
  worldTotalStats:'https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php',
  caseByCountryWise:'https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php',
  covid19India:'https://corona-virus-world-and-india-data.p.rapidapi.com/api_india'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
