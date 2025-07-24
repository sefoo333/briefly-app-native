import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from '../config';

WebBrowser.maybeCompleteAuthSession();

export function useGoogleLogin() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: '1007658126596-1v4k5i5jusvfipqj6puo1oahngajlrjq.apps.googleusercontent.com',
    androidClientId: '545952644953-fpeerstnu3njnds5cajsl5u3n3ecjsin.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then(userCredential => {
          console.log("✅ Google sign-in:", userCredential.user.email);
        })
        .catch(error => {
          console.error("❌ Firebase error:", error.message);
        });
    }
  }, [response]);

  return [promptAsync, request];
}
