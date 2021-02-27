import React from 'react';
import { ChallengesProvider } from '../contexts/ChallengeContexts';

import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
