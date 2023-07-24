'use client';

import {useEffect} from 'react';
import {Button} from '@/components/Button/Button';

export default function Error({error, reset}: {error: Error; reset: () => void}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="pt-24 h-screen">
      <div className="p-4 rounded bg-red-50 text-red-800 dark:text-red-400">
        <h2>Something went wrong!</h2>
        {error.message && <p className="mt-2">Error message: {error.message}</p>}
        <Button className="mt-4" onClick={() => reset()}>
          Try again
        </Button>
      </div>
    </div>
  );
}
