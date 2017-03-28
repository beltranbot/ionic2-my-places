# ionic2-my-places
Test Ionic 2 application, includes use of storage and google maps

install dependencies with npm

    cd ionic2-my-places
    npm install

get you googple maps api key [here](https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en), and change
it in the /src/app/app.module.ts file

    imports: [
        IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot(MyApp),
        AgmCoreModule.forRoot({
          apiKey:'<your-google-maps-api-key>'
        })
    ],

to run in local web server use

    ionic serve

to generate the android apk with ionic first you need to add the platform with cordova
    
    cordova platform add android

Then build the application with android with
    
    ionic build android

to run the android application from an ADV use
    
    ionic run android
