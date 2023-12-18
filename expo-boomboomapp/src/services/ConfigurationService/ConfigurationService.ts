import {singleton} from 'tsyringe';

@singleton()
export default class ConfigurationService {

  getApiUrl(): string {
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;
    if (!apiUrl) {
      throw new Error(
        'add API_URL in .env file. example: API_URL=http://192.168.1.186:4000/api',
      );
    }
    return apiUrl;
  }

  isAppInDebugMode(): boolean {
    // TODO add --dev=false in bundle command
    //  Building the bundle via --dev=false should unset __DEV__.
    return __DEV__;
  }

  byPassSignInScreen() {
    return process.env.EXPO_PUBLIC_BY_PASS_SIGN_IN_SCREEN === 'true';
  }
}