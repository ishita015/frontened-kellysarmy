// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // apiUrl: 'http://103.15.67.78:3082',
  // apiUrl: 'http://103.15.67.78:3082',

  apiUrl: 'http://103.15.67.78:3082',

  DomesticeServiceUrl: 'http://103.15.67.78:4005/domestic-cleaning/0/0',
  DeepCleaningServiceUrl: 'http://103.15.67.78:4005/deep-cleaning/0/0',
  refferUrl: 'http://103.15.67.78:4005/reffer',
  myServicesUrl: 'http://103.15.67.78:4005/my-service',
  serviceRequestUrl: 'http://103.15.67.78:4005/service-providers/service-request',
  serviceInProgressUrl: 'http://103.15.67.78:4005/service-providers/service-inprogress',
  serviceCompletedCancleUrl: 'http://103.15.67.78:4005/service-providers/service-complete-cancel',
  signupUrl: 'http://103.15.67.78:4005/signup',
  signupProviderUrl: 'http://103.15.67.78:4005/member/step1',
  image_path:'http://103.15.67.78:3082/images/',
  // image_path:'http://103.15.67.78:3082/images/',

  // stripe_publishable_key:'pk_test_nvcj35njjOglqeQI0RtwSBjo00Wt6AHPxl',
  stripe_publishable_key:'pk_test_51IBDTNHee2WtYVWqXvEcPsSVFIu1MVHGi2dtA7EHvwdQtsqIVbNzuihjmnmrYQpb6Ol4lDhuH8m6HhiujafYPnNM00vwxG1n2S',
  // apiUrl: 'http://localhost:3001',
  filesType: ['image/jpg', 'image/jpeg', 'image/png', 'application/pdf'] ,// file type extension allowed
  PaypalUrl:'http://103.15.67.78:3082/paypal-payment-web/?'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
