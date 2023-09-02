'use client';
import {
  ArrowRight,
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from 'lucide-react';
import {useRouter} from 'next/navigation';

import {Card} from '@/components/ui/card';
import {cn} from '@/lib/utils';

const routes = [
  {
    label: 'Conversation',
    icon: MessageSquare,
    href: '/conversation',
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
    href: '/image',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    href: '/video',
  },
  {
    label: 'Music Generation',
    icon: Music,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    href: '/music',
  },
  {
    label: 'Code Generation',
    icon: Code,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    href: '/code',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
  },
];

export default function HomePage() {
  const router = useRouter();

  return (
    <div>
      <div className='mb-8 space-y-4'>
        <h2 className='text-2xl font-bold text-center md:text-4xl'>
          Explore the power of AI
        </h2>
        <p className='text-sm font-light text-center text-muted-foreground md:text-lg'>
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>
      <div className='px-4 space-y-4 md:px-20 lg:px-32'>
        {routes.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className='flex items-center justify-between p-4 transition cursor-pointer border-black/5 hover:shadow-md'>
            <div className='flex items-center gap-x-4'>
              <div className={cn('p-2 w-fit rounded-md', tool.bgColor)}>
                <tool.icon className={cn('w-8 h-8', tool.color)} />
              </div>
              <div className='font-semibold'>{tool.label}</div>
            </div>
            <ArrowRight className='w-5 h-5' />
          </Card>
        ))}
      </div>
    </div>
  );
}
