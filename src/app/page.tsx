import { redirect } from 'next/navigation';

export default function Page() {
  redirect('/home'); // Redirect to the Home page
  return null; // This won't render since the redirect happens immediately
}
