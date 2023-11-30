module.exports = {
  preset: 'jest-expo',
  testEnvironment: 'node',
  transformIgnorePatterns: [
    'node_modules/(?!react-native|@react-native|native-base-shoutem-theme|@shoutem/animation|@shoutem/ui|tcomb-form-native|@react-native-community/(.*)|@react-navigation/(.*)|@react-native-firebase/(.*)|@sentry/react-native|jest-runtime)',
  ],
  testPathIgnorePatterns: ['/node_modules/'],
};
