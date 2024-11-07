import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Button
        variant={'outline'}
        className="bg-blue-500 text-white font-bold from-neutral-300 px-10 hover:bg-blue-400"
      >
        Hi There
      </Button>
    </div>
  );
}
