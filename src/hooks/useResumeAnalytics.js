import { useEffect, useCallback } from 'react';
import { ref, push, serverTimestamp } from 'firebase/database';
import { database } from '../firebase';

export const useResumeAnalytics = () => {
  const trackResumeDownload = useCallback(async () => {
    try {
      const resumeRef = ref(database, 'resume_downloads');
      await push(resumeRef, {
        timestamp: serverTimestamp(),
        country: await fetchCountry(),
        referrer: document.referrer || 'direct'
      });
    } catch (error) {
      console.error('Failed to track resume download:', error);
    }
  }, []);

  const fetchCountry = async () => {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      return data.country_name;
    } catch (error) {
      return 'Unknown';
    }
  };

  return { trackResumeDownload };
};