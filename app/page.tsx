'use client';
import { Inter } from '@next/font/google';
import { Card } from '@chakra-ui/react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <main>
            <Card>Hello</Card>
        </main>
    );
}
