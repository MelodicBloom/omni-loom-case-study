import { redirect } from 'next/navigation';

// Root redirects to the flagship case study
export default function Home() {
  redirect('/case-studies/omni-loom');
}
