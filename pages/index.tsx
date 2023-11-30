import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex flex-col items-center justify-between p-24 ${inter.className}`}>
      <p className="text-3xl font-bold">Assignment Tasks</p>
      <div className="flex flex-col md:flex-row gap-4 mt-48">
        <Link className="btn btn-primary btn-wide" href="/task-list">
          Task List
        </Link>
        <Link className="btn btn-secondary btn-wide" href="/pagination">
          Pagination
        </Link>
      </div>
    </main>
  );
}
