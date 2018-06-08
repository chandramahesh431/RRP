// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  createEmployeeUrl: 'http://192.168.200.73:3000/api/com.attra.rrp.employee.Employee',
  searchEmployeeUrl: 'http://192.168.200.73:3000/api/com.attra.rrp.employee.Employee',
  //searchEmployeeUrl :'http://localhost:8080/RRPDemo/getEmployeeById/',

  createNominationsUrl: 'http://192.168.200.73:3000/api/com.attra.rrp.nomination.Nomination',
  searchNominationsUrl: 'http://192.168.200.73:3000/api/com.attra.rrp.nomination.Nomination',

  createprogramUrl: 'http://192.168.200.73:3000/api/com.attra.rrp.program.createProgram',

  ldapUrl: 'http://192.168.200.73:3001/auth/ldap',
  walletUrl: 'http://192.168.200.73:3001/api/wallet/import',



};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.